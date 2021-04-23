import axios from 'axios';
import connection from '../configuration/connection';
import { setCookie, getCookie } from '../utils/manage-cookies';
export let userName = '';
const UserService = {
    create: (data) => {
        return new Promise((resolve, reject) => {
            console.log('connection.base_url', connection.base_url);
            axios.post(connection.base_url + "/register", {
                name: data.name,
                email: data.email,
                password: data.password
            })
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    reject(error.reject)
                })
        })
    },
    getUser: (data) => {
        return new Promise((resolve, reject) => {
            axios.get(connection.base_url + '/user', {
                headers: {
                    'x-access-token': getCookie('dotaskcookie')
                }
            })
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    //console.log(error.response);
                    if (error.response) {
                        reject({
                            message: error.response.data
                        })
                    }
                })
        })
    },
    login: (data) => {
        return new Promise((resolve, reject) => {
            axios.post(connection.base_url + '/authenticate', {
                email: data.email,
                password: data.password
            })
                .then(response => {
                    if (response.status === 200) {
                        userName = response.data.user.userName;
                        setCookie('dotaskcookie', response.data.user.token, 3);
                    }
                    resolve(response)
                })
                .catch(error => {
                    //console.log(error.response);
                    if (error.response) {
                        reject({
                            message: error.response.data
                        })
                    }
                })
        })
    }
}
export default UserService;