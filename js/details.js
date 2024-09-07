document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const gameId = parseInt(urlParams.get('id'), 10);
    const gameDetailElement = document.getElementById('gameDetail');

    // Fetch games data and display the selected game's details
    fetch('data/games.json')
        .then(response => response.json())
        .then(data => {
            const game = data.find(g => g.id === gameId);

            if (game) {
                gameDetailElement.innerHTML = `
                    <h2>${game.name}</h2>
                    <img src="${game.image}" alt="${game.name}" />
                    <p>${game.description}</p>
                    <br>
                    <p>Tags: ${game.genre}</p>
                    <div class="link-container">
                        <a href="index.html">Back to list</a>
                        <a href="${game.source}">More info</a>
                    </div>
                `;
            } else {
                gameDetailElement.innerHTML = '<p>Game not found.</p>';
            }
        });
});
