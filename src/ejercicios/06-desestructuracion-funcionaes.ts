
export interface Producto {
    desc: string,
    precio: number
}
const bicicleta: Producto = {
    desc: "montaniera",
    precio: 1200
}
const telefono: Producto = {
    desc: "samsung s20",
    precio: 1230
}
export function calculaISV(productos: Producto[]):[number, number]{
    let total = 0;
    productos.forEach(({precio}) => {
        total +=precio;
    })
    return [total, total * 0.15];
}
const articulos = [bicicleta, telefono];
const [total, isv] = calculaISV(articulos);

console.log ('Total ', total);
console.log ('ISV ', isv);
