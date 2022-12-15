import ListItem from './ListItem.js'
import Tasks from "./Tasks.js"

class List {
    constructor() {
        // this.tasks = tasks
        this.tasks = Tasks.getInstance()
    }

    render() {
        let ul = document.createElement('ul')
        ul.classList.add('list')
        // ul.innerHTML = ''
        // console.log('List', this.tasks.renderFn)
        // console.log('List', this.tasks.rerender)
        // console.log(this.tasks)
        let items = this.tasks.getTasks().map(item => new ListItem(item, this.tasks))
        let render = items.map(i => i.render())
        ul.append(...render)
        return ul

    }
}

export default List;