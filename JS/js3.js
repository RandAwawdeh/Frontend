let name = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci doloribus amet est illum temporibus dolor eveniet nisi, odio in eaque similique fugiat cum sit, beatae iste rem vero voluptatum inventore! "

//console.log(name,endWith('w',10))
//console.log(name,startWith('m',5))
//console.log(name,includes(""))
//console.log(name,length)



let car = {
    carName:"BMW",
    carModel:"2022",
    carColor:"black",
    print: function() {
        return console.log(this.carName + "" + this.carModel)
    }
}
console.log(car['carName'])
console.log(car.carName)

car.print()