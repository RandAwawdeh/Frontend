let users = [
    {
        firstName:'Hussam',
        lastName:'Bawwab',
        age:28,
        address:'Irbid',
        phoneNum:'79262843',
        jopDesc:{
            title:'frontend',
            salary:'1234',
        },
        children:[
            {
                firstName:'samer',
                lastName:'bawwab',
                age:3,

            },
            {
                firstName:'bilal',
                lastName:'bawwab',
                age:6,

            },
            {
                firstName:'mariam',
                lastName:'bawwab',
                age:1,

            },
        ]

    },
    {
        firstName:'sara',
        lastName:'Bawwab',
        age:28,
        address:'amman',
        phoneNum:'79256543',
        jopDesc:{
            title:'backtend',
            salary:'1234',
        },
        children:[
            {
                firstName:'samer',
                lastName:'bawwab',
                age:3,

            },
            {
                firstName:'careem',
                lastName:'bawwab',
                age:6,

            },
            {
                firstName:'ali',
                lastName:'bawwab',
                age:1,

            },
        ]

    },
    {
        firstName:'rami',
        lastName:'lobani',
        age:28,
        address:'amman',
        phoneNum:'79262458',
        jopDesc:{
            title:'frontend',
            salary:'1234',
        },
        children:[
            {
                firstName:'dana',
                lastName:'lobani',
                age:3,

            },
            {
                firstName:'lana',
                lastName:'lobani',
                age:6,

            },
            {
                firstName:'ola',
                lastName:'lobani',
                age:1,

            },
        ]

    },
    {
        firstName:'mera',
        lastName:'lobani',
        age:20,
        address:'amman',
        phoneNum:'79262458',
        jopDesc:{
            title:'frontend',
            salary:'1234',
        },
        children:[
            {
                firstName:'samr',
                lastName:'lobani',
                age:3,

            },
            {
                firstName:'ahmed',
                lastName:'lobani',
                age:6,

            },
            {
                firstName:'aseel',
                lastName:'lobani',
                age:1,

            },
        ]

    }
]

function checkAge(users){
    let up25=users.filter((element)=> element.age > 25)
    let less25=users.filter((element)=> element.age <= 25)
    return {morethan25:up25, lessthan25: less25}

}

let checkAgeObj=checkAge(users)
console.log(checkAgeObj)

function returnNames(users){
    let arrayOfNames = users.map(p=>p.firstName)
    return arrayOfNames
}
console.log(returnNames(checkAgeObj.up25))

//console.log(checkAge(users))



/*let names = " hussam bawwab"
names.toUpperCase
function uppercase(string){
    let array = string.split(' ')
    let array2 = []
    console.log(array)
    for(let i = 0; array.length; i++){
        array2.push(array[i].charAt(0).toUpperCase()+ array[i].slice(1))
    }
    return array2.join()
}

console.log(uppercase(names))*/