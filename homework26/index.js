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
container.append(buttonAdd, buttonClearnAll)

let inputSearch = document.createElement('input')    
inputSearch.classList.add('search-input')
inputSearch.setAttribute('placeholder', 'search')
container.appendChild(inputSearch) 

let buttonSortAscend = document.createElement('button')
buttonSortAscend.classList.add('ascend-button')
buttonSortAscend.innerText = 'Ascend'
let buttonSortDecrease = document.createElement('button')
buttonSortDecrease.classList.add('decrease-button')
buttonSortDecrease.innerHTML='Decrease'
container.append(buttonSortAscend,buttonSortDecrease)

let ul = document.createElement('ul')
ul.classList.add('list')
container.appendChild(ul)

let div = document.createElement('div') 
div.classList.add('info')
container.appendChild(div)    

let pNothing = document.createElement('p')
pNothing.classList.add('nothing') 
container.appendChild(pNothing)

let tasks = []

let userId = '5'

buttonAdd.addEventListener('click', createHtmlItem)
inputSearch.addEventListener('input', filterText)

async function createHtmlItem() {
    div.innerHTML = ''
    if (input.value)  
    if (validInput(input.value)) {
        let respons = await createTask(input.value)
        if (!respons) {
                return
            }
        tasks.push(cookedTask(respons))
        renderingList()
    } else {
        infoText('use only standard alphanumerics')
    }
    clearnInput()
}   

function validInput(value) {
   return /^[a-zA-Z0-9]+$/.test(value)
}

function renderingList() {
    ul.innerHTML = ''
    tasks.forEach((item) => { 
        if (item.editetaple){
            let li = createLiEdite(item)
            // li.addEventListener('click', infoItemElement)
            ul.appendChild(li)
        } else {
            let li = createLi(item)
            li.addEventListener('click', infoItemElement)
            ul.appendChild(li)
        }
    }) 
 
}

function filterText(e) {
    pNothing.innerHTML = ""
    ul.innerHTML = ''
    let value = e.target.value
    let resaltFilter = tasks.filter(item => item.text.toLowerCase().includes(value.toLowerCase()))

    if (resaltFilter.length > 0) {
       resaltFilter.forEach((item) => { 
        if (item.editetaple){
            let li = createLiEdite(item)
            ul.appendChild(li)
        } else {
            let li = createLi(item)
            ul.appendChild(li)
        }
    })
    } else {
        pNothing.innerHTML = "Not item found"
   }

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
    buttonSave.classList.add('save-button')
    buttonSave.innerText = 'Save'
    let buttonCancel = document.createElement('button')
    buttonCancel.classList.add('cansel-button')
    buttonCancel.innerHTML='Cancel'
    li.append(buttonSave, buttonCancel)
    
    buttonSave.addEventListener('click', saveEditeble)
    buttonCancel.addEventListener('click', cancelEditeble)
    input.addEventListener('click', infoItemElement)

    return li
}

async function remuveHandlerItem(e) {
    let id = e.target.parentElement.id
    let itemLi = tasks.find(item => item.id.toString() === id)

    await deleteToDoTask(itemLi.id)
}

function editeHandlerItem(e) {
    let id = e.target.parentElement.id
    let itemLi = tasks.find(item => item.id.toString() === id)
    itemLi.editetaple = true
   
    let newChild = createLiEdite(itemLi)
    let oldChild = e.target.parentElement

    e.target.parentElement.parentElement.replaceChild(newChild, oldChild)
}

async function saveEditeble(e) {
    let id = e.target.parentElement.id
    let itemLi = tasks.find(item => item.id.toString() === id)
  
    await ubdateTask(itemLi.id, { ...itemLi, text: e.target.previousSibling.value, chacked:false, editetaple: false})
    inputSearch.value = ''
}

function cancelEditeble(e) {
    let id = e.target.parentElement.id
    let itemLi = tasks.find(item => item.id.toString() === id)
    itemLi.editetaple = false
    renderingList()
}

async function checkedTasks(e) {
    let id = e.target.parentElement.id
    let itemLi = tasks.find(item => item.id.toString() === id)
    await ubdateTask(itemLi.id, { ...itemLi, chacked: e.target.checked})

    if (itemLi.chacked) {
        e.target.nextSibling.classList.add('checked')
    } else {
        e.target.nextSibling.classList.remove('checked')
    }
}

function infoText(text) { 
    div.innerHTML=""
    div.classList.add('active') 
    let p = document.createElement('p')
    div.appendChild(p)
    p.innerHTML = text
}

function clearnInput() {
    input.value = ''
}

buttonClearnAll.addEventListener('click', () => {
    clearnInput()
    div.innerHTML = ''
    ul.innerHTML = ''
    tasks = []
})

buttonSortAscend.addEventListener('click', sortAscend)
buttonSortDecrease.addEventListener('click', sortDecrease)

function sortAscend() {
    tasks = tasks.sort((a, b) => a.id > b.id ? 1 : -1)
    renderingList()
}

function sortDecrease() {
    tasks = tasks.sort((a, b) => a.id < b.id ? 1 : -1)
    renderingList()
    
}

function infoItemElement(e) {
    let id = e.target.parentElement.id
    let itemLi = tasks.find(item => item.id.toString() === id)

    getTask(itemLi.id, { ...itemLi, editetaple: itemLi.editetaple} )
}

function cookedTask(item) {
     return {
                text: item.title,
                chacked: item.completed,
                editetaple: false,
                id: item.id,
            }
}

function getInitalTask() {
     div.innerHTML=""
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
        .then(respons => respons.json())
        .then(json => json.map(item =>cookedTask(item)))
        .then(mappedTask => {
            console.log(mappedTask)
            tasks = mappedTask
        })
        .then(() => renderingList())
        .catch(e =>alert(e.message))
}
getInitalTask()

function ubdateTask(id, task) {
     div.innerHTML=""
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            id: task.id,
            title: task.text,
            completed: task.chacked,
            editetaple: task.editetaple,
            userId,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(task => {
            if (!task.ok) {
                throw new Error(task.status)
            } else {
                return task
            }
        })
        .then(async task => {
            let json = await task.json()
            cookedTask(json)
            let indexObg = tasks.findIndex(item => item.id === json.id)
            tasks[indexObg] = cookedTask(json)
            renderingList()
        })
        .catch(error => {
            console.log(error.message)
            infoText(error.message)
        })
    
}

function deleteToDoTask(id) {
     div.innerHTML=""
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'DELETE',
    })
      .then(task => {
            if (!task.ok) {
                throw new Error(task.status)
            } else {
                return task
            }
        })
        .then(()=> {
            let indexObg = tasks.findIndex(item => item.id === id)
            tasks.splice(indexObg, 1)
            renderingList()
        })
        .catch(error => {
            console.log(error.message)
            infoText(error.message)
        })

}

function createTask(text) {
     div.innerHTML=""
    return fetch(`https://jsonplaceholder.typicode.com/todos`, {
            method: 'POST',
            body: JSON.stringify({
                title: text,
                completed: false,
                editetaple: false,
                userId,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
    })
           .then(task => {
            if (!task.ok) {
                throw new Error(task.status)
            } else {
                return task
            }
        })
        .then(response => response.json())
        .catch(error => {
            console.log(error.message)
            infoText(error.message)
        })
}

function getTask(id, task) {
    div.innerHTML=""
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(task => {
            if (!task.ok) {
                throw new Error(task.status)
            } else {
                return task
            }
        })
        .then(response => response.json())
        .then(json => {
            let item = { ...json, editetaple: task.editetaple }
            console.log(item)
        })
        .catch(e =>console.log(e.message))
}
