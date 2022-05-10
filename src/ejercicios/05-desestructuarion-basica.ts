
interface Reproductor{
    volumen: number,
    cancion: string,
    segundo: number,
    detalles: Detalles
}

interface Detalles{
    autor: string,
    anio: number

}

const reproductor: Reproductor = {
    volumen: 90,
    cancion: "La Bamba",
    segundo: 45,
    detalles: {
        autor: "juan perez",
        anio: 1986
    }
}

const {volumen, cancion}=reproductor;

console.log('Volumen: ', volumen);
console.log('Cancion: ', cancion);
console.log('Segundo: ', reproductor.segundo);
console.log('Autor: ', reproductor.detalles.autor);
console.log('Anio: ', reproductor.detalles.anio);

const dbz: string []=["vegueta", "goku", "fly"];
const [,,p3]=dbz;
//console.log ('personaje 1', p1);
//console.log ('personaje 2', p2);
console.log ('personaje 3', p3);
