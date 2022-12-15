import Controller from "./Controller.js"
import List from './List.js'
import Tasks from "./Tasks.js"

class Todolist {

    static instance ={}

    static  getInstance(name) {
        if (!Todolist.instance[name]) {
            const instanceTodolist = new Todolist(name)
            const tasks = Tasks.getInstance(instanceTodolist.render.bind(instanceTodolist))
            
            instanceTodolist.setTasks(tasks)
            Todolist.instance[name] = instanceTodolist;
        }
        return Todolist.instance[name];
  }
   
    constructor(name) {
        this.name = name  
    }

    setTasks(tasks) {
        this.tasks = tasks
    }

    render() {
        let container = document.querySelector(`#${this.name}`)
        container.innerHTML = ''
        let controller = new Controller()
        let list = new List()
        container.append(...controller.render(), list.render())

        return container
    }
}

export default Todolist;