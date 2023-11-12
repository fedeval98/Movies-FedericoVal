//Importar Movies de data
import {movies} from '../data.js'
//Creacion de elementos
// img, h3, h4, p y a

function crearImg (movie){
  const img = document.createElement("img")
  img.src = movie.image
  img.alt = movie.title
  return img
}

function crearH3 (movie){
  const h3 = document.createElement("h3")
  h3.textContent = movie.title
  return h3
}

function crearH4(movie){
  const h4 = document.createElement("h4")
  h4.textContent = movie.tagline
  return h4
}

function crearP(movie){
  const p = document.createElement("p")
  p.textContent = movie.overview
  return p
}

function crearA(){
  const a = document.createElement("a")
  a.textContent = "Ver más"
  return a
}
// Dar clase a los elementos creados
function darClaseElementosCard(article, img, h3, h4, p, a){
  article.classList.add("bg-gray-900","border-2", "border-dashed", "border-gray-400", "rounded-2xl", "p-4", "m-2", "flex", "flex-col", "md:w-1/3", "md:flex-wrap","lg:w-auto","lg:ml-auto", "lg:mr-auto","justify-between")
  img.classList.add("mb-3")
  h3.classList.add("mb-1", "font-bold", "text-2xl")
  h4.classList.add("mb-3","italic")
  p.classList.add("mb-3","line-clamp-5","md:line-clamp-3","lg:line-clamp-2")

  if(a){
  a.classList.add("text-blue-400", "cursor-pointer", "border","w-1/3","text-center","bg-black","rounded-xl","self-end")
}
}

//Incrustar los elementos en el Article utilizando el parametro movie (tomado de introducirCard)
function crearElementosDelCard(movie, vermas=true){
  const article = document.createElement("article")
  const img = crearImg(movie)
  const h3 = crearH3(movie)
  const h4 = crearH4(movie)
  const p = crearP(movie)
  const a = vermas ? crearA() : null

  article.appendChild(img)
  article.appendChild(h3)
  article.appendChild(h4)
  article.appendChild(p)

  if(a){
  article.appendChild(a)
  }

  darClaseElementosCard(article, img, h3, h4, p, a)
  return article
}

// Evento ver mas
function eventoVerMas(a, p){
  a.addEventListener("click",()=>{
      p.style.display = "block"
      a.style.display = "none"
  })
}

// Introducir cards al contenedor
export function introducirCard(array, contenedor, contenedorDetails) {
  for (const movie of array) {
      const cardContenedor = crearElementosDelCard(movie)
      contenedor.appendChild(cardContenedor)
      contenedorDetails.appendChild(detailsContenedor)
  }
}
//Reutilizar for para Details

// Funciones de la pagina Details