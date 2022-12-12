import Todolist from "./Todolist.js"
import Tasks from "./Tasks.js"

class Controller {
    input
    inputSearch
    constructor() {
        this.tasks = Tasks.getInstance()
        this.valid =''
    }

    validInput(value) {
        return /^[a-zA-Z0-9]+$/.test(value)
    }
    
    createHtmlItem() {
        if (this.validInput(this.input.value)) {
                this.tasks.add(this.input.value)
                } else {
                    alert('use only standard alphanumerics')
                }
        this.input.value = ''
        console.log('Controller', this.tasks)
        new Todolist('container').render()
    } 

    clearnAll() {
        this.tasks.clearnAllTasks()
    }

    filterText(e) {
        this.value = e.target.value
    }

    findText() {
        this.tasks.filter(this.value)
    }

    sortAscend() {
        this.tasks.sortAscend()
    }

    sortDecrease() {
        this.tasks.sortDecrease()
    }

    render() {
        this.input = document.createElement('input')    
        this.input.classList.add('create-input')
        this.input.addEventListener('input', this.validInput)

        let buttonAdd = document.createElement('button')
        buttonAdd.classList.add('add-button')
        buttonAdd.innerText = 'Add'

        let buttonClearnAll = document.createElement('button')
        buttonClearnAll.classList.add('clearn-button')
        buttonClearnAll.innerHTML = 'Clearn All'

        let divSearch = document.createElement('div')
        this.inputSearch = document.createElement('input')    
        this.inputSearch.classList.add('search-input')
        this.inputSearch.setAttribute('placeholder', 'search')
        let buttonFilter = document.createElement('button')
        buttonFilter.classList.add('filter-button')
        buttonFilter.innerHTML = 'Find'
        divSearch.append(this.inputSearch, buttonFilter)

        let divSort = document.createElement('div')
        let buttonSortAscend = document.createElement('button')
        buttonSortAscend.classList.add('ascend-button')
        buttonSortAscend.innerText = 'Ascend'
        let buttonSortDecrease = document.createElement('button')
        buttonSortDecrease.classList.add('decrease-button')
        buttonSortDecrease.innerHTML='Decrease'
        divSort.append(buttonSortAscend,buttonSortDecrease)

        buttonAdd.addEventListener('click', this.createHtmlItem.bind(this))
        buttonClearnAll.addEventListener('click', this.clearnAll.bind(this))
        this.inputSearch.addEventListener('input', this.filterText.bind(this))
        buttonFilter.addEventListener('click', this.findText.bind(this))
        buttonSortAscend.addEventListener('click', this.sortAscend.bind(this))
        buttonSortDecrease.addEventListener('click', this.sortDecrease.bind(this))
       
        return [this.input,
                buttonAdd,
                buttonClearnAll,
                divSearch,
                divSort
                ]
    }

}

export default Controller;