let headSection = document.querySelector('.head__section')
let inputCreate = document.querySelector('.create')
let buttonAdd = document.querySelector('.add')
let buttonClearn = document.querySelector('.clearn')
let informationDiv = document.querySelector('.information')
let background = document.querySelector('img')
let ulListinfo = document.querySelector('.listinfo__list')
let calcNumber = document.querySelector('.text-calc')

let tasks = []
let todoItemElems = []

function Task(taskDescription) {
  this.taskDescription = taskDescription
  this.taskChecke = false
  this.taskEdit = false
}

const createListText = (task, index) => {

  let li = document.createElement('li')
  li.classList.add('listinfo__task')
  li.setAttribute('id', index)

  let inputCheckbox = document.createElement('input')
  inputCheckbox.classList.add('listinfo__checkbox')
  inputCheckbox.setAttribute('type', 'checkbox')
  inputCheckbox.setAttribute('id', index)
  let label = document.createElement('label')
  label.classList.add('listinfo__item')
  label.setAttribute('for', index)

  let p = document.createElement('p')
  p.classList.add('listinfo__text', 'text-task')
  p.setAttribute('id', index)

  let divEdit = document.createElement('div')
  divEdit.classList.add('button-block')

  let buttonEdit = document.createElement('button')
  buttonEdit.classList.add('head__button', 'edit')
  buttonEdit.setAttribute('type', 'button')
  let buttonRemove = document.createElement('button')
  buttonRemove.classList.add('head__button', 'remove')
  buttonRemove.setAttribute('type', 'button')

  ulListinfo.appendChild(li)
  li.appendChild(inputCheckbox)
  li.appendChild(label)
  label.appendChild(p)
  p.innerHTML = task.taskDescription

  li.appendChild(divEdit)
  divEdit.append(buttonEdit,buttonRemove)
  buttonEdit.innerHTML = 'Edit'
  buttonRemove.innerHTML = 'Remove'

  if (task.taskChecke === true) {
    inputCheckbox.checked = true 
    p.classList.add('checked')
  }

  buttonEdit.addEventListener('click', () => {
    editTask(index)
    console.log('createListText',tasks)
  })
 
  inputCheckbox.addEventListener('click', function () {
    chackedTask(index)
  })
  
  buttonRemove.addEventListener('click', () => {
    deleteTask(index)
  })
  return li
}

const createListEdit = (task, index) => {
  let li = document.createElement('li')
  li.classList.add('listinfo__task', 'edit')
  li.setAttribute('id', index)

  let input = document.createElement('input')
  input.classList.add('head__input', 'task-edit')
  input.setAttribute('id', index)

  let divEdit = document.createElement('div')
  divEdit.classList.add('button-block')

  let buttonSave = document.createElement('button')
  buttonSave.classList.add('head__button', 'save')
  buttonSave.setAttribute('type', 'button')
  let buttonCancel= document.createElement('button')
  buttonCancel.classList.add('head__button', 'cancel')
  buttonCancel.setAttribute('type', 'button')

  ulListinfo.appendChild(li)
  li.appendChild(input)
  input.value = task.taskDescription
  
  li.appendChild(divEdit)
  buttonSave.innerHTML = 'Save'
  buttonCancel.innerHTML = 'Cancel'
  divEdit.append(buttonSave,buttonCancel)

  buttonSave.addEventListener('click', () => {
    saveEdit(index)
  })

   buttonCancel.addEventListener('click', () => {
      canselEdit(index)
   })
  return li
}

const calkTasks = () => {
  let calk = tasks.length
  if (calk !== 0) {
    calcNumber.innerHTML = `${calk} task(s)`
  } else {
    calcNumber.innerHTML = '0 tasks'
  }
}
calkTasks()

const inputClean = () => {
  inputCreate.value = ''
}

const ulListClean = () => {
   ulListinfo.innerHTML = ''
}

const fillHtmlList = (arr) => {
  ulListClean()
  if (arr.length !== 0) { 
    arr.forEach((item, index) => {
        if (item.taskEdit){
          let li = createListEdit(item, index)
          item.taskChecke = false
          ulListinfo.appendChild(li)
        } else {
            let li = createListText(item, index)
            ulListinfo.appendChild(li)
        }
    })
    todoItemElems = document.querySelectorAll('.listinfo__task')
  }
}
fillHtmlList(tasks)

const deleteTask = (index) => {
  ulListinfo.removeChild(todoItemElems[index])
  tasks.splice(index, 1)

  fillHtmlList(tasks)
  calkTasks()
}

const chackedTask = (index) => {
  tasks[index].taskChecke = !tasks[index].taskChecke
  let textItemElement = todoItemElems[index].getElementsByTagName('p')
  if (tasks[index].taskChecke) {
    textItemElement[0].classList.add('checked')
  } else {
    textItemElement[0].classList.remove('checked')
  }
}

const editTask = (index) => {
  tasks[index].taskEdit = !tasks[index].taskEdit
  let newChild = createListEdit(tasks[index], index)
  let oldChild = todoItemElems[index]
  ulListinfo.replaceChild(newChild, oldChild)

  fillHtmlList(tasks)
}

const saveEdit = (index) => {
  tasks[index].taskEdit = !tasks[index].taskEdit
  console.log( tasks[index].taskChecke)
  let textItemElement = todoItemElems[index].getElementsByTagName('input')
  tasks[index].taskDescription = textItemElement[0].value
  
  fillHtmlList(tasks)
}

const canselEdit = (index) => {
  tasks[index].taskEdit = !tasks[index].taskEdit
  fillHtmlList(tasks)
}


buttonAdd.addEventListener('click', () => {
  if (inputCreate.value) {
    let valueInput = inputCreate.value;
    tasks.push(new Task(valueInput,))
  
    fillHtmlList(tasks)
    inputClean()
    calkTasks()
  }

})

buttonClearn.addEventListener('click', () => {
  inputClean()
  ulListClean()
  tasks=[]
  calkTasks()
})
