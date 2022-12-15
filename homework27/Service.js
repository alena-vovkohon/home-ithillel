import {cookedTask} from './utills.js'
import {USER_ID, API_URL} from './constants.js'


class Service {

    static async getInitalTask() {
        try{
            const tasks = await fetch(`${API_URL}users/${USER_ID}/todos`)
            const json = await tasks.json()
            return json.map(cookedTask)
        } catch (e) {
            console.error(e)
        }   
    }

    static async createTask(item) {
        try {
            let task = await fetch(`${API_URL}todos`, {
                method: 'POST',
                body: JSON.stringify(item),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            if (!task.ok) {
                 throw new Error(task.status)
            }  
            let json = await task.json() 
            return json 
        } catch (e) {
            console.error(e)
        }   
    }

    static async deleteToDoTask(id) {
         try {
            let task = await fetch(`${API_URL}todos/${id}`, {
                method: 'DELETE',
            })
            if (!task.ok) {
                 throw new Error(task.status)
            }  
        } catch (e) {
            console.error(e)
        }
    } 
    
    static async ubdateTask(id, item) { 
          try {
            let task = await fetch(`${API_URL}todos/${id}`, {
                method: 'PUT',
                body: JSON.stringify(item),
                headers: {'Content-type': 'application/json; charset=UTF-8',},
            })
            if (!task.ok) {
                 throw new Error(task.status)
            }
            const json = await task.json()
            return cookedTask(json)
        } catch (e) {
            console.error(e)
        }
    }

    static async getTask(id) {
        try{
            const task = await fetch(`${API_URL}todos/${id}`)
            if (!task.ok) {
                 throw new Error(task.status)
            } 
            const json = await task.json()
            console.log('json', json)
        } catch (e) {
            console.error(e)
        }
    }

}

export default Service