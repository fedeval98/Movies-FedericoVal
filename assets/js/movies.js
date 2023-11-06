const moviesContenedor = document.getElementById("divMovies")

function crearCard (movie){
    return`
    <article id="scrollsnapid" class="border-2 border-dashed border-gray-400 rounded-2xl p-4 m-2 flex flex-col">
        <img class="mb-3" src="${movie.image}" alt="${movie.title}"></img>
        <h3 class="mb-1 font-bold text-2xl ">${movie.title}</h3>
        <h4 class="mb-3" >${movie.tagline}</h4>
        <p class="mb-3">${movie.overview}</p>
    </article>`
}

function introducirCard (movies, moviesContenedor){
    let card =""
    for (movie of movies){
        let cardContenedor = crearCard(movie)
        card += cardContenedor 
    }
    moviesContenedor.innerHTML += card
}

introducirCard(movies, moviesContenedor)
// const scrollSnap = document.getElementbyID("scrollsnapid")
// scrollSnap.addEventListener("scroll", () => {}) // preguntar sobre como agregar un scroll snap