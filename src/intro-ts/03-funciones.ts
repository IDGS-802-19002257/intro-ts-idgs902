// Funciones

function sumar(a:number,b:number):number{
    return a+b
}


const sumaFlecha=(a:number,b:number):number => {
    return a+b
}

function multiplicar(n1:number, n2?:number, base:number=2):number{
    return n1*base;
}

const result2 = multiplicar(5,10)
const resultado = sumar(3,4)
// console.log(result2)

interface Persona1{
    nombre:string,
    edad:number,
    grupo:()=>void,
}

function utl(alumno:Persona1,cuatrimestre:number):void{
    alumno.edad = 24
    console.log(alumno)
}

const nuevoAlumno:Persona1={
    nombre:'Mario',
    edad:22,
    grupo(){
        console.log('IDGS902', this.edad)
    }
}

utl(nuevoAlumno,4)

const funcSumar = function(n1:number,n2:number):number{
    return n1+n2
}
console.log(funcSumar(5,5))

// funcion con parametros opcionales
function calcular(n1:number,n2:number,n3?:number):number{
    let resultado = n1+n2
    if(n3){
        resultado+=n3
    }
    return resultado
}
console.log(calcular(5,5,5))
console.log(calcular(5,5))

function calcular2(...valores:number[]) {
    let suma = 0
    for(let i=0;i<valores.length;i++)
        suma+=valores[i]
    return suma
}
console.log(calcular2(10,12,2,5))
console.log(calcular2(2,5))