const[a,b,...c]=[1,2,3,4,5,6]

console.log(a + ' ' + b + 'c: ' + c)

class Book{
    constructor(author){
        this.author = author
    }
    get writer(){
        return this.author
    }
    set writer(author){
        this.author= author
    }
}

const book1 = new Book('hussam')
console.log(book1.writer)


const promise = new promise((resolve, reject) => {

    resolve({})
    reject("")
})

Promise
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log(123)
    })

function forloop1(){
    for (let i=0; i < 5; i++){
        console.log(i)
    }
}
forloop1()
forloop1()
forloop1() 


//js 15

const div = document.createElement("div")
div.id = "demo"

div.className = "hello-p"
let text = document.createTextNode("new text was added")
div.appendChild(text)

let h2 = document.createElement('h2')

h2.textContent = "H2 was added"

