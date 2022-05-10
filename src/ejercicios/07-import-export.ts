import { calculaISV, Producto } from "./06-desestructuracion-funcionaes";

const carritoCompras: Producto[]=[
    {
        desc: 'fono 1',
    precio: 450 
    },
    {
        desc: 'fono 2',
    precio: 550 
    }
]

const [total, isv] = calculaISV( carritoCompras);
console.log ('Total ', total);
console.log ('ISV ', isv);

