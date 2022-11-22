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

let ul = document.createElement('ul')
ul.classList.add('list')
container.appendChild(ul)

let div = document.createElement('div') 
div.classList.add('info')
container.appendChild(div)      

let tasks = []
let userId = '1'

if (localStorage.getItem('tasks') !== null) {
    tasks = JSON.parse(localStorage.getItem('tasks'))
    // console.log(tasks)
    renderingList() 
}

const taskAllLocalStorage = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
    // console.log(localStorage)
}

async function createHtmlItem() {
    div.innerHTML = ''
    if (input.value)  
    if (validInput(input.value)) {
        let respons = await createTask(input.value)
        console.log(respons)

        if (!respons) {
            return
        }

        tasks.push(cookedTask(respons))
        renderingList() 
        console.log(tasks)

        clearnInput()
    } else {
        infoText()
        clearnInput()
    }
    taskAllLocalStorage()
    
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
 
async function siveEditeble(e) {
    let id = e.target.parentElement.id
    let itemLi = tasks.find(item => item.id.toString() === id)
    itemLi.text = e.target.previousSibling.value

    let result = await ubdateTask(itemLi.id, { ...itemLi, text: itemLi.text, chacked:false })
    
    // if (!result) {
    //         return
    // }
    
    // itemLi.editetaple = false
    // itemLi.chacked = false

    // renderingList()
    // taskAllLocalStorage()
    inputSearch.value = ''
}

async function remuveHandlerItem(e) {
    let id = e.target.parentElement.id
    let index = tasks.findIndex(item => item.id.toString() === id)
    // console.log(index)

    let result = await deleteToDoTask(tasks[index])
    console.log(result)
    // if (!result) {
    //     return
    // }

    tasks.splice(index, 1)
    console.log(tasks)
    renderingList()
    // taskAllLocalStorage()
}

function editeHandlerItem(e) {
    let id = e.target.parentElement.id
    let itemLi = tasks.find(item => item.id.toString() === id)
    itemLi.editetaple = true
   
    let newChild = createLiEdite(itemLi)
    let oldChild = e.target.parentElement

    e.target.parentElement.parentElement.replaceChild(newChild, oldChild)
    taskAllLocalStorage()
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
    console.log(itemLi)
    itemLi.chacked = e.target.checked

    let result = await ubdateTask(itemLi.id, { ...itemLi, chacked: itemLi.chacked })

    // if (!result) {
    //         return
    //     }
    
    
    // if (itemLi.chacked) {
    //     e.target.nextSibling.classList.add('checked')
    // } else {
    //     e.target.nextSibling.classList.remove('checked')
    // }
    // taskAllLocalStorage()
}

function infoText(text) { 
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
    taskAllLocalStorage()
})

inputSearch.addEventListener('input', filterText)

 let pNothing = document.createElement('p')
    pNothing.classList.add('nothing') 
    container.appendChild(pNothing)

function filterText(e) {
    pNothing.innerHTML = ""
     ul.innerHTML = ''
    let value = e.target.value
    let resaltFilter = tasks.filter(item => item.text.toLowerCase().includes(value.toLowerCase()))
    console.log('resaltFilter', resaltFilter)

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


function cookedTask(item) {
     return {
                text: item.title,
                chacked: item.completed,
                editetaple: false,
                id: item.id,
            }
}

function ubdateTask(id,task) {
    // let ubdateItem = tasks.find(item => item.id === id)
    // console.log(ubdateItem)

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
            console.log(task)
            let json = await task.json()
            console.log(cookedTask(json))
            let indexObg = tasks.findIndex(item => item.id === json.id)
            console.log(indexObg)
            tasks[indexObg] = cookedTask(json)

            // console.log(ubdateObg)
            renderingList()
            taskAllLocalStorage()
        })
        .catch(e =>console.log(e.message))
}

function deleteToDoTask(id) {
    //  let ubdateItem = tasks.find(item => item.id === id)
    // console.log(id)
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'DELETE',
    })
}

function createTask(text) {
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
        .then(response => {
            console.log(response.json())
            response.json()
        })
        .catch(error => {
            console.log(error.message)
            divError.innerHTML = ""
            infoText(error.message)
        })
}
