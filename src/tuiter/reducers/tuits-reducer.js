import { createSlice } from "@reduxjs/toolkit";

// import tuits from '../post-summary-list/posts.json';
import tuits from "../tuits/tuits.json"

// import the thunks
import {findTuitsThunk, deleteTuitThunk, createTuitThunk}
    from "../../services/tuits-thunks";

// initial state has
const initialState = {
    tuits: [], // no tuits
    loading: false // loading flag to display spinner
}


// create an object that represents the currently
// logged in user which contains profile information
// such as username, their avatar logo, and handle.
// Later this will come from users login in
const currentUser = {
    "userName": "NASA",
    "handle": "nasa",
    "image": "nasa.png",
};

// create a template tuit object with some default
// values and copy over the fields userName, handle and
// image from the currentUser
const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}


// add createTuit reducer function which appends
// the new tuit in the payload at the beginning of the
// array of tuits contained in the state. Also copy
// all fields from templateTuit and initialize
// the unique identifier with a timestamp

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState,       // same as "initialState": initialState
    // initialState: tuits,
    extraReducers: { // define asynchronous reducers
        [findTuitsThunk.pending]: // if request is not yet fulfilled …
            (state) => {
                state.loading = true // set loading true so UI can display spinner
                state.tuits = [] // empty tuits since we are still fetching them
            },
        [findTuitsThunk.fulfilled]: // when we get response, request is fulfilled
            (state, { payload }) => { // we extract/destruct payload from action object
                state.loading = false // turn off loading flag since we have the data
                state.tuits = payload // payload has tuits from server and update redux state
            },
        [findTuitsThunk.rejected]: // if request times out, or responds with error
            (state) => {
                state.loading = false // reset loading flag, maybe use another flag to report error
            },

        [deleteTuitThunk.fulfilled] : // handle successful response
            (state, { payload }) => { // server response successful
                state.loading = false // payload from action contains tuit ID to remove
                state.tuits = state.tuits // turn off loading flag
                    .filter(t => t._id !== payload) // filter out tuit whose ID matches tuit to remove
            }, // we're ignoring pending and rejected thunks

        [createTuitThunk.fulfilled]: // when server responds
            (state, { payload }) => { // payload contains new tuit
                state.loading = false // clear loading flag
                state.tuits.push(payload) // append new tuit to tuits array
                // we're ignoring pending and rejected thunks
            },
        [updateTuitThunk.fulfilled]:  // when server update is done
            (state, { payload }) => { // payload contains updated tuit
                state.loading = false // clear loading flag
                const tuitNdx = state.tuits // find index of updated tuit in array
                    .findIndex((t) => t._id === payload._id)
                state.tuits[tuitNdx] = { // merge old tuit with updated tuit
                    ...state.tuits[tuitNdx],
                    ...payload
                }
            }



    },

    //added to append new tuit
    reducers: { // we're not going to use the old reducers anymore
        // reducer function to delete
        deleteTuit(state, action) {
            const index = state // tuit looks up index of tuit
                .findIndex(tuit => // from state comparing each tuit's
                    tuit._id === action.payload);  // ID with action's payload, then
            state.splice(index, 1); // splices tuit from state
        },
        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        }
    }
});
// export reducer function
export const {createTuit, deleteTuit} = tuitsSlice.actions; // export reducer function
export default tuitsSlice.reducer;

