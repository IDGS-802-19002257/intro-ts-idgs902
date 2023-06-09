class Persona2{
    nombre:string='2'
    edad:number=2
    constructor(nombre:string,edad:number){
        this.nombre = nombre
        this.edad = edad
    }
    imprimir(){
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`)
    }
}
let persona:Persona2
persona = new Persona2('Erick',24)
persona.imprimir()

/* class Persona2{
    // nombre:string='2'
    // edad:number=2
    constructor(nombre:string = '',edad:number = 0){
        // this.nombre = nombre
        // this.edad = edad
    }
    imprimir(){
        console.log(`Nombre: ${nombre} - Edad: ${edad}`)
    }
}
let persona:Persona2
persona = new Persona2('Erick',24)
persona.imprimir() */

// modificadores de acceso

class Dado{
    private valor:number=0
    public tirar(){
        this.generar()
    }
    private generar(){
        this.valor = Math.floor(Math.random()*6)+1
    }
    public imprimir(){
        console.log(`valor: ${this.valor}`);
    }
}

let dado1 = new Dado()
dado1.tirar()
dado1.imprimir()

// clase 2

class Persona3{
    constructor(private nombre:string,private edad:number){}
    imprimir(){
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`)
    }
}
let persona3:Persona3
persona3 = new Persona3('Erick',24)
persona3.imprimir()