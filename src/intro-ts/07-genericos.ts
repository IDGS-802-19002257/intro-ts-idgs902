class PilaEnteros{
    private vec:number[]=[]
    insertar(x:number){
        this.vec.push(x)
    }
    extraer(){
        if (this.vec.length>0) {
            return this.vec.pop()
        } else {
            return null
        }
    }
}

class PilaStrings{
    private vec:string[]=[]
    insertar(x:string){
        this.vec.push(x)
    }
    extraer(){
        if (this.vec.length>0) {
            return this.vec.pop()
        } else {
            return null
        }
    }
}

let pila1 = new PilaEnteros()
pila1.insertar(23)
pila1.insertar(28)
pila1.insertar(2)
console.log(pila1.extraer());

let pila2 = new PilaStrings()
pila2.insertar('Erick')
pila2.insertar('Mario')
pila2.insertar('Juan')
console.log(pila2.extraer());

// Genericos
class PilaGenerica<T>{
    private vec:T[]=[]
    insertar(x:T){
        this.vec.push(x)
    }
    extraer(){
        if (this.vec.length>0) {
            return this.vec.pop()
        } else {
            return null
        }
    }
}

let pila3 = new PilaGenerica<number>()
pila3.insertar(23)
pila3.insertar(28)
pila3.insertar(2)
console.log(pila3.extraer());

let pila4 = new PilaGenerica<string>()
pila4.insertar('Erick')
pila4.insertar('Mario')
pila4.insertar('Juan')
console.log(pila4.extraer());

