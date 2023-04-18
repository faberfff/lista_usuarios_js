//console.log('Clase persona');

class Persona {
    constructor(nombre, apellido, telefono, profesion) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._telefono = telefono;
        this.profesion = profesion;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get apellido() {
        return this._apellido;
    }

    set apellido(apellido) {
        this._apellido = apellido;
    }

    get telefono() {
        return this._telefono;
    }

    set telefono(telefono) {
        this._telefono = telefono;
    }

    get profesion() {
        return this._profesion;
    }

    set profesion(profesion) {
        this._profesion = profesion;
    }


}