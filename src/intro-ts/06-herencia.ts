class Persona4{
    protected nombre:string='2'
    protected edad:number=2
    constructor(nombre:string,edad:number){
        this.nombre = nombre
        this.edad = edad
    }

    imprimir(){
        console.log(`Nombre: ${this.nombre}`)
        console.log(`Edad: ${this.edad}`)
    }
}

class Empleado extends Persona4{
    private sueldo:number=0
    constructor(nombre:string,edad:number,sueldo:number){
        super(nombre,edad)
        this.sueldo = sueldo
    }
    imprimir(){
        super.imprimir()
        console.log(`Sueldo: ${this.sueldo}`);
    }
}
