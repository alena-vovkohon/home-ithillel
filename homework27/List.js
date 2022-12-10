import ListItem from './ListItem.js'

class List {
    constructor(tasks) {
    this.tasks = tasks
    }

    render() {
        let ul = document.createElement('ul')
        ul.classList.add('list')
        // console.log('List', this.tasks.renderFn)
        // console.log('List', this.tasks.rerender)
        console.log(this.tasks)
        let items = this.tasks.getTasks().map(item => new ListItem(item, this.tasks))
        let render = items.map(i => i.render())
        ul.append(...render)
        return ul

    }
}

export default List;