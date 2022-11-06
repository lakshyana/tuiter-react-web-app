import { createSlice } from "@reduxjs/toolkit";

// import tuits from '../post-summary-list/posts.json';
import tuits from "../tuits/tuits.json"



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
    initialState: tuits,
    //added to append new tuit
    reducers: {
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

