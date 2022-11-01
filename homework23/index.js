let headSection = document.querySelector('.head__section')
let inputCreate = document.querySelector('.create')
let buttonAdd = document.querySelector('.add')
let buttonClearn = document.querySelector('.clearn')
let informationDiv = document.querySelector('.information')
let background = document.querySelector('img')
let ulListinfo = document.querySelector('.listinfo__list')
let buttonSave = document.querySelector('.save')
  

inputCreate.addEventListener('focus', () => {
  informationDiv.classList.add('active')
  })

inputCreate.addEventListener('blur', () => {
    informationDiv.classList.remove('active')
})

/////Завдання ToDoList
let tasks = []
let todoItemElems = []
let inputItemElems =[]
let textItemElems = []

function Task(taskDescription) {
  this.taskDescription = taskDescription
}

const createList = (task, index) => {
  let li = document.createElement('li')
  li.classList.add('listinfo__task')
  li.setAttribute('id', index)

  let divBlock = document.createElement('div')
  divBlock.classList.add('listinfo__block')
  let p = document.createElement('p')
  p.classList.add('listinfo__text', 'text-task')
  p.setAttribute('id', index)
  let input = document.createElement('input')
  input.classList.add('head__input', 'task-edite')
  input.setAttribute('id', index)

  let divEdit = document.createElement('div')
  divEdit.classList.add('button-block')
  let divRemove = document.createElement('div')
  divRemove.classList.add('head__add')
  let buttonEdite = document.createElement('button')
  buttonEdite.classList.add('head__button', 'edit')
  buttonEdite.setAttribute('type', 'button')
  let buttonRemove = document.createElement('button')
  buttonRemove.classList.add('head__button', 'remove')
  buttonRemove.setAttribute('type', 'button')

  ulListinfo.appendChild(li)
  li.appendChild(divBlock)
  divBlock.appendChild(p)
  p.innerHTML = task.taskDescription
  console.log('inputCreate', inputCreate.value)
  divBlock.appendChild(input)

  li.appendChild(divEdit)
  divEdit.appendChild(buttonEdite)
  buttonEdite.innerHTML = 'Edit'

  li.appendChild(divRemove)
  divRemove.appendChild(buttonRemove)
  buttonRemove.innerHTML = 'Remove'
  
  let inputTaskEdite = document.querySelector('.task-edite')
  let textTaskEdite = document.querySelector('.text-task')
  
buttonEdite.addEventListener('click', () => {
editeTask(index)
  })

// buttonSave.addEventListener('click', () => {
//    saveInput(index)
//   })
 
  
  buttonRemove.addEventListener('click', () => {
    // ulListinfo.removeChild(li)
    deleteTask(index)
  })
  
}

 

const inputClean = () => {
  inputCreate.value = ''
}

const fillHtmlList = (arr) => {
  ulListinfo.innerHTML = ''
  if (arr.length !== 0) {
    arr.forEach((item, index) => {
      createList(item, index)
    })
    todoItemElems = document.querySelectorAll('.listinfo__task')
    inputItemElems = document.querySelectorAll('.task-edite')
    textItemElems = document.querySelectorAll('.text-task')
  }
}
fillHtmlList(tasks)

const deleteTask = (index) => {
  ulListinfo.removeChild(todoItemElems[index])
  // todoItemElems[index].classList.add('delete')
  setTimeout(() => {
    tasks.splice(index, 1)
    fillHtmlList(tasks)
  }, 500)
}

const editeTask = (index) => {
  // console.log(inputItemElems[index])
  // console.log(textItemElems[index])
    inputItemElems[index].style.display = "block";
    inputItemElems[index].value = textItemElems[index].innerHTML;
    textItemElems[index].style.visibility = "hidden";
  textItemElems[index].style.display = "none";
  

  console.log(ulListinfo.children[index])

  let buttonEdite=ulListinfo.children[index].querySelector('.edit')
  buttonEdite.classList.remove('edit')
  buttonEdite.classList.add('sive')
  console.log(buttonEdite)
  buttonEdite.innerHTML = 'Save'

  let buttonRemove=ulListinfo.children[index].querySelector('.remove')
  buttonRemove.classList.remove('remove')
  buttonRemove.classList.add('cancel')
  console.log(buttonRemove)
  buttonRemove.innerHTML = 'Cancel'
  

}

const saveInput = (index) => {
    console.log('click')
  // console.log('focus',inputItemElems[index])
  inputItemElems[index].style.display = "none";
  textItemElems[index].style.visibility = "visible";
  textItemElems[index].innerHTML = inputItemElems[index].value;
  textItemElems[index].style.display = "flex";
   let buttonEdite=ulListinfo.children[index].querySelector('.sive')
  buttonEdite.classList.remove('seve')
  buttonEdite.classList.add('edit')
  console.log(buttonEdite)
  buttonEdite.innerHTML = 'Edit'

  let buttonRemove=ulListinfo.children[index].querySelector('.cancel')
  buttonRemove.classList.remove('cancel')
  buttonRemove.classList.add('remove')
  console.log(buttonRemove)
  buttonRemove.innerHTML = 'Remove'
 
}


buttonAdd.addEventListener('click', () => {
  if (inputCreate.value) {
    let valueInput = inputCreate.value;
     tasks.push(new Task(valueInput))
    // taskAllLocalStorage()
    fillHtmlList(tasks)
    // filterTasks()
    // inputClean(createInput, checkboxCreate)

    // tasks.push(inputCreate.value)
    console.log('tasks', tasks)
    // createList()
    inputClean()
  }
  
})

buttonClearn.addEventListener('click', () => {
  inputClean()
})

// const calkTasks = () => {
//   activeTasks = tasks.length && tasks.filter((item) => item.completed == false)
//   let calk = activeTasks.length
//   if (calk !== 0) {
//     calkNumber.innerHTML = calk
//   } else {
//     calkNumber.innerHTML = '0'
//   }
// }
// calkTasks()
