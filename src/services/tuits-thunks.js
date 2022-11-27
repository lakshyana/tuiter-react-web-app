
// in previous steps reducers were used to keep track of the tuits, initialized from JSON files
// imported from within the reducers, but now we want to use data from the server instead

// Previous implementations used reducer functions to update the state of the tuits array
// by adding new tuits to the state, deleting tuits, and modifying tuits in a redux store.
// Now we need to replace this implementation with the HTTP services we implemented in the Node.js server

// import createAsyncTrunk
import {createAsyncThunk} from "@reduxjs/toolkit"

// import all exported functions as service
import * as service from "./tuits-service"

// create thunk for findTuits
export const findTuitsThunk = createAsyncThunk(
    'tuits/findTuits', async () => // give unique name, thunk invokes
    await service.findTuits() // service function. Returned data goes in
    )
    // redux action's payload

export const deleteTuitThunk = createAsyncThunk(
    'tuits/deleteTuit', // unique thunk identifier
    async (tuitId) => { // wraps
        await service.deleteTuit(tuitId) // service method
        return tuitId // return tuit ID so we can remove tuit
    }) // from reducer's store

export const createTuitThunk = createAsyncThunk(
    'tuits/createTuit',
    async (newTuit) => {
        await service.createTuit(newTuit)
            .then(window.location.reload(false)) //RELOAD PAGE FROM BROWSER CACHE
        return newTuit
    })

export const updateTuitThunk = // create update tuit thunk
    createAsyncThunk(
        'tuits/updateTuit', // unique identifier
        async (tuit) => // accepts updated tuit
            await service.updateTuit(tuit) // sends updated tuit to server with service
    )
