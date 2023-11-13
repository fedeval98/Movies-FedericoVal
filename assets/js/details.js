const detailsContainer = document.getElementById("movieDetails")

//Determinar si la pagina es visible, para poder crear las cards usando el for de functions.
export const esVisible = document.hidden

//Importando las variables para ejecutar la funcion
import {introducirCard} from '../js/module/functions.js'
import {movies} from './data.js'

//Ejecucion de la funcion para darle valores por argumento a las cards y que las cree
introducirCard(movies, detailsContainer)