import { getToken } from "./users-service";

const BASE_URL = '/api/community'

export function getShared() {
    return fetch(`${BASE_URL}/shared`, getOptionsGet()).then((res) => res.json())
}

export function getUsers() {
    return fetch(`${BASE_URL}/users`, getOptionsGet()).then((res) => res.json())
}




/*-- Helper Functions --*/

function getOptionsGet() {
    return {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    }
}