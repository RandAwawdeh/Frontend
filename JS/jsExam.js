let users = [
    {
    userid : 1,
    firstname:'Krish',
    lastname:'Lee',
    phonenumber:'123456' ,
    emailaddress:'krish.lee@learningcontainer.com' },
 { 
    userid : 2,
    firstname:'racks',
    lastname:'jacson',
    phonenumber :  '123456' ,
    emailaddress : ' racks.jacson@learningcontainer.com ' },{
    userid : 3,
    firstname :  'denial' ,
    lastname :  'roast' ,
    phonenumber :  '21312312  ',
    emailaddress :  'denial.roast@learningcontainer.com ' },
 { userid : 4,
    firstname :  'devid',
    lastname : 'neo',
    phonenumber :  '8975343' ,
    emailaddress :  'devid.neo@learningcontainer.com ' 
 },
 { userid : 5,
    firstname : 'jone',
    lastname :  'mac',
    phonenumber :  '3254667  ',
    emailaddress : ' jone.mac@learningcontainer.com  '
 }
]

function getbyFirstName(users,firstname){

    return users.filter((element)=> element.firstname === firstname)[0].userid
}
console.log(getbyFirstName(users, 'racks'))



function getbyLastName(users,lastName){
    let UserID= users.filter((element)=> element.lastname===lastName)[0].userid
    return (UserID)
}
console.log(getbyLastName(users,'roast'))

function getFulName(pnNumber){
    for(i=0; i<users.length;i++){
        if(users[i].phonenumber==pnNumber){
            return users[i].firstname + "" + users[i.lastname]
        }
    }

}

console.log(getFulName('8975343'))


let dataPart2=[
    {
      firstName: "Hussam",
      lastName: "Bawwab",
      age: 28,
      address: "Irbid",
      phoneNumber: "7981323312",
      jobDescription: {
        title: "Frontend",
        salary: 132123,
      },
      childreen: [
        {
          firstName: "Samer",
          lastName: "Bawwab",
          age: 3,
        },
        {
          firstName: "Bilal",
          lastName: "Bawwab",
          age: 6,
        },
        {
          firstName: "Mariam",
          lastName: "Bawwab",
          age: 8,
        },
      ],
    },
    {
      firstName: "Sara",
      lastName: "Lobani",
      age: 22,
      address: " Irbid ",
      phoneNumber: "7213454654",
      jobDescription: {
        title: "Frontend",
        salary: 2133,
      },
      childreen: [
        {
          firstName: "Ail",
          lastName: "Lobani",
          age: 13,
        },
        {
          firstName: "Lobna",
          lastName: "Lobani",
          age: 16,
        },
        {
          firstName: "Zaid",
          lastName: "Lobani",
          age: 1,
        },
      ],
    },
    {
      firstName: "Ezz",
      lastName: "Ashore",
      age: 25,
      address: "Amman",
      phoneNumber: "79823216",
      jobDescription: {
        title: "Frontend",
        salary: 2133,
      },
      childreen: [
        {
          firstName: "Rami",
          lastName: "Lobani",
          age: 20,
        },
        {
            firstName: "Omar",
            lastName: "Lobani",
            age: 9,
          },
        ],
      },
      {
        firstName: "Mohammad",
        lastName: "Damra",
        age: 30,
        address: "Amman",
        phoneNumber: "79898798465",
        jobDescription: {
          title: "Frontend",
          salary: 1133,
        },
        childreen: [
          {
            firstName: "Laith",
            lastName: "Damra",
            age: 1,
          },
          {
            firstName: "Ahmad",
            lastName: "Damra",
            age: 8,
          },
        ],
    },
];

console.log(dataPart2.map((element)=>{return element.jobDescription.title}))


function checkAgeUpper(dataPart2){
    let upper25=dataPart2.filter((element)=> element.age>25)

    return {moreThan25: upper25}
}

console.log(checkAgeUpper(dataPart2))

function checkAgeLess(dataPart2){

    let less25=dataPart2.filter((element)=> element.age<=25)

    return {lessThan25:less25}
}

console.log(checkAgeLess(dataPart2))

function moreThan2(dataPart2){

    let child=dataPart2.filter((element)=> element.childreen.length>2)

    return {moreThan2: child}
}

console.log(moreThan2(dataPart2))

function usersByAdress(dataPart2, address){

    return dataPart2.filter((element)=> element.address == address)
}
console.log(usersByAdress(dataPart2, 'Irbid'))

function tax(dataPart2){
    let listAfterTax = []
    dataPart2.forEach((element)=>{
      let obj={
        username:element.firstName + '' + element.lastName,
        salaryAfterTax: element.jobDescription.salary - element.jobDescription.salary*0.7,
        jobTitle: element.jobDescription.title
      }
      listAfterTax.push(obj)
    })

    return listAfterTax

}
console.log(tax(dataPart2))




console.log('Rand Awawdeh')
