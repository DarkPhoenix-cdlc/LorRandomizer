// script.js
import { champions } from './champions.js'; 
import { relics } from './relics.js';
import { adventures } from './adventures.js';
function filterAdventures() {
    const filterValue = document.querySelector('input[name="adventureFilter"]:checked').value;

    let filteredAdventures;
    if (filterValue === "all") {
        filteredAdventures = adventures.filter(adventure => adventure.type !== "Event"); // Excluir aventuras de tipo "Event"
    } else {
        filteredAdventures = adventures.filter(adventure => adventure.type === filterValue && adventure.type !== "Event");
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

        // Filtrar aventuras según el filtro seleccionado, excluyendo "Event"
        const adventureFilterValue = document.querySelector('input[name="adventureFilter"]:checked').value;

        let filteredAdventures;
        if (adventureFilterValue === "all") {
            filteredAdventures = adventures.filter(adventure => adventure.type !== "Event");
        } else {
            filteredAdventures = adventures.filter(adventure => adventure.type === adventureFilterValue && adventure.type !== "Event");
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
    const button = document.getElementById("toggleThemeButton");

    // Alternar entre temas
    body.classList.toggle("dark-theme");

    // Guardar tema en Local Storage
    const currentTheme = body.classList.contains("dark-theme") ? "dark" : "light";
    localStorage.setItem("theme", currentTheme);

    // Cambiar color del botón
    const newButtonColor = body.classList.contains("dark-theme") ? "#ffcc00" : "#007bff";
    button.style.backgroundColor = newButtonColor;
    localStorage.setItem("buttonColor", newButtonColor);

    // Cambiar texto del botón
    button.textContent = currentTheme === "dark" ? "Switch to Light Theme" : "Switch to Dark Theme";
}

function loadTheme() {
    const savedTheme = localStorage.getItem("theme");
    const savedButtonColor = localStorage.getItem("buttonColor");

    const body = document.body;
    const button = document.getElementById("toggleThemeButton");
    const tierRows = document.querySelectorAll(".tier-row");
    const championCardsContainer = document.getElementById("championCardsContainer");
    const championCards = document.querySelectorAll(".card");

    if (savedTheme === "dark") {
        body.classList.add("dark-theme");
        button.textContent = "Switch to Light Theme";

        tierRows.forEach(row => row.classList.add("dark-theme-card"));
        championCardsContainer.classList.add("dark-theme-card");
        championCards.forEach(card => card.classList.add("dark-theme-card"));
    } else {
        button.textContent = "Switch to Dark Theme";

        tierRows.forEach(row => row.classList.remove("dark-theme-card"));
        championCardsContainer.classList.remove("dark-theme-card");
        championCards.forEach(card => card.classList.remove("dark-theme-card"));
    }

    if (savedButtonColor) {
        button.style.backgroundColor = savedButtonColor;
    }
}





// Ejecutar la función al cargar la página
window.onload = loadTheme;


window.toggleFilters = toggleFilters;
window.selectRandom = selectRandom;
window.filterChampions = filterChampions;
window.filterAdventures = filterAdventures;
window.rerollChampion = rerollChampion;
window.rerollAdventure = rerollAdventure;
window.toggleTheme = toggleTheme;


