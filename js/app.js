document.addEventListener('DOMContentLoaded', () => {
    const gameList = document.getElementById('gameList');
    const searchInput = document.getElementById('searchInput');

    function createGameElement(game) {
        const gameElement = document.createElement('a');
        gameElement.classList.add('game-item');
        gameElement.href = `details.html?id=${game.id}`;
        gameElement.innerHTML = `
        <img src="${game.image}" alt="${game.name}">
        <h2>${game.name}</h2>`;
        return gameElement;
    }

    function displayGames(filteredGames) {
        gameList.innerHTML = ''; // Clear previous content
        filteredGames.forEach(game => {
            const gameElement = createGameElement(game);
            gameList.appendChild(gameElement);
        });
    }

    // Fetch games data and display
    fetch('data/games.json')
        .then(response => response.json())
        .then(data => {
            // Sort the games alphabetically by name
            data.sort((a, b) => a.name.localeCompare(b.name));

            window.games = data; // Store games data globally
            displayGames(data);

            // Search
            searchInput.addEventListener('input', () => {
                const query = searchInput.value.toLowerCase();
                const filteredGames = games.filter(game =>
                    game.name.toLowerCase().startsWith(query)
                );

                // Sort
                filteredGames.sort((a, b) => a.name.localeCompare(b.name));
                displayGames(filteredGames);
            });

        });
});
