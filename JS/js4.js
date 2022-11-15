let str = ""

for (i = 0; i < 9; i++){
    for (j= 0; j< 9-i; j++){
        str += "*"
    }
    str += "\n"
}

console.log(str)

let str2 = ""

for (i = 0; i < 9; i++){
    for (j= 0; j < i; j++){
        str2 += "*"
    }
    str2 += "\n"
}

console.log(str2)

function printPattern(range){
    for(let i = 0; i < range; i++){
        let result = "";

        for (let x = 1; x <= range - i; x++){
            result 
        }

    }
}
printPattern(9)

let array = [13, 23,160, 512, 12, 250, 160, 301, 45, 22, 48, 66, 66, 12]

function getlargest(array){
    let l = array[0];
    for(let i = 1; i< array.length; i++){
        if(l<array[i]){
            l = array[i]
        }
    }
    return l;
}
console.log(getlargest(array))

function dublicate(array){
    let dArray = [];
    for(let i = 0; i < array.length; i++){
        if(array.indexOf(array[i])!= i && 
            dArray.indexOf(array[i])==-1)
            {
            dArray.push(array[i])
        }
    }
    return dArray;
}
console.log(dublicate(array))

let string = 'hello'

function reverse(string){
    let reverseString=''
    for(let i = string.length-1; i=0; 1--){
        reverseString += string[i]
    }
    return reverseString
}
console.log(reverse(string))