// Redirigir según la categoría seleccionada y mostrar el título en la página correspondiente
document.addEventListener("DOMContentLoaded", () => {
    const generateButton = document.getElementById("generateTier");

    if (generateButton) {
        generateButton.addEventListener("click", () => {
            const tierName = document.getElementById("tierName").value;
            const tierCategory = document.getElementById("tierCategory").value;

            if (!tierName || !tierCategory) {
                alert("⚠️ Por favor ingresa un nombre y selecciona una categoría.");
                return;
            }

            // Guardar el título en localStorage para usarlo en la página correspondiente
            localStorage.setItem("tierTitle", tierName);

            // Redirigir a la página correspondiente
            switch (tierCategory) {
                case "champions":
                    window.location.href = "./championtier.html";
                    break;
                case "relics":
                    window.location.href = "./relicstier.html";
                    break;
                case "adventures":
                    window.location.href = "./adventurestier.html";
                    break;
                default:
                    alert("⚠️ Categoría no válida.");
            }
        });
    } else {
        console.error("❌ Botón 'generateTier' no encontrado. Verifica el ID en el HTML.");
    }
});