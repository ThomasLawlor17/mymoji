import { getToken } from "./users-service";

const BASE_URL = "/api/emojis";

export function getEmoji() {
	return fetch(`${BASE_URL}/layers`, getOptionsGet()).then((res) => res.json());
}

export function addPartToLayers(partId) {
	return fetch(`${BASE_URL}/layers/part/${partId}`, getOptionsPost()).then(
		(res) => res.json()
	);
}

export function removeLayer(partId) {
	return fetch(`${BASE_URL}/layers/${partId}/remove`, getOptionsDelete()).then(
		(res) => res.json()
	);
}

export function saveEmoji(name) {
	return sendRequest(`${BASE_URL}/save`, "PUT", name);
}

export function getProfileEmojis() {
	return fetch(`${BASE_URL}/user`, getOptionsGet()).then((res) => res.json());
}

export function shareEmoji() {
	return fetch(`${BASE_URL}/share`, getOptionsPut()).then((res) => res.json());
}

export function changeName(name) {
	return sendRequest(`${BASE_URL}/name`, "PUT", name);
}

export function reorderLayerUp(partId) {
	return fetch(`${BASE_URL}/layers/${partId}/order/up`, getOptionsPut()).then(
		(res) => res.json()
	);
}

export function reorderLayerDown(partId) {
	return fetch(`${BASE_URL}/layers/${partId}/order/down`, getOptionsPut()).then(
		(res) => res.json()
	);
}

/*-- Helper Functions --*/

function getOptionsGet() {
	return {
		headers: {
			Authorization: `Bearer ${getToken()}`,
		},
	};
}

function getOptionsPost() {
	return {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${getToken()}`,
		},
	};
}

function getOptionsPut() {
	return {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${getToken()}`,
		},
	};
}

function getOptionsDelete() {
	return {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${getToken()}`,
		},
	};
}

async function sendRequest(url, method = "GET", payload = null) {
	// Fetch takes an optional options object as the 2nd argument
	// used to include a data payload, set headers, etc.
	const options = { method };
	if (payload) {
		options.headers = {
			"Content-Type": "application/json",
			Authorization: `Bearer ${getToken()}`,
		};
		options.body = JSON.stringify(payload);
	}
	const res = await fetch(url, options);
	// res.ok will be false if the status code set to 4xx in the controller action
	if (res.ok) return res.json();
	throw new Error("Bad Request");
}
