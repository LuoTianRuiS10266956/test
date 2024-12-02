// Get the search input and gallery container
const searchInput = document.getElementById("search");
const characters = document.querySelectorAll(".character");

// Add an input event listener to the search bar
searchInput.addEventListener("input", function () {
    const filter = this.value.toLowerCase(); // Get the search query in lowercase

    // Loop through each character and check if it matches the query
    characters.forEach(character => {
        const name = character.querySelector("img").getAttribute("alt").toLowerCase(); // Get the 'alt' attribute text
        if (name.includes(filter)) {
            character.style.display = ""; // Show the character if it matches
        } else {
            character.style.display = "none"; // Hide the character if it doesn't match
        }
    });
});
