const BASE_URL = "http://localhost:3030/contacts";
// const KEY = 'c989c5f6813aea0ca3cd48dd1eb3c42e';

const API = async function () {
    const response = await fetch(BASE_URL);
    return response.json();
}
export default API;