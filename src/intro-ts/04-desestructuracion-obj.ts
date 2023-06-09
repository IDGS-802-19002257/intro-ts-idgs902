// Desestructuracion de objetos y arreglos

interface Alumno1{
    matricula:string
    nombre:string
    edad:number
    correo:string
    grupo:Grupo
}

interface Grupo{
    grupo:string
    year:number
}

const alumno2:Alumno1={
    matricula:'2018430021',
    nombre:'Mario',
    edad:23,
    correo:'mario@mail.com',
    grupo:{
        grupo:'IDGS-902',
        year:2023
    }
}

console.log(`La matricula es: ${alumno2.matricula}`);
console.log(`El año del grupo es: ${alumno2.grupo.year}`);

const {matricula,grupo:xx} = alumno2
const {grupo,year:anio} = xx

console.log(`La matricula es: ${matricula}`);
console.log(`El nombre es ${alumno2.nombre}`);
console.log(`El grupo es: ${grupo}`);
console.log(`El año del grupo es: ${anio}`);

// Desestructuracion de arreglos
const gps:string[] = ['IDGS','IEVN','IRDS']
console.log(`Grupo 1: ${gps[0]}`);
console.log(`Grupo 2: ${gps[1]}`);
console.log(`Grupo 3: ${gps[2]}`);

const [a,b]= gps
console.log(`Grupo 1: ${a}`);