class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        return this._apellido = apellido;
    }    
}

const personas = [
    new Persona('Mark', 'Johnson'),
    new Persona('John', 'Markson')
];

let d = document;

const mostrarPersonas = (a) =>{
    console.log('Mostrar personas...');     
    if (a===1) {
        fragment = d.createDocumentFragment()
        for(let persona of personas){
            console.log(persona);
            const itemList = document.createElement('LI')
            itemList.textContent = (persona.nombre + " " + persona.apellido)
            fragment.appendChild(itemList)            
        }        
        d.getElementById('personas').appendChild(fragment);        
    }else{
        let nuevaPersona=personas[(personas.length-1)]
        const itemList = document.createElement('LI')
        itemList.textContent = (nuevaPersona.nombre + " " + nuevaPersona.apellido)        
        d.getElementById('personas').appendChild(itemList);
        console.log("all ok")
    }
}

const agregarPersona = ()=>{ 
    const forma = document.getElementById('forma')    
    let arrayNombres2 = [...forma]  
    
    if(arrayNombres2[0].value != '' && arrayNombres2[1].value != ''){
        const personaAgregar = new Persona(arrayNombres2[0].value, arrayNombres2[1].value);
        console.log(personaAgregar);
        personas.push(personaAgregar);
        console.clear()
        mostrarPersonas(2);
        nombre.value=""
        apellido.value = ""
     }
     else{
         alert("Debe completar nombre y apellido")
         console.log('No hay información que agregar');
     }    
}

d.addEventListener("DOMContentLoaded", mostrarPersonas(1))
const botonEvento = d.getElementById("boton_agregar")
botonEvento.addEventListener("click",agregarPersona)