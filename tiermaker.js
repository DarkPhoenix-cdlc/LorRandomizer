document.addEventListener("DOMContentLoaded", () => {
    const generateButton = document.getElementById("generateTier");

    if (generateButton) {
        generateButton.addEventListener("click", () => {
            const tierName = document.getElementById("tierName").value;
            const tierCategory = document.getElementById("tierCategory").value;

            if (!tierName || !tierCategory) {
                alert("⚠️ Please fill in all fields.");
                return;
            }

            localStorage.setItem("tierTitle", tierName);

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
                    alert("⚠️ Invalid category selected.");
            }
        });
    } else {
        console.error("❌ Generate button not found.");
    }
});