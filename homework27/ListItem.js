import Tasks from "./Tasks.js"

class ListItem {
    constructor(item) {
        this.li = document.createElement('li')
       
        this.text = item.text
        this.chacked = item.chacked
        this.id = item.id
        this.editetaple =false

        this.tasks = Tasks.getInstance()
    }

    checkedTasks() {
        let itemLi = this.tasks.findById(this.id)
        this.tasks.update(this.id, {...itemLi, chacked: !itemLi.chacked})
    }

    editeHandlerItem() {
        this.editetaple = true
        this.render()
    }

    remuveHandlerItem() {
        this.tasks.delete(this.id)
    }

    handleText(e) {
        this.text = e.target.value
    }

    siveEditeble() {
        let itemLi = this.tasks.findById(this.id)
        this.tasks.update(this.id, { ...itemLi, text: this.text, chacked: false }) 
        this.editetaple = false
    }

    cancelEditeble() {
        let itemLi = this.tasks.findById(this.id)
        this.tasks.update(this.id, itemLi)
        this.editetaple = false
    }

    infoItemElement(e) {
        let id = e.target.parentElement.id
        this.tasks.infoItem(id)
    }

    renderReader() {
        this.li.classList.add('list-item') 
        this.li.setAttribute('id', this.id)

        let inputCheckbox = document.createElement('input')
        inputCheckbox.classList.add('list__checkbox')
        inputCheckbox.type ='checkbox'
            
        let span = document.createElement('span')
        span.classList.add('list__span')
        span.innerText = this.text 
            
        let buttonEdite = document.createElement('button')
        buttonEdite.classList.add('edite-button')
        buttonEdite.innerText = 'Edite'
        let buttonRemuve = document.createElement('button')
        buttonRemuve.classList.add('remuve-button')
        buttonRemuve.innerHTML='Remuve'

        if (this.chacked) {
        inputCheckbox.checked = true
        span.classList.add('checked')      
        }

        buttonEdite.addEventListener('click', this.editeHandlerItem.bind(this))
        buttonRemuve.addEventListener('click', this.remuveHandlerItem.bind(this))
        inputCheckbox.addEventListener('click', this.checkedTasks.bind(this))
        span.addEventListener('click', this.infoItemElement.bind(this))

        return [inputCheckbox, span, buttonEdite, buttonRemuve]
    }

    renderEditetaple() {
        this.li.classList.add('list-item') 
        this.li.setAttribute('id', this.id)
            
        let input = document.createElement('input')
        input.classList.add('list__input')
        input.value = this.text 
            
        let buttonSave = document.createElement('button')
        buttonSave.classList.add('seve-button')
        buttonSave.innerText = 'Save'
        let buttonCancel = document.createElement('button')
        buttonCancel.classList.add('cansel-button')
        buttonCancel.innerHTML='Cancel'
        
        buttonSave.addEventListener('click', this.siveEditeble.bind(this))
        buttonCancel.addEventListener('click', this.cancelEditeble.bind(this))
        input.addEventListener('input', this.handleText.bind(this))
        input.addEventListener('click', this.infoItemElement.bind(this))

         return [input, buttonSave, buttonCancel]
    }

    render() {
        this.li.innerHTML = ''
        if (this.editetaple) {
            this.li.append(...this.renderEditetaple())
        } else {
            this.li.append(...this.renderReader())
        } 
        return this.li
    }      
}

export default ListItem;