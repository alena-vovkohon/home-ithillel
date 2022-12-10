import Controller from "./Controller.js"
import List from './List.js'
import Tasks from "./Tasks.js"

class Todolist {
   
    constructor(name, ) {
        this.name = name
        // this.tasks = tasks
        this.tasks = new Tasks(this.render.bind(this))
        console.log('todo cont', this.tasks)
        
    }


    render() {
        // console.log('Todolist', this.tasks)
        let container = document.querySelector(`#${this.name}`)
        container.innerHTML = ''
        const controller = new Controller(this.tasks)
        console.log(controller)

        let list = new List(this.tasks)
        console.log(list)
        container.append(...controller.render(), list.render())

        return container
    }
}

export default Todolist;