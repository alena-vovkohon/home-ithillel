let divTable = document.querySelector('.head__table')
let table = document.createElement('table')
table.classList.add('table')
divTable.appendChild(table)

let arrTable = []

function createArr() {
    for (let i = 0; i < 10; i++) {
        let namberArr = []
        for (let j = 0; j < 10; j++) {
            let minNumber = 1;
            let maxNumber = 100;
            let numberRandom = Math.round(Math.random() * (maxNumber - minNumber) + minNumber)
            namberArr.push(numberRandom);
        }
        arrTable.push(namberArr)
    } 
    return arrTable
}
let array = createArr()

function createTable(arr) {
    for (let i = 0; i < arr.length; i++){
        let tr = document.createElement('tr')
        for (let j = 0; j < arr[i].length; j++){
            let td = document.createElement('td')
            td.innerHTML = arr[i][j]
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
}
createTable(array);