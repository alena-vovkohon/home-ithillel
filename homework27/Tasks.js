import Service from './Service.js'
import {USER_ID} from './constants.js'

export default class Tasks {

    #tasks = []
    #renderFn

    static instance
    static getInstance(renderFn) {
        if(!Tasks.instance){
            Tasks.instance = new Tasks();
            Tasks.instance.setRenderFn(renderFn)
        }
        return Tasks.instance;
  }
   
    constructor() {
        this.getInitalTask()
    }

    async getInitalTask() {
        let tasks = await Service.getInitalTask()
        this.#tasks = tasks
        this.rerender()
    }
    
    async add(title) {
        let task = await Service.createTask({
            title,
            completed: false,
            editetaple: false,
            userId: USER_ID,
       })
          this.#tasks.push({
            text: task.title,
            chacked: task.completed,
            editetaple: task.editetaple,
            id: task.id,
        });
        this.rerender()
    }

    async update(id, item) {
        let responce = await Service.ubdateTask(id, {
                title: item.text,   
                id: item.id,
                completed: item.chacked,
                editetaple: item.editetaple,
                userId: USER_ID
        })
        const index = this.findIndexById(id);
        this.#tasks[index] = responce;
        this.rerender();
    }

    async delete(id) {
        await Service.deleteToDoTask(id)
        const index = this.findIndexById(id);
        this.#tasks.splice(index, 1);
        this.rerender();
    }

    findById(id) {
        return this.#tasks.find(item => item.id === id)
    }

    findIndexById(id) {
        return this.#tasks.findIndex(item => item.id === id)  
    }

    clearnAllTasks() {
        this.#tasks = []
        this.rerender()
    }

    filter(value) {
        let resaltFilter = this.#tasks.filter(item => item.text.toLowerCase().includes(value.toLowerCase()))
        this.#tasks = resaltFilter
        
        this.rerender()   
    }

    sortAscend() {
        this.#tasks = this.#tasks.sort((a, b) => a.id > b.id ? 1 : -1)
        this.rerender() 
    }

    sortDecrease() {
        this.#tasks = this.#tasks.sort((a, b) => a.id < b.id ? 1 : -1)
        this.rerender()   
    }

    infoItem(id) {
        Service.getTask(Number(id))
    }
    
    getTasks() {
        return  this.#tasks
    }

    setRenderFn(renderFn) {
        this.#renderFn = renderFn;
    }

    rerender() {
        this.#renderFn()
    }

}