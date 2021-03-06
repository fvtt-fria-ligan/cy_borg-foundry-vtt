import { CYActor } from "../actor/actor.js";
import { CY } from "../config.js";
import { CYItem } from "../item/item.js";
import { randomName } from "./names.js";

import {
  documentFromPack,
  drawFromTable,
} from "../packutils.js";

export const createRandomScvm = async () => {
  const clazz = await pickRandomClass();
  await createScvm(clazz);
};

export const createScvm = async (clazz) => {
  const scvm = await rollScvmForClass(clazz);
  await createActorWithScvm(scvm);
};

export const scvmifyActor = async (actor, clazz) => {
  const scvm = await rollScvmForClass(clazz);
  await updateActorWithScvm(actor, scvm);
};

const pickRandomClass = async () => {
  const classPacks = findClassPacks();
  if (classPacks.length === 0) {
    // TODO: error on 0-length classPaths
    return;
  }
  const packName = classPacks[Math.floor(Math.random() * classPacks.length)];
  // TODO: debugging hardcodes
  const pack = game.packs.get(packName);
  const content = await pack.getDocuments();
  return content.find((i) => i.data.type === "class");
};

export const findClassPacks = () => {
  const classPacks = [];
  const packKeys = game.packs.keys();
  for (const packKey of packKeys) {
    // moduleOrSystemName.packName
    const keyParts = packKey.split(".");
    if (keyParts.length === 2) {
      const packName = keyParts[1];
      if (packName.startsWith("class-") && packName.length > 6) {
        // class pack
        classPacks.push(packKey);
      }
    }
  }
  return classPacks;
};

export const classItemFromPack = async (packName) => {
  const pack = game.packs.get(packName);
  const content = await pack.getDocuments();
  return content.find((i) => i.data.type === "class");
};

const rollTotal = (formula) => {
  return new Roll(formula).evaluate({async: false}).total
};

const abilityRoll = (formula) => {
  return abilityBonus(rollTotal(formula));
}

const classStartingArmor = async (clazz) => {
  const ccPack = game.packs.get(CY.scvmFactory.characterCreationPack);
  const ccContent = await ccPack.getDocuments();
  if (CY.scvmFactory.startingArmorTable && clazz.data.data.armorTable) {
    const armorRoll = new Roll(clazz.data.data.armorTable);
    const armorTable = ccContent.find(
      (i) => i.name === CY.scvmFactory.startingArmorTable
    );
    const armorDraw = await armorTable.draw({
      roll: armorRoll,
      displayChat: false,
    });
    const armor = await docsFromResults(armorDraw.results);
    return armor;
  }
};

const classStartingWeapons = async (clazz) => {
  const ccPack = game.packs.get(CY.scvmFactory.characterCreationPack);
  const ccContent = await ccPack.getDocuments();
  if (CY.scvmFactory.startingWeaponTable && clazz.data.data.weaponTable) {
    const weaponRoll = new Roll(clazz.data.data.weaponTable);
    const weaponTable = ccContent.find(
      (i) => i.name === CY.scvmFactory.startingWeaponTable
    );
    const weaponDraw = await weaponTable.draw({
      roll: weaponRoll,
      displayChat: false,
    });
    const weapons = await docsFromResults(weaponDraw.results);
    // add ammo mags if starting weapon uses ammo
    const mags = [];
    for (const weapon of weapons) {
      if (weapon.data.data.usesAmmo) {
        const mag = await documentFromPack(CY.scvmFactory.ammoPack, CY.scvmFactory.ammoItem);
        const magRoll = new Roll("1d4").evaluate({async: false});
        // TODO: need to mutate _data to get it to change for our owned item creation.
        // Is there a better way to do this?
        mag.data.name = `${weapon.name} ${mag.name}`;
        // mag.data._source.data.quantity = magRoll.total;
        mag.data.data.quantity = magRoll.total;
        mags.push(mag);
      }      
    }
    weapons.push(...mags);    
    return weapons;
  }
};

const classStartingItems = async (clazz) => {
  if (clazz.data.data.items) {
    const startingItems = [];
    const lines = clazz.data.data.items.split("\n");
    for (const line of lines) {
      const [packName, itemName] = line.split(",");
      const pack = game.packs.get(packName);
      if (pack) {
        const content = await pack.getDocuments();
        const item = content.find((i) => i.data.name === itemName);
        if (item) {
          startingItems.push(item);
        }
      }
    }
    return startingItems;
  }
};

const classDescriptionLines = async (clazz) => {
  const ccPack = game.packs.get(CY.scvmFactory.characterCreationPack);
  const ccContent = await ccPack.getDocuments();
  const descriptionLines = [];
  descriptionLines.push(clazz.data.data.description);
  descriptionLines.push("<p>&nbsp;</p>");
  let descriptionLine = "";
  for (const dt of CY.scvmFactory.descriptionTables) {
    const table = ccContent.find((i) => i.name === dt.tableName);
    if (table) {
      const draw = await table.draw({ displayChat: false });
      const text = draw.results[0].data.text;
      descriptionLine += game.i18n.format(dt.formatKey, {text}) + " ";  
    } else {
      console.error(`Could not find table ${dt.tableName}`);
    }
  }
  if (descriptionLine) {
    descriptionLines.push(descriptionLine);
    descriptionLines.push("<p>&nbsp;</p>");
  }
  return descriptionLines;
};

const hasApp = (items) => {
  return items.filter(x => x.data.type === CY.itemTypes.app).length > 0;
}

const hasCybertech = (items) => {
  return items.filter(x => x.data.data.cybertech).length > 0;
}

const hasNano = (items) => {
  return items.filter(x => x.data.type === CY.itemTypes.nanoPower).length > 0;
}

const startingEquipment = async (clazz) => {
  const equipment = [];

  if (CY.scvmFactory.startingItemsPack) {
    const itemPack = game.packs.get(CY.scvmFactory.startingItemsPack);
    const items = await itemPack.getDocuments();
    for (const itemName of CY.scvmFactory.startingItems) {
      const item = items.find(x => x.data.name === itemName);
      equipment.push(item);
    }
  }

  const ccPack = game.packs.get(CY.scvmFactory.characterCreationPack);
  const ccContent = await ccPack.getDocuments();
  for (const tableName of CY.scvmFactory.startingEquipmentTables) {
    const table = ccContent.find(x => x.name === tableName);
    if (table) {
      const draw = await table.draw({ displayChat: false });
      let items = await docsFromResults(draw.results);
      if (clazz.data.data.onlyApps && (hasCybertech(items) || hasNano(items))) {
        // replace with a draw from apps
        const item = await drawFromTable(CY.scvmFactory.characterCreationPack, "Apps");
        items = [item];
      } else if (clazz.data.data.onlyCybertech && (hasApp(items) || hasNano(items))) {
        // replace with a draw from cybertech
        const item = await drawFromTable(CY.scvmFactory.characterCreationPack, "Cybertech", "1d12");
        items = [item];
      } else if (clazz.data.data.onlyNano && (hasApp(items) || hasCybertech(items))) {
        // replace with a draw from nano powers
        const item = await drawFromTable(CY.scvmFactory.characterCreationPack, "Nano Powers");
        items = [item];
      }
      equipment.push(...items);  
    } else {
      console.error(`Could not find table ${tableName}`);
    }
  }
  return equipment;
};

const rollScvmForClass = async (clazz) => {
  console.log(`Creating new ${clazz.data.name}`);
  const allDocs = [clazz];

  // all-character starting equipment tables
  const equipment = await startingEquipment(clazz);
  if (equipment) {
    allDocs.push(...equipment);
  }

  // starting weapons
  const weapons = await classStartingWeapons(clazz);
  if (weapons) {
    allDocs.push(...weapons);
  }

  // starting armor
  const armor = await classStartingArmor(clazz);
  if (armor) {
    allDocs.push(...armor);
  }

  // class-specific starting items
  const startingItems = await classStartingItems(clazz);
  if (startingItems) {
    allDocs.push(...startingItems);
  }

  // start accumulating character description, starting with the class description
  const descriptionLines = await classDescriptionLines(clazz);

  // class-specific starting rolls
  // these may add items, actors, or description lines
  const startingRollItems = [];
  if (clazz.data.data.rolls) {
    const lines = clazz.data.data.rolls.split("\n");
    for (const line of lines) {
      const [packName, tableName, rolls, formula] = line.split(",");
      // assume 1 roll unless otherwise specified in the csv
      const numRolls = rolls ? parseInt(rolls) : 1;
      const pack = game.packs.get(packName);
      if (pack) {
        const content = await pack.getDocuments();
        const table = content.find((i) => i.name === tableName);
        if (table) {
          const results = await compendiumTableDrawMany(table, numRolls, formula);
          for (const result of results) {
            // draw result type: text (0), entity (1), or compendium (2)
            if (result.data.type === 0) {
              // text
              descriptionLines.push(
                `<p>${table.data.name}: ${result.data.text}</p>`
              );
            } else if (result.data.type === 1) {
              // entity
              // TODO: what do we want to do here?
            } else if (result.data.type === 2) {
              // compendium
              const entity = await entityFromResult(result);
              startingRollItems.push(entity);
            }
          }
        } else {
          console.log(`Could not find RollTable ${tableName}`);
        }
      } else {
        console.log(`Could not find compendium ${packName}`);
      }
    }
  }
  allDocs.push(...startingRollItems);

  // make simple data structure for embedded items
  const items = allDocs.filter((e) => e instanceof CYItem);
  const itemData = items.map((i) => ({
    data: i.data.data,
    img: i.data.img,
    name: i.data.name,
    type: i.data.type,
  }));

  const name = randomName();
  const npcs = allDocs.filter(e => e instanceof CYActor);
  const npcData = npcs.map(e => ({
    data: e.data.data,
    img: e.data.img,
    name: `${name}'s ${e.data.name}`,
    type: e.data.type
  }));

  const strength = abilityRoll(clazz.data.data.strength);
  const agility = abilityRoll(clazz.data.data.agility);
  const presence = abilityRoll(clazz.data.data.presence);
  const toughness = abilityRoll(clazz.data.data.toughness);
  const knowledge = abilityRoll(clazz.data.data.knowledge);
  const hitPoints = Math.max(1,
    rollTotal(clazz.data.data.hitPoints) + toughness);
  const credits = rollTotal(clazz.data.data.credits);
  const glitches = rollTotal(clazz.data.data.glitches);

  return {
    actorImg: clazz.img,
    agility,
    credits,
    description: descriptionLines.join(""),
    glitches,
    hitPoints,
    items: itemData,
    knowledge,
    name,
    npcs: npcData,
    postCreateMacro: clazz.data.data.postCreateMacro,
    presence,
    strength,
    tokenImg: clazz.img,
    toughness,
  };
};

const scvmToActorData = (s) => {
  return {
    name: s.name,
    // TODO: do we need to set folder or sort?
    // folder: folder.data._id,
    // sort: 12000,
    data: {
      abilities: {
        strength: { value: s.strength },
        agility: { value: s.agility },
        presence: { value: s.presence },
        toughness: { value: s.toughness },
        knowledge: { value: s.knowledge },
      },
      credits: s.credits,
      description: s.description,
      glitches: {
        max: s.glitches,
        value: s.glitches,
      },
      hitPoints: {
        max: s.hitPoints,
        value: s.hitPoints,
      },
    },
    img: s.actorImg,
    items: s.items,
    flags: {},
    token: {
      img: s.actorImg,
      name: s.name,
    },
    type: "character",
  };
};

const createActorWithScvm = async (s) => {
  const data = scvmToActorData(s);
  // use CYActor.create() so we get default disposition, actor link, vision, etc
  const actor = await CYActor.create(data);  
  actor.sheet.render(true);

  // create any npcs
  for (const npcData of s.npcs) {
    if (npcData.type === "vehicle") {
      npcData.data.ownerId = actor.id;
    }
    const npcActor = await CYActor.create(npcData);
    npcActor.sheet.render(true);
  }

  // run post-create macro, if any
  if (s.postCreateMacro) {
    const [packName, macroName] = s.postCreateMacro.split(",");
    const pack = game.packs.get(packName);
    const content = await pack.getDocuments();
    const macro = content.find(x => x.name === macroName);
    if (macro) {
      macro.execute({actor});
    }
  }
};

const updateActorWithScvm = async (actor, s) => {
  const data = scvmToActorData(s);
  // Explicitly nuke all items before updating.
  // Before Foundry 0.8.x, actor.update() used to overwrite items,
  // but now doesn't. Maybe because we're passing items: [item.data]?
  // Dunno.
  await actor.deleteEmbeddedDocuments("Item", [], { deleteAll: true });
  await actor.update(data);
  // update any actor tokens in the scene, too
  for (const token of actor.getActiveTokens()) {
    await token.document.update({
      img: actor.data.img,
      name: actor.name,
    });
  }
};

const docsFromResults = async (results) => {
  const ents = [];
  for (const result of results) {
    const entity = await entityFromResult(result);
    if (entity) {
      ents.push(entity);
    }
  }
  return ents;
};

const entityFromResult = async (result) => {
  // draw result type: text (0), entity (1), or compendium (2)
  if (result.data.type === 2) {
    // grab the item from the compendium
    const collection = game.packs.get(result.data.collection);
    if (collection) {
      // TODO: should we use pack.getEntity(entryId) ?
      // const item = await collection.getEntity(result._id);
      const content = await collection.getDocuments();
      const entity = content.find((i) => i.name === result.data.text);
      return entity;
    } else {
      console.log(`Could not find pack ${result.data.collection}`);
    }
  }
};

const abilityBonus = (rollTotal) => {
  if (rollTotal <= 4) {
    return -3;
  } else if (rollTotal <= 6) {
    return -2;
  } else if (rollTotal <= 8) {
    return -1;
  } else if (rollTotal <= 12) {
    return 0;
  } else if (rollTotal <= 14) {
    return 1;
  } else if (rollTotal <= 16) {
    return 2;
  } else {
    // 17 - 20+
    return 3;
  }
};

/** Workaround for compendium RollTables not honoring replacement=false */
const compendiumTableDrawMany = async (rollTable, numDesired, formula) => {
  const rollTotals = [];
  let results = [];
  while (rollTotals.length < numDesired) {
    const roll = formula ? new Roll(formula) : undefined;
    const tableDraw = await rollTable.draw({ displayChat: false, roll });
    if (rollTotals.includes(tableDraw.roll.total)) {
      // already rolled this, so roll again
      continue;
    }
    rollTotals.push(tableDraw.roll.total);
    results = results.concat(tableDraw.results);
  }
  return results;
};
