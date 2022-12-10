// import {validation} from './validation.js'

import List from "./List.js"
import Todolist from "./Todolist.js"
import ListItem from "./ListItem.js"

class Controller {
    input
    inputSearch
    constructor(tasks) {
        this.tasks = tasks
        console.log(tasks)
    }

    validInput(value) {
        return /^[a-zA-Z0-9]+$/.test(value)
    }
    
    // createHtmlItem() {
    //     // if (this.input.value)
    //     if (this.validInput(this.input.value)) {
    //             console.log(this.tasks)
    //                 this.tasks.getTasks().push({
    //                         text: this.input.value,
    //                         chacked: false,
    //                         editetaple: false,
    //                         id: new Date().toString()
    //             })
    //         } else {
    //             console.log('validInput')
    //             alert('use only standard alphanumerics')
    //             // validation('use only standard alphanumerics')
    //             // this.infoText() 
    //         }
    //     this.input.value = ''
    //     console.log('Controller', this.tasks)
    //     return this.tasks
    // } 

        createHtmlItem() {
        // if (this.input.value)
                console.log(this.tasks)
                    this.tasks.getTasks().push({
                            text: this.input.value,
                            chacked: false,
                            editetaple: false,
                            id: new Date().toString()
                })
        this.input.value = ''
        console.log('Controller', this.tasks)
        return this.tasks
    } 

    clearnAll() {
        this.tasks = []
        container.innerHTML = ''
        new Todolist('container', this.tasks).render()
    }

    filterText(e) {
        let valueInput = e.target.value
        console.log(valueInput)
        let resaltFilter = this.tasks.filter(item => item.text.toLowerCase().includes(valueInput.toLowerCase()))

        console.log(resaltFilter)
        console.log(this.inputSearch)

}

    sortAscend() {
        console.log('sortAscend')
        this.tasks = this.tasks.sort((a, b) => a.id > b.id ? 1 : -1)
        container.innerHTML = ''
        new Todolist('container', this.tasks).render()
        console.log(this.tasks)
}

    sortDecrease() {
     console.log('sortDecrease')
    this.tasks = this.tasks.sort((a, b) => a.id < b.id ? 1 : -1)
    // renderingList()
        container.innerHTML = ''
        new Todolist('container',this.tasks).render()
        console.log(this.tasks)
    
}
    render() {
        // console.log('controller rend')
        this.input = document.createElement('input')    
        this.input.classList.add('create-input')
        this.input.addEventListener('input', this.validInput)

        let buttonAdd = document.createElement('button')
        buttonAdd.classList.add('add-button')
        buttonAdd.innerText = 'Add'

        let buttonClearnAll = document.createElement('button')
        buttonClearnAll.classList.add('clearn-button')
        buttonClearnAll.innerHTML = 'Clearn All'

        this.inputSearch = document.createElement('input')    
        this.inputSearch.classList.add('search-input')
        this.inputSearch.setAttribute('placeholder', 'search')

        let buttonSortAscend = document.createElement('button')
        buttonSortAscend.classList.add('ascend-button')
        buttonSortAscend.innerText = 'Ascend'
        let buttonSortDecrease = document.createElement('button')
        buttonSortDecrease.classList.add('decrease-button')
        buttonSortDecrease.innerHTML='Decrease'
        
        buttonAdd.addEventListener('click', this.createHtmlItem.bind(this))
        buttonClearnAll.addEventListener('click', this.clearnAll.bind(this))
        this.inputSearch.addEventListener('input', this.filterText.bind(this))
        buttonSortAscend.addEventListener('click', this.sortAscend.bind(this))
        buttonSortDecrease.addEventListener('click', this.sortDecrease.bind(this))
       
        return [this.input,
                buttonAdd,
                buttonClearnAll,
                this.inputSearch,
                buttonSortAscend,
                buttonSortDecrease]
    }

}

export default Controller;