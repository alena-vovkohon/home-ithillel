let container = document.querySelector('.container')
let input = document.createElement('input')    
input.classList.add('create-input')
container.appendChild(input)  

let buttonAdd = document.createElement('button')
buttonAdd.classList.add('add-button')
buttonAdd.innerText = 'Add'
let buttonClearnAll = document.createElement('button')
buttonClearnAll.classList.add('clearn-button')
buttonClearnAll.innerHTML='Clearn All'
container.append(buttonAdd,buttonClearnAll)

let ul = document.createElement('ul')
ul.classList.add('list')
container.appendChild(ul)

let div = document.createElement('div') 
div.classList.add('info')
container.appendChild(div)      

let tasks = []

function createHtmlItem() {
    div.innerHTML = ''
    if (input.value)  
    if (validInput(input.value)) {
        tasks.push({
            text: input.value,
            chacked: false,
            editetaple: false,
            id: new Date()
        })
        clearnInput()
        renderingList() 
    } else {
        infoText()
        clearnInput()
    }
}   

function validInput(value) {
   return /^[a-zA-Z0-9]+$/.test(value)
}

function renderingList() {
    ul.innerHTML = ''
    tasks.forEach((item) => { 
        if (item.editetaple){
            let li = createLiEdite(item)
            ul.appendChild(li)
        } else {
            let li = createLi(item)
            ul.appendChild(li)
        }
    })
}
 
function createLi(itemArr) {
    let li = document.createElement('li')
    li.classList.add('list-item') 
    li.setAttribute('id', itemArr.id)

    let inputCheckbox = document.createElement('input')
    inputCheckbox.classList.add('list__checkbox')
    inputCheckbox.type ='checkbox'
        
    let span = document.createElement('span')
    span.classList.add('list__span')
    span.innerText = itemArr.text
    li.append(inputCheckbox, span)  
        
    let buttonEdite = document.createElement('button')
    buttonEdite.classList.add('edite-button')
    buttonEdite.innerText = 'Edite'
    let buttonRemuve = document.createElement('button')
    buttonRemuve.classList.add('remuve-button')
    buttonRemuve.innerHTML='Remuve'
    li.append(buttonEdite, buttonRemuve)

    if (itemArr.chacked === true) {
        inputCheckbox.checked = true
        span.classList.add('checked')      
    }
    
    buttonEdite.addEventListener('click', editeHandlerItem)
    buttonRemuve.addEventListener('click', remuveHandlerItem)
    inputCheckbox.addEventListener('click', checkedTasks)

    return li
}

function createLiEdite(itemArr) {
    let li = document.createElement('li')
    li.classList.add('list-item') 
    li.setAttribute('id', itemArr.id)
        
    let input = document.createElement('input')
    input.classList.add('list__input')
    input.value = itemArr.text
    li.appendChild(input)  
        
    let buttonSave = document.createElement('button')
    buttonSave.classList.add('seve-button')
    buttonSave.innerText = 'Save'
    let buttonCancel = document.createElement('button')
    buttonCancel.classList.add('cansel-button')
    buttonCancel.innerHTML='Cancel'
    li.append(buttonSave, buttonCancel)
    
    buttonSave.addEventListener('click', siveEditeble)
    buttonCancel.addEventListener('click', cancelEditeble)

    
    return li
}

buttonAdd.addEventListener('click', createHtmlItem)
 
function siveEditeble(e) {
     console.log(e.target.previousSibling.value)
    let id = e.target.parentElement.id
    let itemLi = tasks.find(item => item.id.toString() === id)
    itemLi.text = e.target.previousSibling.value
   
    itemLi.editetaple = false
    itemLi.chacked = false

    renderingList()
}

function remuveHandlerItem(e) {
    let id = e.target.parentElement.id
    let index = tasks.findIndex(item => item.id.toString() === id)
    tasks.splice(index, 1)
    renderingList()
}

function editeHandlerItem(e) {
    let id = e.target.parentElement.id
    let itemLi = tasks.find(item => item.id.toString() === id)
    itemLi.editetaple = true
   
    let newChild = createLiEdite(itemLi)
    let oldChild = e.target.parentElement

    e.target.parentElement.parentElement.replaceChild(newChild, oldChild)
}

function cancelEditeble(e) {
    let id = e.target.parentElement.id
    let itemLi = tasks.find(item => item.id.toString() === id)
    itemLi.editetaple = false
    renderingList()
}

function checkedTasks(e) {
    let id = e.target.parentElement.id
    let itemLi = tasks.find(item => item.id.toString() === id)
    itemLi.chacked = e.target.checked
 
    if (itemLi.chacked) {
        e.target.nextSibling.classList.add('checked')
    } else {
        e.target.nextSibling.classList.remove('checked')
    }
}

function infoText() { 
    div.classList.add('active') 
    let p = document.createElement('p')
    div.appendChild(p)
    p.innerHTML = "use only standard alphanumerics"
}

function clearnInput() {
    input.value = ''
}

buttonClearnAll.addEventListener('click', () => {
    clearnInput()
    div.innerHTML = ''
    ul.innerHTML = ''
    tasks=[]
})
