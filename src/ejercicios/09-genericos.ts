function queTipoSoy<T>(argumento: T){
    return argumento;
}

let soystring = queTipoSoy('hola mundo');
let soynumero = queTipoSoy(199);
let soyarreglo = queTipoSoy([1,2,3,4,5]);

let soyExplicito = queTipoSoy<number>(100);