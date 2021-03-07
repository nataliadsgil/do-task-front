import axios from 'axios';
import connection from '../configuration/connection';

const UserService = {
    create: (data) => {
        return new Promise((resolve, reject) => {
            console.log('connection.base_url',connection.base_url);
            axios.post(connection.base_url + "/register",{
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
    }    
}
export default UserService;