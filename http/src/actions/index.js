import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';

export const getFriends = () => {
    // Add the code for this action
    
    const apiUrl = "http://localhost:5000/friends";
    const friendsRequest = axios.get(apiUrl);
    console.log('actions', friendsRequest);
    
    return {
        type: GET_FRIENDS,
        payload: friendsRequest,
    };
};

// enter redux-promise and axios

// http < is stateless
// Methods: 
// GET: client wants information from the server ( from the browser
// only use GET to talk to the server )
// POST: create a resourcec from the server
// PUT: modify info on server
// DELETE: removing data from server
// most operations are asynchronous so we need a Promise
// Promise: substitute fro callbacks

// const promise = new Promise();

// promise
// .then(function(results) {
//     //this means the proimse succeded
// })
// .catch(function(error) {
//     // handle that error
// })