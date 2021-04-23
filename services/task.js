import axios from 'axios';
import connection from '../configuration/connection';
import { getCookie } from '../utils/manage-cookies';

const TaskService = {
  create: (data) => {
    return new Promise((resolve, reject) => {
      axios.post(connection.base_url + "/task", {
        date: data.date,
        description: data.description,
        token: getCookie('dotaskcookie')
      })
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error.reject)
        })
    })
  },
  update: (data) => {
    return new Promise((resolve, reject) => {
      axios.put(connection.base_url + "/task/" + data.id, {
        date: data.date,
        description: data.description,
        check: data.check ? data.check : false,
        token: getCookie('dotaskcookie')
      })
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error.reject)
        })
    })
  },
  list: () => {
    return new Promise((resolve, reject) => {
      axios.get(connection.base_url + "/task", {
        headers: {
          'x-access-token': getCookie('dotaskcookie')
        }
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