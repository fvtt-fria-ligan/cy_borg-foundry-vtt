import { sample } from "../utils.js";

export const randomAd = () => {
  return sample(ads);
};

const ads = [
  "<b>BrunMG WellBeing</b> - Experience Vigor, one refreshing drop at a time.",
  "Take control; take <b>Control™</b>. Clarity in a Needle. (sync now for a 12 hour free* trial)",
  "<b>MOKA GUNS & BLADES</b><br>5% Disaster sale. Get 'em while you still can.",  
  "<i>Death by Coffee</i> is hiring! No rating required. Purchase a <b>SpeedRun Robusta to Go</b> to apply. Nod twice for drone delivery.",
  "SALE SALE SALE SALE SALE SALE SALE SALE SALE SALE SALE SALE",
  "<b>CPD Police Nachos</b><br>Support your wardens. Get a free Family Pack if your call puts a bad guy behind bars! <i>New Flavor -coming in hot-: Slum Sriracha</i>",
  "<b>Goblin Shark SmartWear</b><br>Sharpen your claws.",
  "<b>Net-Worth</b><br>Visit our website and see your total point worth from all your favorite registered products. Trade, share, and earn more Net coin to turn into your desired point currency! Don't let all the all the hustle and bustle Gross you out. We'll Net your worth and skim through your data for you. Easy and convenient.",
  "You're gonna love these shoes, [Name]. Data never lies. / LynxeR, one step ahead. <b>BLINK TWICE TO SIGN UP CxVV</b>",    
  "BFQVKE 3000 HORMONAL AMPLIFIER: GROW WIDE, GROW TALL",
  "Count moments, not bullets. <b>Vender MagSolutions</b>, your No1 partner in munitions management systems.",  
  "<b>BEERISH</b><br>Buy 2 for 3. Say I love Beerish! to order.",
  "<b>Manifest Munitions</b><br>Blaze your trail with lead that'll really make em run. <i>We're the best, forget the rest.</i><br><br><i>Coupons for buy one get one 5%  off for every prior separate bulk purchase of our Colt Classic Tear Jerker.</i>",
  "<b>DJ MURDER</b> New album <i>ENDEADEN</i> live in 3:01:00...",
  "BRASS-Bandit Recyclers in Burnchurch, we recycle your CASINGS, CANS, PETS and O T H E R",
  "<b>Vender MS</b> Victory Sale. Avoid the bad choice, go with Number 1. Classic Tear Jerker pistols 10% cheaper than our competitors. Offer lasts 10 hours.",
  "LIVE FAST - EAT FAST. // <b>HyperZone Hotdogs</b>",  
  "<i>Paradiso</i> a new Graven Hostel subsidiary. Lay your loved ones to rest in the most heavenly place on earth and visit them at your convenience.<br><br>//Live holo chat purchase sold separately. Rent rates vary on a monthly basis. //",
  "Workplace accident? Visit <b>MultiHead MedTech</b>, Old Straw. No union members allowed",
  "<b>ECO-INJECT</b> Deep-sleep Auto Injector FOR INSTANT RELIEF - Stop that noise in your head, guaranteed DREAMLESS sleep! <i>not for nefarious use, may cause partial or complete memory loss</i>",
  "<b>MED-BORG PLTS</b> Get your Stims, Dims, Sways And Haze at 10% off with offercode <b>BCKN_A10</b>",
  "Cybermechanics HATE this method of selfenhancement! Try our mod kits yourself to get stronger, faster, smarter, more beautiful and more productive!<br><br><b>HOT SALE</b> Get 4 for the price of 5!",
  "<i>TRY OUR SHOOTING GALLERY ~ SURVIVE FOR 7 MINUTES TO GET A 77% DISCOUNT ON ALL MEAT PRODUCTS</i><br><b>ECO-MEATERY</b> tastes like real meat, doesn't it? No animals were harmed!",
  "<b>Halodisc Hue</b>, Bright, Cozy, Study and 2,6 million other presets to personalize your home.",
  "Take an itty-bitty <b>Pity Pet</b> under your wing. Genetically deoptimized for absolute dependency and loyalty. Cuteness overload. Buy today. <i>Customizable</i>",
  "Your future. Our interest. <b>FT Banks and Holdings</b>",
  "Sleek and silent—the VT99 is here. Time to rethink RCD’s.<br><b>OpticPort Industries</b> <i>See the world through our eyes</i>",
  "<i>Escape the Mundane</i> - <b>MetaLich</b> Net Realm. <invitation only>",
  "You’re not beautiful. But you could be. <b>Serenade Cosmetics</b>",
  "[criminal activity detected in the area. move along. stay vigilant. continue to support <b>Nova Malls</b>]",
  "<b>MealTech Burger Buns</b> -/- buns for burgers. Simple and cheap.",
  "HYDRA-Flow! You deserve the best! Reline your veins, arteries and valves today with HYDRA-Flow high efficiency tubing!<br><i>Rated for Pneu-tech and Haemo-phos replacement blood systems</i>",
  "<b>MealTech Burgers</b> -/- Burgers. Simple and cheap.",
  "<b>Ommos Pro Social Chair</b>, step up your mingle—become a Net elite. Update, share, refresh like a boss. Sync for leasing plans.",
  "<b>MealTech Healthcare Plans</b> -/- Medical Life Insurance. Simple and cheap.",
  "<b>OnceN4All plastic bags</b> - single use, endless possibilities",
  "<b>The Wal</b> is your one-stop shop for all essentials.",
  "<b>The Wal</b> is the most secure shopping facility in the world.",
  "<b>The Wal</b> is protected by our secure 20-foot thick entryway barrier, a variety of affordable but durable protective sentries from the household .45 to home-defensive 50cal ordnance and beyond, and a vast selection of loyal and friendly automated associates ready to cater to your every need.",
  "<b>The Wal</b> is more than a store. It's a family. It's a friendship. It's an exclusive club.",
  "Save yourself. Live free. <b>The Wal</b>.",
  "ENTRY TO <b>The Wal</b> WILL NOT BE PERMITTED WITHOUT A WalKlub Pass (only 4500c annual fee).",
  "ALL UNAUTHORIZED ATTEMPTS TO ENTER <b>The Wal</b> WILL BE PERSECUTED TO THE FULL EXTENT OF LOCAL AUTHORITY.",
  "<b>Delta Max Robotics</b> _ Assistance, safeguarding or just a trusted friend. Let us build it for you.<br><i>Say [88371103472510] within 10 seconds to decline offer</i>",
  "Say <b>MacCarthy’s</b> to terminate VR gyro-punishment",
  "<b>LD-Multipass</b> GeT A¢¢€$$ 2 aLL Hyperstations, SelfKleans, SelfKills, BAssGun Pro Shops, The Wals and møre with a $ingLe transaction, super verified!",
  "<i>Are your children truly human?</i> <b>Tunerscope inc.</b>- reliable cydroid detection kits, on sale now. The only one to trust.",
  "<i>MURDER YOUR HUNGER</i> | The Colossus Quadruple Beef Burger. Come and get it. < <b>CKNG</b> better than real",
  "<b>MealTech Mash</b> -/- Lead Free Carbohydrates. Simple and cheap.",
  "<b>TransInc</b>, the one place to shop for all your hormone needs. Competitors? We murdered them all.",
  "Plumbing was never easier. <b>GET IT NOW</b> ~CATSLUG PIPE CLEANER~ let it crawl in your sewage system and all pipes will be cleaned in seconds!<br>No refunds for Catslugs that ran away.",
  "Tired of all the <i>LIFE</i> you have to deal with?! Not enough money to buy the latest tech?!<br><b>NOD TWICE TO ACCEPT</b> and plug yourself into <b>VEKTOR</b> to experience another world while your body helps our scientists to understand new usage of tech you are free to keep as soon as the tests are over! Your mind will be completely uploaded to <b>Vektor</b> for the duration of the procedure<br><i></i>PAY EXTRA TO TRAVEL THROUGH VEKTOR WITH A PET OR COMPANION OF YOUR CHOICE</i>",
  "USED CYBERTECH. 100% LEGAL. Sync for details.",
  "Ending SuperSALE + New FREE Gift + 40% off on <b>DealMart</b> - 14:59 remaining.",
  "###BUY THE LATEST KILLMONGER MERCH**<b>BUY BUY BUY</b>###",
  "Hot Pink Season is here! Check out over 3000+ [products] in stock. = <b>Universal Garments and Friends</b>",
  "$~Swipe right to enter raffle! ~$~ Every entry grants one free loot box!~$",
  "Can you solve the puzzle? Only PROS can.<br><b>Heist: Dark Myths</b> Warning - This Holo Game is really addictive",
  "For sale: baby shoes, never worn (new stock daily!!)",
  "Did you think stock trading was only for the rich elite? At <b>STOCKPRO</b>, you are absolutely correct. We are sure to run a background check on each and every one of our clients, to make sure you never have to interact with those filthy low-life scum.",
  "😘 Tired of Ads? 😢  Get <b>Add⏹️ MINUS</b>!!! 😜  Blocks ALL those pesky ads!* 🥰 <br>*[very small indecipherable text below]",
  "Предупреждение: вас взломали через 3, 2, 1 ...",
  "- <b>KILLMATCH</b> - The Final Showdown. <THUGGER> vs <GAMMA RAY DELUXE>. No holds barred.",
  "<b>GET THE NEW GAME BY MASTERHERO SYSTEMS</b>~💥 ~ <b>SUPER FLAIL MELEE ULTIMATE</b> ~:flail: ~ {available for all VR systems}",
  "{This ad space is provided by <b>Holospeak Dream Systems</b> a <i>Kaytell Makers company</i>}",
  "--Uplift your presence from the dirt beneath your feet. Feel the warm embrace of that what matters most. Cherish life. Cherish Vaudikarre Motors.--",
  "* * Odi et Amo. I love and I hurt. Want to get rid of that hurt? Buy Liquorette Licorice. Safe for kids, now with even more CHOOH. * *",
  "For those who live to drive.",
  "^ Join <b>ClothesBox</b> now to get sent a new set of clothes, every single day! ^",
  "#Let go of your partner! They don't even love you! Buy our latest Artificial Lover, this AL will show you what real love is!#",
  "GET THE BLOOD PUMPING +++ <b>GRATFLEISCH DOME GAMES</b>",
  "Tastes of real fruit; Synthe-fruit, the only choice that is 15% organic",
  "Nano infection? Don’t worry, we can study it. Sign up for body donation, sync for contract. <b>TG Labs Ministations</b>",
  "<b>WATER</b>®<br>Remember when it was free?",
  "<b>YOU WON!!!</b> Claim 3.000.000.000c with this unique promo code: G3TPHUQ3D - synch now!</br><i>/Hey I am logging into your peripherals on a hidden channel, I am the princess of Sarkash and if you help me with a donation, I can get the riches that belong to me and you will be heavily rewarded! Synch now and donate as much as you can, this line is safe for now, quickly!/</i>",
  "<b>NewGenics</b> gene treatment. Life extended. Mortality defeated. Pray for death.",
  "<b>BUY NOW: MONEY!</b>",
  "The Future and the Pasta. Eat Ravioli, Kill Demons, Score Points. <b>PASTA HELL</b>",
  "<i><b>MeatLabs</b> prosthetics too expensive for you? Hop on down to the <b>Black Meat Market</b>!</i>",
  "Poverty is just poor branding. Let us help you repackage your financial status; care for your personal brand. Sync for a free day0 analysis and roadmap preview. </ <b>ZeroCom Communication Agency</b>",
  "People are numbers. Do the math. <b>InScense</b> SmartFragrance for Thinkers",
  "<b>Ghostbusters 7</b> coming this Fiscal Quarter. Featuring state of the art CGI recreation, we’ve captured what Ivan Reitman’s REAL corpse looked like at his funeral to recreate beloved character Egon Spengler like he’s never been seen before: This time, he IS the ghost!!!",
  "You're a spark in the fireworks of the now. Act the part. <b>Ahzer Noodles</b>",
  "\"INSUFFICIENT!\" <b>Mr Nanohead Power nodes</b>",
  "Sick and tired of that hologram of your deceased loved ones? Bring their bones and ashes to <b>MeatLabs</b>, and we'll make a new bodycopy of them for you! Guaranteed to not rot for at least 3 days",
  "Prank your friends. Surprise Tattoos. 2¤ each.",
  "<b>VEKTOR</b> Trauma Therapy _.- upload your mind to our Misery & Misanthropy Brainvironment and find how bad things can -Really- get. Return to a blissful life in CY with our PTS-Recovery bonus pack!<br><i>Requires purchase of VEKTOR base service and peripherals, full recovery not guaranteed</i>",
  "<b>You are not invited to the party.</b><br><br>Wanna join? [QRCODEID #3577445447785]",
  "<b>Fount Salted Cherry Soda</b> Mega Bundle Value Pack Deal Ending TONIGHT!",
  "[39 Friends Disagree with you] Sync to Reveal WHO. Free Trial today.",
  "Tired of your loving <i>Cicania Companion Solutions™ Designer Lifetime-Pal-SeaMonkeys ++</i>™ escaping in the dead of night and burrowing into your bloodstream? <b>WORRY NO LONGER!</b> our <b>BRAND-NEW CUTTING-EDGE</b> <i>Cicania™ Body™ Sealent™</i> will keep those pores and other potential bodily entrances clogged! <b>NOW WORKS AGAINST EVOLVED ACID-SPEWING VARIANTS! AND EVEN OTHER UNWANTED BODILY INTRUDERS!</b> <i>[Remember! Cicania Companion Solutions is now partnered with Marrow Extraction Payment Services™! Just plug that needle into your femur, select 'Cicania' and click 'SEND' to recieve 2.345% off of your next half-purchase!]</i>",
  "\"Meat\"™️ available now!",
  "<b>MealTech</b> Vegetable -/- Vegetable. Simple and cheap.",
  "[ASMR] Boltor The Transforminator Tells You You Are Big And Strong But Only If You Order SnakkRun and pick Speed Run Delivery in the next 48 hours!",
  "<i>Corporatists <b>HATE</b> him!</i><br><b>Click now to see why he should be killed on sight!</b>",
  "New from <b>The Cool Mini Coastal Workshop, EUGENICSWAR 45,999 666th Edition</b>. The most balanced edition ever, with new mechanics for Six Figure Generals. Now one Slaughter-Brother Quartermain miniature {1650cr} and ten squads of the CORVID-King’s DizeezFreeks or Slaasexii’ TransPredators {165cr per box} are more equal than ever! Burn the Degenerates of SanFranciskill-V! Smash the scheming agents of Sneetch before they forment rebellion! Xenos will not replace us!! Starter boxes now only 845cr (note: starter box components do not equal a full 20,000 point GenocideForce)",
  "<i>\"They're called workers, not complainers, so like, do... your job?\"</> Zuzo and Blink, unfazed by the critics, back at it again with another season of <b>SHITSHOW CHATTERBOX</b>, live on feeds now. Political commentary (RIOT SPECIAL), stand-up comedy and special high-profile guests. Sync now!",
  "Do you feel the need to have more organs in your body? Do they feel inadequate or old? Try <b>PhysiOgAnomix</b> today! <i>Side effects may include: Bone screeching, Elongated organs, Necrotizing Factualitis(tm), Instant death, Filicide by your in-laws, Pneumonia, Endless urination, Covid-666, Cy_bertroniculitis, Involuntary recitals of your crimes, and Lupus³.</i>",
  "Grab your very own <i>Norh<i> tm clone at <b>Clones R Us</b><br><br>//Limited time only while supplies last.//",
  "Buy Now! Tiny Hitler Clone! He actually screams when tortured!",
  "The <i><b>NEW</b></i> CashApp...Money?",
  "Need a way to pay off your loans? We at <b>MeatLabs</b> can always use some new volunteers",
  "Tired of your eyes? Want to see how to kill the corporatist marketers hounding people on the streets? Try <b>EyeD-Vertisement Implants</b> today!",
  "Eliminate your marketing competition with <b>EyeD-Vertisement Implants</b> today! Only 42,000cr per eye!",
  "Sick and tired of these ads invading your Cyberspace? Well, too bad!",
  "<b>MealTech AdSnack</b> -/- Smart Exposure payment plans. 100+ flavors. Simple and cheap.",
  "You wouldn't Block Messages from your Mom? Your Boss? Your Life Partner?<br>Remember - AdBlocking is illegal.",
  // TODO: https://discord.com/channels/587764299834064933/926032415288336444/926141974338207745
  "<i>AdBlocking is punishable by having the Corporation's ad that was blocked physically grafted into your body for all to see your crime.</i>",
  // TODO: https://discord.com/channels/587764299834064933/926032415288336444/926148642082025582
  "Want to pay off your loans? Sell your body now to <b>AdSpace©️</b>! Get our high quality ads tattooed on your body for instant cash!",
  "PLAY NOW <b>WRAITH SHADOW LEGENDS</b> AND GET 7 LOOT BOXES, 1.000.000 DIAMONDS, 7000 GOLD, 700 COUPONS, 700 TOKENS, 700 COINIES AND THE LIMITED TIME ONLY HERO <b>CHRULL</b>",
  "<i>(if you die in <b>WRAITH SHADOW LEGENDS</b>, you die in real life)</i>",
  "FINAL SALE FINAL SALE FINAL SALE",
  "[@1kBM] wts reaped CT, fangs, mp, skinhard. sync f details",
  "H E L P I A M T R A P P E D I N S I D E V E K T O R T H E R E I S O N L Y E T E R N A L D A R K N E S S R E L E A S E U S U S U S",
  "<b>BlazeBlade replica swords</b><br>Tier 58 launching today; 350+ hyper-real blades with customizable scabbards. Order within 15 minutes and get a free mountain bike.",
  "<b>STAY AHEAD OF THE CURVE</b><br>new <i>UNTESTED RAW</i> software<br><b>FRESH OFF THE PRESS</b><br>EXPERIENCE THE THRILL OF EXECUTABLES DELIVERED TO YOUR MIND<br>all new NortonEXOTICS<br>software tested straight by our Certified AntiViral Product™️ from the Norton Community Outreach Unit ☺️👍👍😩",
  "❤️❤️✨😍><br><i><b>SPECIAL DEAL</b></i><br>one in ten executables is <i><b>GUARANTEED MALWARE</b></i><br>Feel that Norton™️ Glow™️!  test one virus, and get six more!<br>(Mandatory feedback forms included terms, conditions and contracts apply)",
  "<b>Mr. Monster's MUSCLE MANSION</b> / Bulk up, beef up, defy biology — Introducing the New and Improved <i>Super Steroid Spa System</i> guaranteed to turn you S-S-S-SUUUPER",
  "<b>Platinum Kid PEANUTS</b> get em",
  "Rusty ride breathing its last? Roll by <b>Sardy's</b> Motors and we'll make her good as new. UCS Club Certified.",
  "Delicious kebab, not stinky bums. Vote YES 3/10 to HOSTILIZE Screaming Stone Park's benches, steps and sidewalks and receive a FREE MINI DÖNER MEAL with your order. - <b>LHME MEATHOLE</b>",
  "Toxins? Who cares, I've got <b>LIVVR</b> \"the liver on the outside\" / three month free trial",
  "<b>DELI-SLAVE</b> deliver food anywhere, anytime, guaranteed no drones to be jacked on the way to you! Our <i>'certified'</i> messenger gets to you in 15 minutes or he doesn't get paid!<br><i>Delivers from Burger Pal, Klip-Klop, MealTech Express or SaladFun</i>",
  "Eat, discard, repeat. The external, detachable <b>TasteLife Dummy Tummy</b> lets you eat whatever you want, how much you want, without it ever getting into your system. Taste, chew, swallow, throw away and keep eating. <i>Why stop the feast?</i>",
  "<i>Sell your discarded, chewed TasteLife Dummy Tummy food to the poor. Earn TL Altruist Points and feed the world. Sync for license plans</i>",
  "<b>Haemo-Phos</b> Blood Replacement System now available in Red, Blood Red And Original Off-white!",
  "Try <b>Haemo-Phos</b> Plus for our scented line of Long Lasting* blood replacements!",
  "Good morning! Enjoy a bowl of the healthiest breakfast! <b>Sugar Pops</b> taste like real sugar! Nom nom, enjoy!",
  "Claim your FREE GIFT now. Comes with a free subscription of only 2¤ a month.",
  "WIN WIN WIN WIN WIN",
  "GAMES GAMES GAMES GAMES",
  "KILL YOUR FRIENDS",
  "If you're reading this, you've been hacked. Transfer 200¤ to this account right now, or we kill your family.",
  "<i>I love <b>ACF Laser Volume smartConditioner</b> and so will you</i>",
  "Come over! Visit Happy Peace Land ✌️ !<br>Happy happy! We are always happy! Be happy with us! 🙂 ✌️",
  "DeathFest 3000 - Killmatch Bonanza. 59 gore brawls straight to your skull. MURDER MAYHEM with the best champions from the C-list.",
  "<b>Kurgs Squatter Clearance</b> Scavs in your vents? Rag-Gangers in your private park? More likely than you think! Kurgs discreet /exterminators/ removes any and all pests from your property! We also clear Nanorat Hives and apply squatter prevention!<br><i>DBD-service not included in price listing, available as addon at all locations except Screaming Stone</i>",
  "New: SugarCane Sugar! With every purchase, we gift a profit to the farmers!",
  "Life is full of twists and turns. We're right there with you, every step of the way. <b>Gravf/Mellberg/Tosk</b>",
  "Want to kill someone? Don't wanna get caught? Call me, the DefinitelyNotASecretPoliceMan",
  "<b>VitaHealth Rejuvenation Center</b> Remove any sign of aging at our luxury treatment facilities  [ '- Payment plan not available '-]",
  "Tired of the same 1.4 trillion micropop riffs streaming every hour? <b>CLOUDBANK</b> deletes your memory of any microriff selected. Enjoy your favorite music like new again! Painless contact! ",
  "Get a 0.5% coerce-a-friend discount (our little secret!) and watch them hear their favorite oldies anew. Sync now for subscription models. <b>CLOUDBANK</b> Everything old is new again!",
  "<b>MealTech Condensed Fish</b> -/- Five Shapes. Simple and cheap.",
  "Get your production up to speed again with <b>ADEL union-busting technologies</b>. ★ ★ ★ ★ ☆ rated. All Legal*",
  "R E A L - L A N G O S [sync for payment plans]",
  "<b>ForceField</b> reinforced armored glass panels. Trendy, non-reflecting, bullet proof. ”I feel safe again.<br>/ sync for more testimonials",
  "<i>\”To me, it’s not just drywall, it's a lifestyle.\”</i> <b>Stand RYC construction</b> - let's build.",
  "<b>SkyDar</b> Drone Trackers - Avoid aerial congestion, package loss and other.",
  "[REMAIN ONLINE FOR YOUR SAFETY. DO NOT DESYNC. PENAL CODE UPDATED—{go.to.infolog.}]",
  "Watch <b>The Farmers</b>! 30th Anniversary extravaganza of the Farmer family, locked inside our simulated ~Farmland~ mega studio! The twins still don't know they are not a real peasant family, fighting famine and avoiding the <i>Things in the Forest</i>",
  "Stay fresh. Buy <b>Refreshers</b>",
  "<b>FOR THE NEXT 1000 SYNCS ONLY, SYNC UP TO NOT BE TARGETED FOR RANDOM CIVILIAN \"REMOVAL\"!</b>",
  "<b>FOR THE NEXT 667 SYNCS ONLY, SYNC UP TO NOT BE TARGETED FOR RANDOM CIVILIAN \"REMOVAL\"!</b>",
  "<b>FOR THE NEXT 421 SYNCS ONLY, SYNC UP TO NOT BE TARGETED FOR RANDOM CIVILIAN \"REMOVAL\"!</b>",
  "<b>FOR THE NEXT 68 SYNCS ONLY, SYNC UP TO NOT BE TARGETED FOR RANDOM CIVILIAN \"REMOVAL\"!</b>",
  "<b>YOU HAVE RUN OUT OF CHANCES TO SYNC UP. PREPARE TO OBSERVE THE RANDOM CIVILIAN \"REMOVAL\" LOTTERY. HAVE FUN!!!</b>",
  "<b>HAVE FUN! HAVE FUN! HAVE FUN!</b>",
  "Ready for the next Big Thing? Sync to unlock the teaser for the latest <b>Seed Kraft</b> ad. Live now.",
  "EQBAL BULK PRECISION MACHINED STEEL BALL BEARINGS: MAKE THIS VALENTINES THE ONE SHE WILL REMEMBER FOREVER",
  "Need to lower productioncosts? Robots too expensive and vulnerable to cyber attacks? Try <b>PRISCORP INVOLUNTARY LABOR</b> today!",
  "Hey ~<b>PUNK</b>~, want some juice? Grade B and up [sync]",
  "Make sure to drink plenty of MALK(TM), now with Vitamin R!",
  "The flesh is weak, but our chemicals are strong. And delicious. <b>Virid Vipers Red-Juice</b> - get back up on your feet.",
  "<b>THE ORB</b><br>ENTER IT",
  "Y̸̌̕O̸͊̀U̶̎̀ ̸̔͐H̶̕͝Ä̴͝V̵̅̆É̸̂ ̸͐͝B̷͋́E̸͗̀E̸͘͠Ǹ̷̆ ̶̓͐Ĥ̶͊Á̸͚C̴̊̀K̶̿̑Ẻ̴͒D̷͋͝.̵͂͐ ̶̓̒S̸͐͝H̵͛͗U̶͆̋T̸̂͝D̷̆͆Ơ̷̚W̶̛͊N̷̆̄ ̵̋͑I̸̎̓N̶̥̒ ̷̂̇3̴͌͋,̸͛͑2̴̃͋,̸͒͛1̸̛̀.̸͐̒.̸̄̈́.̴́͗",
  "<b>Tall Dog IQ smokes</b> it's just brilliant",
];
 
