

// import slice
import { createSlice } from "@reduxjs/toolkit";
import profileArray from "../profile/profile.json";


// create the slice
const profileSlice = createSlice({
    name: "profile", // name the reducer
    initialState: profileArray, // initialize the reducer's state
    //add reducers for functions
    reducers: {
        // reducer function to update profile
            updateProfile(state, action) {
                console.log(state[0].firstName)
            return  state.map(() => action.payload);

            },
    },
});
// export reducer function
export const {updateProfile} = profileSlice.actions; // export reducer function
export default profileSlice.reducer; // export the reducer

