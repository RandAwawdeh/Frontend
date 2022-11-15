//fac func
function createCar(){
    return{
        name: null,
        modele: null,
        color: null,
        start: function(){
            console.log("start engin" + this.name)
        },
        stop: function(){
            console.log("stop engin" + this.name)
        }
    }
}

//5 lines each car
const bmw = createCar()
bmw.color = "red"
bmw.name = "bmw"
bmw.model = 2023
bmw.start()
bmw.stop()

console.log(bmw)

//sec way
function createAnotherCar(name,color,modle){
    return{
        name: null,
        modele: null,
        color: null,
        start: function(){
            console.log("start engin" + this.name)
        },
        stop: function(){
            console.log("stop engin" + this.name)
        }
    }
}

// one line each car
const kia = createCar("kia","red",2023)
const mbw = createCar("mbw","red",2023)
const rio = createCar("rio","red",2023)

