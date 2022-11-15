let url = 'https://jsonplaceholder.typicode.com/users'

async function fetchUsers(){
    let reponse = await fetch(url)
    let json = await reponse.json() //?
    return json
}

let btn = document.getElementById("btn")

btn.addEventListener("click", ()=>{
  //  fetchUsers().then(result => {console.log(result)})
  console.log('click')
} )

//document.addEventListener('load', ()=>{ })

//document.addEventListener('DOMContentLoaded', ()=>{ })

btn.addEventListener("mousedown", ()=>{
    console.log('mousedown')
} )

btn.addEventListener("mouseup", (e)=>{
   // console.log('mouseup')
   console.log(e)

   switch(e.button){
    case 0:
        console.log("left mouse btn clicked")
        break
    case 1:
        console.log("middle mouse btn clicked")
        break

    case 2:
        console.log("right mouse btn clicked")
        break

    case 3:
        console.log("Unknowen mouse btn clicked")
        break

        default:
            console.log("Unkown mouse btn clicked")
   }
} )

let test = document.getElementById("test")

test.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') { //enter or 13 (each key has num)

    }

})