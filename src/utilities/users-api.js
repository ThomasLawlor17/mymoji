const BASE_URL = '/api/users';

export function signup(userData) {
  console.log('DATA: ', userData)
  return sendRequest(`${BASE_URL}/signup`, 'POST', userData);
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

/*--- Helper Functions ---*/

async function sendRequest(url, method = 'GET', payload = null) {
  const options = { method };
  if (payload) {
    console.log(payload)
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify(payload);
    console.log('STRINGIFIED: ', options)
  }
  console.log(url)
  const res = await fetch(url, options);
  // res.ok will be false if the status code set to 4xx in the controller action
  if (res.ok) {
    console.log(res)
    return res.json();
  } 
  throw new Error(`This is bad... ${res.status}`);
}