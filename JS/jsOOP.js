//constractor function
//exampl 1
function Car(name, color, model){
    this.name = name;
    this.color = color;
    this.model = model;

    //this.start = function(){console.log("start engin" + this.name)}
}

// prototype used with constructor only

Car.prototype.start = function(){
    console.log("start engine " + this.name)
}

Car.prototype.stop = function(){
    console.log("stop engine " + this.name)
}
const bmw = new Car("BMW","red",2023)
bmw.start()
bmw.stop()

const kia = new Car("kia","red",2023)
kia.start()

console.log([])


//exampl 2

function Animal(){}
function Bird(){}
function Dog(){}

Bird.prototype = Object.create(Animal,prototype)
Dog.prototype = Object.create(Animal,prototype)

let duck = new Bird()
let beagle = new Dog()

