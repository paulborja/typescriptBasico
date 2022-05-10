
/*
    ===== Código de TypeScript =====
*/

class PersonaNormal{
    constructor(
        public nombre: string,
        public direccion: string
    ){}
}
class Heroe extends PersonaNormal {
    //nombre: string;
    //alterEgo: string;
    //edad: number;
    constructor(
        public nombreReal: string,
        public alterEgo: string,
        public edad: number
    ){
        super(nombreReal, "virgina, USA")
    }
}

//const spiderman = new Heroe();
const ironman= new Heroe('jack', 'vuela', 34);
console.log(ironman);
