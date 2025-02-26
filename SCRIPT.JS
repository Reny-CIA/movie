const movies = [
    { title: "Dune Part Two", image: "https://via.placeholder.com/300x400", link: "https://moviebox.com/dune2" },
    { title: "Oppenheimer", image: "https://via.placeholder.com/300x400", link: "https://moviebox.com/oppenheimer" },
    { title: "Avatar 2", image: "https://via.placeholder.com/300x400", link: "https://moviebox.com/avatar2" },
    { title: "John Wick 4", image: "https://via.placeholder.com/300x400", link: "https://moviebox.com/johnwick4" },
];

const moviesContainer = document.getElementById("movies");

movies.forEach(movie => {
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie-card");

    movieElement.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}">
        <h2 class="text-xl font-bold mt-3">${movie.title}</h2>
        <a href="${movie.link}" target="_blank" class="buy-btn">Buy Now</a>
    `;

    moviesContainer.appendChild(movieElement);
});
