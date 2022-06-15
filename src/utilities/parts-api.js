import { getToken } from "./users-service";

const BASE_URL = '/api/parts'

export function getParts() {
    return fetch(`${BASE_URL}`, getOptionsGet()).then(res => res.json())
}

export function getById(id) {
    const options = getOptionsGet()
    return fetch(`${BASE_URL}/${id}`, options).then(res => res.json())
}



/*-- Helper Functions --*/

function getOptionsGet() {
    return {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    }
}