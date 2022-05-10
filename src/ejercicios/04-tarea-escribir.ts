
/*
    ===== Código de TypeScript =====
*/

interface Superheroe{
    nombre: string,
    edad: number,
    direccion: Direccion,
    mostrardireccion: () => string;
}
interface Direccion{
    calle: string,
    pais: string,
    ciudad: string
}
const superheroe: Superheroe = {
    nombre: "Spiderman",
    edad: 30,
    direccion: {
        calle: "Quillay",
        pais: "Ecuador",
        ciudad: "Quito",
    },
    mostrardireccion() {
        return this.nombre + ", " + this.direccion.calle + ", " + this.direccion.ciudad + ", " + this.direccion.pais;
    }
}

const direccion = superheroe.mostrardireccion();
console.log(direccion);
