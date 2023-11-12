const detailsContainer = document.getElementById("movieDetails")

//Importando las variables para ejecutar la funcion
import {introducirCard} from '../js/module/functions.js'
import {movies} from './data.js'

//Ejecucion de la funcion para darle valores por argumento a las cards y que las cree
introducirCard(movies, detailsContainer)