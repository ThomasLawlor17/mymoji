import { getToken } from "./users-service";

const BASE_URL = '/api/emojis'


export function getLayers() {
    return fetch(`${BASE_URL}/layers`, getOptionsGet()).then(res => res.json())
}

export function addPartToLayers(partId) {
    const options = getOptionsPost()
    return fetch(`${BASE_URL}/layers/part/${partId}`, options).then(res => res.json())
}






/*-- Helper Functions --*/

function getOptionsGet() {
    return {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    }
}

function getOptionsPost() {
    return {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getToken()}`
        }
    }
}