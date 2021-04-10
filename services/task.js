import axios from 'axios';
import connection from '../configuration/connection';

const TaskService = {
  create: (data) => {
    return new Promise((resolve, reject) => {
      axios.post(connection.base_url + "/task", {
        date: data.date,
        description: data.description
      })
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error.reject)
        })
    })
  }
}
export default TaskService;