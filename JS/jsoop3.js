let url = 'https://jsonplaceholder.typicode.com/users'

function tableCreate(){
    const body = document.body
    let tbl = document.createElement('table')

    tbl.style.width='100%'
    tbl.style.border='1px solid black'
    let tr = tbl.insertRow()

    let users = fetch(url)
    
    for(let i = 0; i < users.length; i++){
        let th = document.createElement('th')
       
        var td = document.createElement('td')
        td.appendChild()    
    }
}

tableCreate()