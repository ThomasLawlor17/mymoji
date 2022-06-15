import { getToken } from "./users-service";

const BASE_URL = '/api/emojis'




export function getEmoji() {
    return fetch(`${BASE_URL}/layers`, getOptionsGet()).then(res => res.json())
}

export function addPartToLayers(partId) {
    return fetch(`${BASE_URL}/layers/part/${partId}`, getOptionsPost()).then(res => res.json())
}

export function removeLayer(partId) {
    return fetch(`${BASE_URL}/layers/${partId}/remove`, getOptionsDelete()).then(res => res.json())
}

export function saveEmoji(emojiId) {
    return fetch(`${BASE_URL}/save`, getOptionsPost()).then(res => res.json())
}

export function getProfileEmojis() {
    return fetch(`${BASE_URL}/user`, getOptionsGet()).then(res => res.json())
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

function getOptionsDelete() {
    return {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getToken()}`
        }
    }
}