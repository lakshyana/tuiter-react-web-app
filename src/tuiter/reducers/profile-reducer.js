// import slice
import { createSlice } from "@reduxjs/toolkit";

// import data from JSON file
import profileArray from "../profile/profile.json";


// create the slice
const profileSlice = createSlice({
    name: "profile", // name the reducer
    initialState: profileArray // initialize the reducer's state
});

export default profileSlice.reducer; // export the reducer