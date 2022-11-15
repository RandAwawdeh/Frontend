function addItemToList(number){
let input = document.getElementById('num-input');
    for(let i=1; i<= parseInt(input.value); i++){
        var li = document.createElement("li");
        li.textContent=i
  
    ul.appendChild(li);
    }
}
let ul = document.getElementsByClassName("dynamic-list")[0];

addItemToList(10)