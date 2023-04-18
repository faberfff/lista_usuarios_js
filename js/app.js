//console.log("Listado de Personas !!!");

const personas = [
    new Persona('Juan', 'Perez', 3137564322, 'Mecaniico'),
    new Persona('Carlos', 'Vibar', 3007654398, 'Encargado bodega'),
    new Persona('Felipe London', 3002345645, 'Ingeniero sistemas')
];


const mostrarPersonas = async() => {

    await console.log('Mostrar personas');

    let e;
    for(let persona of personas) {
        //console.log(persona);
        e += `<li>${persona.nombre} ${persona.apellido}
             ${persona.telefono} ${persona.profesion}</li> `;
    }

    document.getElementById('personas').innerHTML = e;
}

const agregarPersona = () => {
    const forma = document.forms['forma'];
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];
    const telefono = forma['telefono'];
    const profesion = forma['profesion'];
    if(nombre.value != '' && apellido.value != ''
         && telefono != '' && profesion != '') {
            const persona = new Persona(nombre.value, apellido.value,
                telefono.value, profesion.value);
        
            console.log(persona);
            personas.push(persona);
            mostrarPersonas();
         }
         else{
            console.log('No existe informacion para agregar ');
         }

    





}