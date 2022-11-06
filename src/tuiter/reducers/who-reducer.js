// import slice
import { createSlice } from "@reduxjs/toolkit";

// import data from JSON file
import whoArray from "../who-to-follow-list/who.json";


// create the slice
const whoSlice = createSlice({
    name: "who", // name the reducer
    initialState: whoArray // initialize the reducer's state
});

export default whoSlice.reducer; // export the reducer







