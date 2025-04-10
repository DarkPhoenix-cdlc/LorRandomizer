// script.js
const champions = [
 { name: "Aatrox", image: "Images/champions/Aatrox.jpeg", hasSixStars: true },
 { name: "Ahri", image: "Images/champions/Ahri.jpeg", hasSixStars: true },
 { name: "Annie", image: "Images/champions/Annie.jpeg", hasSixStars: false },
 { name: "Ashe", image: "Images/champions/Ashe.jpeg", hasSixStars: true },
 { name: "Bard", image: "Images/champions/Bard.jpeg", hasSixStars: false },
 { name: "Caitlyn", image: "Images/champions/Caitlyn.jpeg", hasSixStars: true },
 { name: "Darius", image: "Images/champions/Darius.jpeg", hasSixStars: true },
 { name: "Diana", image: "Images/champions/Diana.jpeg", hasSixStars: false },
 { name: "Ekko", image: "Images/champions/Ekko.jpeg", hasSixStars: true },
 { name: "Elder Dragon", image: "Images/champions/Elder.jpeg", hasSixStars: true },
 { name: "Elise", image: "Images/champions/Elise.jpeg", hasSixStars: false },
 { name: "Evelynn", image: "Images/champions/Evelynn.jpeg", hasSixStars: true },
 { name: "Fiddlesticks", image: "Images/champions/Fiddlesticks.jpeg", hasSixStars: true },
 { name: "Garen", image: "Images/champions/Garen.jpeg", hasSixStars: false },
 { name: "Gnar", image: "Images/champions/Gnar.jpeg", hasSixStars: false },
 { name: "Gwen", image: "Images/champions/Gwen.jpeg", hasSixStars: true },
 { name: "Heimerdinger", image: "Images/champions/Heimerdinger.jpeg", hasSixStars: true },
 { name: "Illaoi", image: "Images/champions/Illaoi.jpeg", hasSixStars: false },
 { name: "Jack", image: "Images/champions/Jack.jpeg", hasSixStars: false },
 { name: "Janna", image: "Images/champions/Janna.jpeg", hasSixStars: false },
 { name: "Jax", image: "Images/champions/Jax.jpeg", hasSixStars: false },
 { name: "Jayce", image: "Images/champions/Jayce.jpeg", hasSixStars: true },
 { name: "Jhin", image: "Images/champions/Jhin.jpeg", hasSixStars: false },
 { name: "Jinx", image: "Images/champions/Jinx.jpeg", hasSixStars: true },
 { name: "Kai'Sa", image: "Images/champions/KaiSa.jpeg", hasSixStars: true },
 { name: "Kayle", image: "Images/champions/Kayle.jpeg", hasSixStars: true },
 { name: "Kayn", image: "Images/champions/Kayn.jpeg", hasSixStars: false },
 { name: "Kindred", image: "Images/champions/Kindred.jpeg", hasSixStars: false },
 { name: "LeBlanc", image: "Images/champions/LeBlanc.jpeg", hasSixStars: false },
 { name: "Lee Sin", image: "Images/champions/LeeSin.jpeg", hasSixStars: false },
 { name: "Leona", image: "Images/champions/Leona.jpeg", hasSixStars: true },
 { name: "Lillia", image: "Images/champions/Lillia.jpeg", hasSixStars: true },
 { name: "Lux", image: "Images/champions/Lux.jpeg", hasSixStars: true },
 { name: "Lux: Illuminated", image: "Images/champions/LuxI.jpeg", hasSixStars: true },
 { name: "Master Yi", image: "Images/champions/MasterYi.jpeg", hasSixStars: false },
 { name: "Miss Fortune", image: "Images/champions/MissFortune.jpeg", hasSixStars: true },
 { name: "Mordekaiser", image: "Images/champions/Mordekaiser.jpeg", hasSixStars: false },
 { name: "Morgana", image: "Images/champions/Morgana.jpeg", hasSixStars: true },
 { name: "Nami", image: "Images/champions/Nami.jpeg", hasSixStars: false },
 { name: "Nasus", image: "Images/champions/Nasus.jpeg", hasSixStars: true },
 { name: "Nautilus", image: "Images/champions/Nautilus.jpeg", hasSixStars: true },
 { name: "Neeko", image: "Images/champions/Neeko.jpeg", hasSixStars: true },
 { name: "Nidalee", image: "Images/champions/Nidalee.jpeg", hasSixStars: false },
 { name: "Nilah", image: "Images/champions/Nilah.jpeg", hasSixStars: false },
 { name: "Norra", image: "Images/champions/Norra.jpeg", hasSixStars: true },
 { name: "Ornn", image: "Images/champions/Ornn.jpeg", hasSixStars: false },
 { name: "Pyke", image: "Images/champions/Pyke.jpeg", hasSixStars: true },
 { name: "Samira", image: "Images/champions/Samira.jpeg", hasSixStars: true },
 { name: "Sett", image: "Images/champions/Sett.jpeg", hasSixStars: false },
 { name: "Swain", image: "Images/champions/Swain.jpeg", hasSixStars: true },
 { name: "Tahm Kench", image: "Images/champions/TahmKench.jpeg", hasSixStars: false },
 { name: "Taliyah", image: "Images/champions/Taliyah.jpeg", hasSixStars: true },
 { name: "Teemo", image: "Images/champions/Teemo.jpeg", hasSixStars: false },
 { name: "The Poro King", image: "Images/champions/ThePoroKing.jpeg", hasSixStars: false },
 { name: "Thresh", image: "Images/champions/Thresh.jpeg", hasSixStars: false },
 { name: "Tryndamere", image: "Images/champions/Tryndamere.jpeg", hasSixStars: true },
 { name: "Varus", image: "Images/champions/Varus.jpeg", hasSixStars: false },
 { name: "Vayne", image: "Images/champions/Vayne.jpeg", hasSixStars: true },
 { name: "Veigar", image: "Images/champions/Veigar.jpeg", hasSixStars: false },
 { name: "Vex", image: "Images/champions/Vex.jpeg", hasSixStars: true },
 { name: "Vi", image: "Images/champions/Vi.jpeg", hasSixStars: true },
 { name: "Viego", image: "Images/champions/Viego.jpeg", hasSixStars: true },
 { name: "Volibear", image: "Images/champions/Volibear.jpeg", hasSixStars: true },
 { name: "Yasuo", image: "Images/champions/Yasuo.jpeg", hasSixStars: true },
 { name: "Yummi", image: "Images/champions/Yummi.jpeg", hasSixStars: true },
 { name: "Viktor", image: "Images/champions/Viktor.jpeg", hasSixStars: true },
 { name: "Warwick", image: "Images/champions/Warwick.jpeg", hasSixStars: true },
 { name: "Aurelion Sol", image: "Images/champions/AurelionSol.jpeg", hasSixStars: false }
];
const relics = [
    { name: "Protectors of Demacia", image: "Images/relics/protectors.webp", rarity: "epic" },
    { name: "Shield of Daybreak", image: "Images/relics/shield_L.webp", rarity: "epic" },
    { name: "Armordillo Shell", image: "Images/relics/armodillo.webp", rarity: "common" },
    { name: "Banshee's Veil", image: "Images/relics/banshee.webp", rarity: "common" },
    { name: "Dreams Of Yordles", image: "Images/relics/dream.webp", rarity: "common" },
    { name: "Everfrost", image: "Images/relics/Everfrost.webp", rarity: "common" },
    { name: "Guinsoo's Rageblade", image: "Images/relics/Guinsoo's.webp", rarity: "common" },
    { name: "Lost Chapter", image: "Images/relics/Lost_Chapter.webp", rarity: "common" },
    { name: "Ravenous Hydra", image: "Images/relics/Ravenous_Hydra.webp", rarity: "common" },
    { name: "Soul Spear", image: "Images/relics/Soul_Spear.webp", rarity: "common" },
    { name: "Stormrazor", image: "Images/relics/Stormrazor.webp", rarity: "common" },
    { name: "The Chameleon's Necklace", image: "Images/relics/The_Chameleon's Necklace.webp", rarity: "common" },
    { name: "The Grand Duelist's Blade", image: "Images/relics/The_Grand_Duelist's_Blade.webp", rarity: "common" },
    { name: "The Starchild's Staff", image: "Images/relics/The_Starchild's_Staff.webp", rarity: "common" },
    { name: "The Troll King's Crusher", image: "Images/relics/The_Troll_King's_Crusher.webp", rarity: "common" },
    { name: "True Ice Flail", image: "Images/relics/True_Ice_Flail.webp", rarity: "common" },
    { name: "Warmog's Armor", image: "Images/relics/Warmogs_Armor.webp", rarity: "common" },
    { name: "Z-Drive Prototype", image: "Images/relics/Z-Drive.webp", rarity: "common" },
    { name: "Arcane Comet", image: "Images/relics/Arcane_Comet.webp", rarity: "rare" },
    { name: "Archangel's Staff", image: "Images/relics/Archangel's_Staff.webp", rarity: "rare" },
    { name: "Caulfield's Warhammer", image: "Images/relics/Caulfield's_Warhammer.webp", rarity: "rare" },
    { name: "Chemtech Duplicator", image: "Images/relics/Chemtech_Duplicator.webp", rarity: "rare" },
    { name: "Condenser", image: "Images/relics/Condenser.webp", rarity: "rare" },
    { name: "Corrupted Star Fragment", image: "Images/relics/Corrupted_Star_Fragment.webp", rarity: "rare" },
    { name: "Crownguard Inheritance", image: "Images/relics/Crownguard_Inheritance.webp", rarity: "rare" },
    { name: "Dreadway Chase Gun", image: "Images/relics/Dreadway_Chase_Gun.webp", rarity: "rare" },
    { name: "Galeforce", image: "Images/relics/Galeforce.webp", rarity: "rare" },
    { name: "Golden Spatula", image: "Images/relics/Golden_Spatula.webp", rarity: "rare" },
    { name: "Greenglade Shadeleaf", image: "Images/relics/Greenglade_Shadeleaf.webp", rarity: "rare" },
    { name: "Guardian Angel", image: "Images/relics/Guardian_Angel.webp", rarity: "rare" },
    { name: "Guardian's Orb", image: "Images/relics/Guardian's_Orb.webp", rarity: "rare" },
    { name: "Guardian's Trinket", image: "Images/relics/Guardian's_Trinket.webp", rarity: "rare" },
    { name: "Heart of Gold", image: "Images/relics/Heart_of_Gold.webp", rarity: "rare" },
    { name: "Hymn of Valor", image: "Images/relics/Hymn_of_Valor.webp", rarity: "rare" },
    { name: "Jaurim's Fist", image: "Images/relics/Jaurim's_Fist.webp", rarity: "rare" },
    { name: "Laurent Bladerack", image: "Images/relics/Laurent_Bladerack.webp", rarity: "rare" },
    { name: "Luden's Tempest", image: "Images/relics/Luden's_Tempest.webp", rarity: "rare" },
    { name: "Luminous Orb", image: "Images/relics/Luminous_Orb.webp", rarity: "rare" },
    { name: "Riptide Battery", image: "Images/relics/Riptide_Battery.webp", rarity: "rare" },
    { name: "Stalker's Blade", image: "Images/relics/Stalker's_Blade.webp", rarity: "rare" },
    { name: "Star Gem", image: "Images/relics/Star_Gem.webp", rarity: "rare" },
    { name: "Succubus's Brand", image: "Images/relics/Succubus's_Brand.webp", rarity: "rare" },
    { name: "Tempest Blade", image: "Images/relics/Tempest_Blade.webp", rarity: "rare" },
    { name: "The Berserker's Buckle", image: "Images/relics/The_Berserker's_Bukle.webp", rarity: "rare" },
    { name: "The Bounty Hunter's Renown", image: "Images/relics/The_Bounty_Hunter's_Renown.webp", rarity: "rare" },
    { name: "The Card Master's Gambit", image: "Images/relics/The_Card_Master's_Gambit.webp", rarity: "rare" },
    { name: "The Collector", image: "Images/relics/The_Collector.webp", rarity: "rare" },
    { name: "The Curator's Gatebreaker", image: "Images/relics/The_Curator's_Gatebreaker.webp", rarity: "rare" },
    { name: "The Deceiver's Crest", image: "Images/relics/The_Deceiver's_Crest.webp", rarity: "rare" },
    { name: "The Grand General's Counterplan", image: "Images/relics/The_Grand_General's_Counterplan.webp", rarity: "rare" },
    { name: "The Gravedigger's Spade", image: "Images/relics/The_Gravedigger's_Spade.webp", rarity: "rare" },
    { name: "The Loose Cannon's Payload", image: "Images/relics/The_Loose_Cannon's_Payload.webp", rarity: "rare" },
    { name: "The Scourge's Stash", image: "Images/relics/The_Scourge's_Stash.webp", rarity: "rare" },
    { name: "Troll King's Crown", image: "Images/relics/Troll_King's_Crown.webp", rarity: "rare" },
    { name: "Transmogulator", image: "Images/relics/Transmogulator.webp", rarity: "rare" },
    { name: "Turret Plating", image: "Images/relics/Turret_Plating.webp", rarity: "rare" },
    { name: "Utmost Despair", image: "Images/relics/Utmost_Despair.webp", rarity: "rare" },
    { name: "Voidborne Carapace", image: "Images/relics/Voidborne_Carapace.webp", rarity: "rare" },
    { name: "Wicked Harvest", image: "Images/relics/Wicked_Harvest.webp", rarity: "rare" },
    { name: "Wriggle's Lantern", image: "Images/relics/Wriggle's_Lantern.webp", rarity: "rare" },
    { name: "Big Guns", image: "Images/relics/Big_Guns.webp", rarity: "epic" },
    { name: "Black Shield", image: "Images/relics/Black_Shield.webp", rarity: "epic" },
    { name: "Cease and Desist", image: "Images/relics/Cease_and_Desist.webp", rarity: "epic" },
    { name: "Chosen by the Stars", image: "Images/relics/Chosen_By_The_Stars.webp", rarity: "epic" },
    { name: "Deadly Harpoon", image: "Images/relics/Deadly_Harpoon.webp", rarity: "epic" },
    { name: "Death's Foil", image: "Images/relics/Death's_Foil.webp", rarity: "epic" },
    { name: "Defense Spending", image: "Images/relics/Defense_Spending.webp", rarity: "epic" },
    { name: "Disciple of Shadows", image: "Images/relics/Disciple_of_Shadows.webp", rarity: "epic" },
    { name: "Echoing Spirit", image: "Images/relics/Echoing_Spirit.webp", rarity: "epic" },
    { name: "Essence Theft", image: "Images/relics/Essence_Theft.webp", rarity: "epic" },
    { name: "Fear-Cleaving Axe", image: "Images/relics/Fear-Cleaving_Axe.webp", rarity: "epic" },
    { name: "Found Fortune", image: "Images/relics/Found_Fortune.webp", rarity: "epic" },
    { name: "Frozen Tomb", image: "Images/relics/Frozen_Tomb.webp", rarity: "epic" },
    { name: "Full Build", image: "Images/relics/Full_Build.webp", rarity: "epic" },
    { name: "Hextech Rifle", image: "Images/relics/Hextech_Rifle.webp", rarity: "epic" },
    { name: "Hidden Tome", image: "Images/relics/Hidden_Tome.webp", rarity: "epic" },
    { name: "Icon of Valhir", image: "Images/relics/Icon_of_Valhir.webp", rarity: "epic" },
    { name: "Jayce's Hextech Battery", image: "Images/relics/Jayce's_Hextech_Battery.webp", rarity: "epic" },
    { name: "Living Weapon", image: "Images/relics/Living_Weapon.webp", rarity: "epic" },
    { name: "Loaded Dice", image: "Images/relics/Loaded_Dice.webp", rarity: "epic" },
    { name: "Lux's Incandescent Baton", image: "Images/relics/Lux's_Incandescent_Baton.webp", rarity: "epic" },
    { name: "Norra's Portal Accelerator", image: "Images/relics/Norra's_Portal_Accelerator.webp", rarity: "epic" },
    { name: "Oath of the Guardians", image: "Images/relics/Oath_Of_The_Guardians.webp", rarity: "epic" },
    { name: "Packed Powder", image: "Images/relics/Packed_Powder.webp", rarity: "epic" },
    { name: "Portal Pals", image: "Images/relics/Portal_Pals.webp", rarity: "epic" },
    { name: "Secret Technique", image: "Images/relics/Secret_Technique.webp", rarity: "epic" },
    { name: "Shock & Awe", image: "Images/relics/Shock&Awe.webp", rarity: "epic" },
    { name: "Spectral Scissors", image: "Images/relics/Spectral_Scissors.webp", rarity: "epic" },
    { name: "Spellweaver's Symphony", image: "Images/relics/Spellweaver's_Symphony.webp", rarity: "epic" },
    { name: "Spirit of the Buhru", image: "Images/relics/Spirit_Of_The_Buhru.webp", rarity: "epic" },
    { name: "Strength of Stone", image: "Images/relics/Strength_of_Stone.webp", rarity: "epic" },
    { name: "Stacked Deck", image: "Images/relics/Stacked_Deck.webp", rarity: "epic" },
    { name: "Starforged Gauntlets", image: "Images/relics/Starforged_Gauntlets.webp", rarity: "epic" },
    { name: "Swain's Raven Army", image: "Images/relics/Swain's_Raven_Army.webp", rarity: "epic" },
    { name: "The Beast Within", image: "Images/relics/The_Beast_Within.webp", rarity: "epic" },
    { name: "Yasuo's Windblade", image: "Images/relics/Yasuo's_Windblade.webp", rarity: "epic" }
];
const adventures = [
    { name: "The Swift Scout", image: "Images/champions/Teemo.jpeg", stars: 0, type: "normal" },
    { name: "The Bounty Hunter", image: "Images/champions/MissFortune.jpeg", stars: 0.5, type: "normal" },
    { name: "The Might of Demacia", image: "Images/champions/Lux.jpeg", stars: 1, type: "normal" },
    { name: "The Fae Sorceress", image: "Images/champions/Lulu.jpeg", stars: 1, type: "normal" },
    { name: "The Wrath of Zaun", image: "Images/champions/Warwick.jpeg", stars: 1, type: "normal" },
    { name: "The Saltwater Scourge", image: "Images/champions/Gankplank.jpeg", stars: 1.5, type: "normal" },
    { name: "The Prodigal Explorer", image: "Images/champions/Ezreal.jpeg", stars: 1.5, type: "normal" },
    { name: "The Master of Shadows", image: "Images/champions/Zed.jpeg", stars: 2, type: "normal" },
    { name: "The Titan of the Depths", image: "Images/champions/Nautilus.jpeg", stars: 2, type: "normal" },
    { name: "The Hand of Noxus", image: "Images/champions/Darius.jpeg", stars: 2, type: "normal" },
    { name: "The Machine Herald", image: "Images/champions/Viktor.jpeg", stars: 2.5, type: "normal" },
    { name: "The Glorious Executioner", image: "Images/champions/Draven.jpeg", stars: 2.5, type: "normal" },
    { name: "Daughter of the Void", image: "Images/champions/KaiSa.jpeg", stars: 3, type: "normal" },
    { name: "The Collector of Souls", image: "Images/champions/Thresh.jpeg", stars: 3, type: "normal" },
    { name: "The Dragonsire", image: "Images/champions/Elder.jpeg", stars: 3, type: "normal" },
    { name: "The Colossus", image: "Images/champions/Galio.jpeg", stars: 3.5, type: "normal" },
    { name: "The Ancient Fear", image: "Images/champions/Fiddlesticks.jpeg", stars: 3.5, type: "normal" },
    { name: "The Star Forger", image: "Images/champions/AurelionSol.jpeg", stars: 4, type: "normal" },
    { name: "The Unforgiven", image: "Images/champions/Yasuo.jpeg", stars: 4.5, type: "normal" },
    { name: "The Frost Witch", image: "Images/champions/Lissandra.jpeg", stars: 5, type: "normal" },
    { name: "The Noxian Grand General", image: "Images/champions/Swain.jpeg", stars: 5, type: "normal" },
    { name: "Starlight Portal", image: "Images/champions/Weekly.jpeg", stars: 1, type: "normal" },
    { name: "Shadow Portal", image: "Images/champions/Weekly.jpeg", stars: 2, type: "normal" },
    { name: "Dark Star Portal", image: "Images/champions/Weekly.jpeg", stars: 3, type: "normal" },
    { name: "The Tidal Trickster", image: "Images/champions/Fizz.jpeg", stars: 4.5, type: "Nightmare" },
    { name: "The Ruined King", image: "Images/champions/Viego.jpeg", stars: 5, type: "Nightmare" },
    { name: "The Ancient Fear", image: "Images/champions/Fiddlesticks.jpeg", stars: 6.5, type: "Nightmare" },
    { name: "Fear Portal", image: "Images/champions/Weekly.jpeg", stars: 4.5, type: "Nightmare" },
    { name: "Terror Portal", image: "Images/champions/Weekly.jpeg.jpeg", stars: 5.5, type: "Nightmare" },
    { name: "Nightmare Portal", image: "Images/champions/Weekly.jpeg", stars: 6.5, type: "Nightmare" },
    { name: "The Boss", image: "Images/champions/Sett.jpeg", stars: 2, type: "Event" },
    { name: "The Iron Revenant", image: "Images/champions/Mordekaiser.jpeg", stars: 3, type: "Event" },
    { name: "The Titan of the Depths", image: "Images/champions/Nautilus.jpeg", stars: 4, type: "Event" },
    { name: "The Relentless Storm", image: "Images/champions/Volibear.jpeg", stars: 5, type: "Event" },
    { name: "The Dragonsire", image: "Images/champions/Elder.jpeg", stars: 6, type: "Event" }
];
function filterAdventures() {
    const filterValue = document.querySelector('input[name="adventureFilter"]:checked').value;

    let filteredAdventures;
    if (filterValue === "all") {
        filteredAdventures = adventures; // Mostrar todas las aventuras
    } else {
        filteredAdventures = adventures.filter(adventure => adventure.type === filterValue);
    }

    // Seleccionar una aventura aleatoria del filtro
    const randomAdventure = getRandomItem(filteredAdventures);
    document.getElementById("adventureResult").innerText = `Adventure: ${randomAdventure.name}`;
    const adventureImage = document.getElementById("adventureImage");
    adventureImage.src = randomAdventure.image;
    adventureImage.style.display = "block";
    document.getElementById("adventureStars").innerText = `Stars: ${randomAdventure.stars}`;
}

function rerollAdventure() {
    const randomAdventure = getRandomItem(adventures);
    document.getElementById("adventureResult").innerText = `Adventure: ${randomAdventure.name}`;
    document.getElementById("adventureImage").src = randomAdventure.image;
    document.getElementById("adventureImage").style.display = "block";
    document.getElementById("adventureStars").innerText = `Stars: ${randomAdventure.stars}`;
}

        function getRandomItem(array) {
            return array[Math.floor(Math.random() * array.length)];
        }

        function rerollChampion() {
    const randomChampion = getRandomItem(champions);
    document.getElementById("result").innerText = `Champion: ${randomChampion.name}`;
    const championImage = document.getElementById("championImage");
    championImage.src = randomChampion.image;
}

function rerollRelic(index) {
    const allowCommon = document.getElementById("commonRelics").checked;
    const allowRare = document.getElementById("rareRelics").checked;
    const allowEpic = document.getElementById("epicRelics").checked;

    let filteredRelics = relics.filter(relic => {
        if (relic.rarity === "common" && allowCommon) return true;
        if (relic.rarity === "rare" && allowRare) return true;
        if (relic.rarity === "epic" && allowEpic) return true;
        return false;
    });

    const newRelic = getRandomItem(filteredRelics);
    const relicContainer = document.getElementById(`relic-${index}`);
    relicContainer.querySelector("img").src = newRelic.image; // Actualiza la imagen de la reliquia
    relicContainer.querySelector("img").alt = newRelic.name; // Actualiza el atributo alt
    relicContainer.querySelector("p").textContent = newRelic.name; // Actualiza el nombre de la reliquia
}
// Variable global para almacenar los campeones filtrados
let filteredChampions = champions; // Por defecto, todos los campeones

function filterChampions() {
    const filterValue = document.querySelector('input[name="championFilter"]:checked').value;

    if (filterValue === "all") {
        filteredChampions = champions; // Mostrar todos los campeones
    } else if (filterValue === "3stars") {
        filteredChampions = champions.filter(champion => !champion.hasSixStars); // Solo campeones sin 6 estrellas
    } else if (filterValue === "6stars") {
        filteredChampions = champions.filter(champion => champion.hasSixStars); // Solo campeones con 6 estrellas
    }

    // Actualizar la interfaz para reflejar el filtro aplicado
    const randomChampion = getRandomItem(filteredChampions);
    document.getElementById("result").innerText = `Champion: ${randomChampion.name}`;
    const championImage = document.getElementById("championImage");
    championImage.src = randomChampion.image;
    championImage.style.display = "block";
}

function selectRandom() {
    // Seleccionar un campeón aleatorio de la lista filtrada
    const randomChampion = getRandomItem(filteredChampions);
    document.getElementById("result").innerText = `Champion: ${randomChampion.name}`;
    const championImage = document.getElementById("championImage");
    championImage.src = randomChampion.image;
    championImage.style.display = "block";

    // Mostrar el botón de reroll para el campeón
    document.getElementById("rerollChampion").style.display = "inline-block";

    // Filtrar reliquias según los checkboxes seleccionados
    const allowCommon = document.getElementById("commonRelics").checked;
    const allowRare = document.getElementById("rareRelics").checked;
    const allowEpic = document.getElementById("epicRelics").checked;
    const allowDuplicates = document.getElementById("allowDuplicates").checked;

    let filteredRelics = relics.filter(relic => {
        if (relic.rarity === "common" && allowCommon) return true;
        if (relic.rarity === "rare" && allowRare) return true;
        if (relic.rarity === "epic" && allowEpic) return true;
        return false;
    });

    // Si no se permiten duplicados, elimina duplicados al seleccionar
    let selectedRelics;
    if (allowDuplicates) {
        selectedRelics = filteredRelics.sort(() => 0.5 - Math.random()).slice(0, 3);
    } else {
        selectedRelics = [...new Set(filteredRelics)].sort(() => 0.5 - Math.random()).slice(0, 3);
    }

    // Mostrar las reliquias seleccionadas
    const relicImagesDiv = document.getElementById("relicImages");
    relicImagesDiv.innerHTML = ""; // Limpiar las reliquias anteriores

    selectedRelics.forEach((relic, index) => {
        const relicContainer = document.createElement("div");
        relicContainer.className = "relic-container";
        relicContainer.id = `relic-${index}`;

        const relicImage = document.createElement("img");
        relicImage.src = relic.image;
        relicImage.alt = relic.name;

        const relicName = document.createElement("p");
        relicName.textContent = relic.name;

        const rerollButton = document.createElement("button");
        rerollButton.textContent = "Reroll";
        rerollButton.onclick = () => rerollRelic(index);

        relicContainer.appendChild(relicImage);
        relicContainer.appendChild(relicName);
        relicContainer.appendChild(rerollButton);
        relicImagesDiv.appendChild(relicContainer);
    });

    // Filtrar aventuras según el filtro seleccionado
    const adventureFilterValue = document.querySelector('input[name="adventureFilter"]:checked').value;

    let filteredAdventures;
    if (adventureFilterValue === "all") {
        filteredAdventures = adventures;
    } else {
        filteredAdventures = adventures.filter(adventure => adventure.type === adventureFilterValue);
    }
    // Seleccionar una aventura aleatoria
    const randomAdventure = getRandomItem(filteredAdventures);
    document.getElementById("adventureResult").innerText = `Adventure: ${randomAdventure.name}`;
    const adventureImage = document.getElementById("adventureImage");
    adventureImage.src = randomAdventure.image;
    adventureImage.style.display = "block";
    document.getElementById("adventureStars").innerText = `Stars: ${randomAdventure.stars}`;

    // Mostrar el botón de reroll para la aventura
    document.getElementById("rerollAdventure").style.display = "inline-block";
}
function toggleFilters() {
    const filtersContainer = document.getElementById("filtersContainer");
    const toggleButton = document.getElementById("toggleFiltersButton");

    if (filtersContainer.classList.contains("hidden")) {
        filtersContainer.classList.remove("hidden"); // Mostrar filtros
        toggleButton.textContent = "Hide Filters";
    } else {
        filtersContainer.classList.add("hidden"); // Ocultar filtros
        toggleButton.textContent = "Show Filters";
    }
}
function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-theme");

    // Cambiar el texto del botón según el tema
    const button = document.getElementById("toggleThemeButton");
    if (body.classList.contains("dark-theme")) {
        button.textContent = "Switch to Light Theme";
    } else {
        button.textContent = "Switch to Dark Theme";
    }
}