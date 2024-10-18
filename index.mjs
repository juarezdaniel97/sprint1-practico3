import { leerSuperheroes, agregarSuperheroes } from "./utils.mjs";

const ruta_1 = './superheroes.txt';
const ruta_2 = './agregarSuperheroes.txt';


const superheroes = leerSuperheroes(ruta_1);
console.log('Lista inicial de superheroes ordenados por nombre:');
console.log(superheroes);

console.log("---------------------------------------------");
agregarSuperheroes(ruta_1, ruta_2);
console.log("---------------------------------------------\n");

const superheroesActualizada = leerSuperheroes(ruta_1);
console.log('Lista actualizada de superheroes ordenados por nombre:');
console.log(superheroesActualizada);


