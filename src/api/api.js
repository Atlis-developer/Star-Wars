import * as axios from 'axios';

const instanse = axios.create({
    baseURL: 'https://swapi.dev/api/',
})

export const contentAPI = {

    getUsers() {
        return instanse.get(`people/`).
            then(response => {
                return response
            })
    }
}

