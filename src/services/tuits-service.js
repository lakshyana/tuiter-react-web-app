// import axios
import axios from 'axios';

// location of HTTP services
// const TUITS_API = 'http://localhost:4000/api/tuits';
// const TUITS_API = 'https://tuiter-node-server-app.herokuapp.com/api/tuits';
const API_BASE = process.env.REACT_APP_API_BASE;
const TUITS_API = `${API_BASE}/tuits`;

export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit)
    // await axios.post(TUITS_API, tuit).then
    return response.data;
}

// async tags this function as asynchronous
export const findTuits = async () => {

    // send HTTP GET request to TUITS_API
    const response = await axios.get(TUITS_API);

    // extract JSON from response from server
    const tuits = response.data;
    return tuits; // return tuits
}

export const deleteTuit = async (tid) => {
    const response = await axios // send HTTP DELETE request to server
        .delete(`${TUITS_API}/${tid}`) // append tuit's ID to URL
    return response.data // data contains response's status we'll ignore for now
}

export const updateTuit = async (tuit) => { // service function accepts tuit to send server
    const response = await axios // send HTTP PUT request appending tuit's ID
        .put(`${TUITS_API}/${tuit._id}`, tuit); // to URL, and embed tuit object in BODY
    return tuit; // return tuit update to update in reducer's state's store
}
