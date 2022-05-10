
/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number{
    return a+b;
}
const sumarFlecha = (a: number, b: number): number => {
    return a+b;
}
function multiplicar (numero: number, otronumero?: number, base: number=2): number{
    return numero * base;
}

interface PersonajeLOR{
    nombre: string;
    pv: number;
    mostrarhp: () => void;
}
function curar(personaje: PersonajeLOR, curarX: number): void{
  personaje.pv += curarX;
}
const nuevopersonaje: PersonajeLOR = {
    nombre: "paul",
    pv: 50,
    mostrarhp() {
        console.log("puntos de vida ", this.pv);
    }
}
curar(nuevopersonaje, 25);
nuevopersonaje.mostrarhp();
