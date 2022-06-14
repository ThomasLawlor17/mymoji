import { getToken } from "./users-service";

const BASE_URL = '/api/parts'

export function getAll() {
    const options = getOptionsGet()
    console.log('OPTIONS: ', options)
    return fetch(`/api/parts`, options).then(res => res.json())
}

export function getById(id) {
    const options = getOptionsGet()
    return fetch(`${BASE_URL}/${id}`, options).then(res => res.json())
}



/*-- Helper Functions --*/

function getOptionsGet() {
    console.log(getToken())
    return {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    }
}