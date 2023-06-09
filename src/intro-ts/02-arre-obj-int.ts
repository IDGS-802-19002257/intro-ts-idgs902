let vector1:Array<number>=[9,8,7,6]
vector1.push(10)
vector1[1]=22
for (let elemento of vector1) 
    console.log(elemento)

/*  */

// objetos, arreglos, interfaces

// any
let mascotas=['perro','gato',100,true]

let tem:(boolean|string|number)[] = ['aaaaa',true,95]
let nombres:string[]=['Juan','Pedro','Mario']

interface Persona{
    nombre:string,
    grupo:string,
    edad:number,
    materias:string[]
    activo?:string
}

const alumno: Persona={
    nombre: 'Juan',
    grupo: 'IDGS902',
    edad: 32,
    materias: ['BD','Español']
}

alumno.activo='inscrito'
console.log(alumno)
console.table(alumno)