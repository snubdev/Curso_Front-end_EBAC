import carros from './carros.js'

// Filtar carros
const filteredCarros = carros.filter( (carros)=> {
    return carros.motor === 4.0
})

console.log(filteredCarros)

let toPrint = ''

// Lista carros

filteredCarros.forEach(carros => {
    toPrint += carros.modelo + ', '
})