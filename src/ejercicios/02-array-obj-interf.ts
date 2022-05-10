

console.log('Hola Mundo Paul Borja!');

/*
    ===== Código de TypeScript =====
*/
let habilidades: string[]=["Hash", "Counter", "Healing"];
interface Personaje{
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}
const personaje: Personaje={
    nombre: "Spiderman",
    hp: 1000,
    habilidades: ["Hash", "Counter", "Healing"]
}
personaje.puebloNatal="Quito";
console.table(personaje);
