import fs from 'fs'; 


class Persona{
    constructor(id, nombre, apellido){
        this.id = id; 
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

function leerPersona(ruta) {

    const datos = fs.readFileSync(ruta, 'utf8');
    const personaArray = JSON.parse(datos);
    
    const personas = personaArray.map(element => new Persona(element.id, element.nombre, element.apellido));

    personas.sort((a,b)=> a.nombre.localeCompare(b.nombre));
    return personas; 
}


function agregarPersona(rutaOriginal, rutaNueva) {
    
    const personasOriginales = leerPersona(rutaOriginal);
    const personasNuevas = leerPersona(rutaNueva); 

    const combinarListadoPersonas = [...personasOriginales, ...personasNuevas];

    fs.writeFileSync(rutaOriginal, JSON.stringify(combinarListadoPersonas, null, 2));
    console.log("Lista Actualizada con éxito!");
}


export {leerPersona, agregarPersona}