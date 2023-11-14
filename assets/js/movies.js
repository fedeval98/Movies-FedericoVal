//Captura de elementos del HTML
const selectGenres = document.getElementById("selectgenres")
const moviesContenedor = document.getElementById("divMovies")
<<<<<<< HEAD
function crearCard (movie){
    const article = document.createElement("article")
    const img = document.createElement("img")
    img.src = movie.image
    img.alt = movie.title
    const h3 = document.createElement("h3")
    h3.textContent = movie.title
    const h4 = document.createElement("h4")
    h4.textContent = movie.tagline
    const p = document.createElement("p")
    p.textContent = movie.overview
    const a = document.createElement("a")
    a.textContent = "Ver mas"
    
    a.addEventListener("click",() => {
        p.style.display ="block"
        a.style.display = "none"
    })

    article.classList.add("border-2", "border-dashed", "border-gray-400", "rounded-2xl", "p-4", "m-2", "flex", "flex-col", "md:w-1/3", "md:flex-wrap","lg:w-auto","lg:ml-auto", "lg:mr-auto")
    img.classList.add("mb-3")
    h3.classList.add("mb-1", "font-bold", "text-2xl")
    h4.classList.add("mb-3","italic")
    p.classList.add("mb-3","line-clamp-5","md:line-clamp-3","lg:line-clamp-2")
    a.classList.add ("text-blue-500", "cursor-pointer", "self-bottom")

    article.appendChild(img)
    article.appendChild(h3)
    article.appendChild(h4)
    article.appendChild(p)
    article.appendChild(a)

    return article
}


function introducirCard(movies, moviesContenedor) {
    for (const movie of movies) {
        const cardContenedor = crearCard(movie);
        moviesContenedor.appendChild(cardContenedor);
    }
}
=======
const verMas = "Ver más"
const detailsContainer = document.getElementById("movieDetails")
const searchInput = document.getElementById("searchInput")
const buttonClear = document.getElementById("clear")


//Importando las variables para ejecutar la funcion
import {movies} from './data.js'
import {
  introducirCard, 
  crearOptions, 
  crearElementosDelCard,
  filtrarPorTituloCaseInsensitive,
  limpiarContenedor,
  introducirPeliculasEnContenedor,
  destructureMovies,
  genresList,
  manejarCambioSelect,
}from '../js/module/functions.js'
//Ejecucion de la funcion para darle valores por argumento a las cards y que las cree
introducirCard(movies, moviesContenedor, crearElementosDelCard)

const listOfGenres = genresList(destructureMovies(movies))
crearOptions(listOfGenres, selectGenres)

selectGenres.addEventListener('change', () => {
  manejarCambioSelect(movies, selectGenres, searchInput, moviesContenedor)
})
searchInput.addEventListener('keyup', () => {
    const filtroTitulo = filtrarPorTituloCaseInsensitive(movies, searchInput.value)
    limpiarContenedor(moviesContenedor)
    introducirPeliculasEnContenedor(filtroTitulo, moviesContenedor)
  })

buttonClear.addEventListener('click',()=>{
  selectGenres.value = ""
  searchInput.value = ""
  limpiarContenedor(moviesContenedor)
  introducirCard(movies, moviesContenedor, crearElementosDelCard)
})
>>>>>>> workspace

