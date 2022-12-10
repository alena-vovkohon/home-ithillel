

class ListItem {
    constructor(item, tasks) {
        // this.item = item
        this.text = item.text
        this.chacked = item.chacked
        this.editetaple = item.editetaple
        this.id = item.id

        this.tasks = tasks

    }

    checkedTasks(e) {
        console.log('checkedTasks')
        console.log(this.chacked)
        // let itemLi = this.tasks.findById(this.id)
        // console.log('itemLi', itemLi)
        
 
    }

    editeHandlerItem() {
         console.log('editeHandlerItem')
        // let itemLi = this.tasks.findById(this.id)
        // this.tasks.update(this.id, {...itemLi, editetaple: true})
    }

    remuveHandlerItem() {
        console.log('remuveHandlerItem')
        this.tasks.delete(this.id)
    }

    siveEditeble(e) {
     console.log('siveEditeble')
    // let id = e.target.parentElement.id
    // let itemLi = tasks.find(item => item.id.toString() === id)
    // itemLi.text = e.target.previousSibling.value
   
    // itemLi.editetaple = false
    // itemLi.chacked = false
}

    cancelEditeble(e) {
        console.log('cancelEditeble')
    // let id = e.target.parentElement.id
    // let itemLi = tasks.find(item => item.id.toString() === id)
    // itemLi.editetaple = false
   
}

    renderReader() {
        let li = document.createElement('li')
        li.classList.add('list-item') 
        li.setAttribute('id', this.id)

        let inputCheckbox = document.createElement('input')
        inputCheckbox.classList.add('list__checkbox')
        inputCheckbox.type ='checkbox'
            
        let span = document.createElement('span')
        span.classList.add('list__span')
        span.innerText = this.text
        li.append(inputCheckbox, span)  
            
        let buttonEdite = document.createElement('button')
        buttonEdite.classList.add('edite-button')
        buttonEdite.innerText = 'Edite'
        let buttonRemuve = document.createElement('button')
        buttonRemuve.classList.add('remuve-button')
        buttonRemuve.innerHTML='Remuve'
        li.append(buttonEdite, buttonRemuve)

        if (this.chacked) {
        inputCheckbox.checked = true
        span.classList.add('checked')      
        }

        buttonEdite.addEventListener('click', this.editeHandlerItem)
        buttonRemuve.addEventListener('click', this.remuveHandlerItem)
        inputCheckbox.addEventListener('click', this.checkedTasks)

       

        return li
    }

    renderEditetaple() {
        let li = document.createElement('li')
        li.classList.add('list-item') 
        li.setAttribute('id', this.id)
            
        let input = document.createElement('input')
        input.classList.add('list__input')
        input.value = this.text
        li.appendChild(input)  
            
        let buttonSave = document.createElement('button')
        buttonSave.classList.add('seve-button')
        buttonSave.innerText = 'Save'
        let buttonCancel = document.createElement('button')
        buttonCancel.classList.add('cansel-button')
        buttonCancel.innerHTML='Cancel'
        li.append(buttonSave, buttonCancel)
        
        buttonSave.addEventListener('click', this.siveEditeble)
        buttonCancel.addEventListener('click', this.cancelEditeble)
        // input.addEventListener('input', this.handleText)

    
    return li
    }

    render() {
        // console.log(this.item)
         if (this.editetaple){
            return this.renderEditetaple()
        } else {
            return this.renderReader()
        }
      
    }

       
}

export default ListItem;