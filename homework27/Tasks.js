

export default class Tasks {

    #tasks

    constructor(renderFn) {
        this.#tasks = [{
        text: '11111',
        chacked: false,
        editetaple: false,
        id: new Date()+1
    },{
        text: '222222',
        chacked: false,
        editetaple: true,
        id: new Date()+2
    },{
        text: '33333',
        chacked: true,
        editetaple: false,
        id: new Date()+3
    },{
        text: '44444',
        chacked: false,
        editetaple: true,
        id: new Date()+4
            }]
        this.renderFn =renderFn
    }

    add(item) {
        this.#tasks.push(item)
        console.log('push',  this.#tasks)
        this.rerender()
    }

    delete(id){
        const index = this.findIndexById(id);

        this.#tasks.splice(index, 1);

        this.rerender();
    }

    findById(id) {
        return this.#tasks.find(item => item.id.toString() === id)
    }

    findIndexById(id) {
        return this.#tasks.findIndex(item => item.id.toString() === id)
        
    }
    
    getTasks() {
        return this.#tasks
    }

    rerender() {
         this.renderFn()
    }

}