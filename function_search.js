

// function createMinisterCard(minister, searchTerm) {
//     const card = document.createElement("div");
//     card.setAttribute("class", "card");

//     const name = document.createElement("h2");
//     name.textContent = minister.ename;
//     card.appendChild(name);

//     const position = document.createElement("p");
//     position.textContent = minister.position;
//     card.appendChild(position);

//     const searchTermElem = document.createElement("p");
//     searchTermElem.textContent = "Search term: " + searchTerm;
//     card.appendChild(searchTermElem);

//     return card;
// }

// searchInput.addEventListener("input", function () {
//     const searchTerm = searchInput.value.trim().toLowerCase();
//     searchResults.innerHTML = '';


//     let hasResults = false;

//     for (let i = 0; i < minister_name.length; i++) {
//         const minister = minister_name[i];
//         const ministerName = minister.ename.trim().toLowerCase();

//         if (ministerName.includes(searchTerm)) {
//             const card_div = createMinisterCard(minister, searchTerm);
//             searchResults.appendChild(card_div);
//             hasResults = true;
//         }
//     }

//     if (!hasResults) {
//         const li = document.createElement("li");
//         li.textContent = "No results found.";
//         searchResults.appendChild(li);
//     }
// });6