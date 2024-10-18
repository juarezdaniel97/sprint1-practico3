import { leerPersona, agregarPersona } from "./utils.mjs";

const rutaOriginal = './datos/personas.txt';
const rutaNueva = './datos/agregarPersona.txt'; 


const personas = leerPersona(rutaOriginal); 
console.log("Lista Inicial Ordenada por Nombre:");
console.log(personas);



agregarPersona(rutaOriginal, rutaNueva);
console.log('----------------------------');

const personasCombinadas = leerPersona(rutaOriginal); 
console.log("Lista Combinada Ordenada por Nombre:");
console.log(personasCombinadas);


