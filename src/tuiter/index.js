
// import Nav from "../nav";

import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import {Routes, Route} from "react-router";
import HomeComponent from "./home";
import ProfileComponent from "./profile"; //Profile component

// Additional imports for redux:

// import the reducer
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer"; // import the new tuits reducer
import profileReducer from "./reducers/profile-reducer"; //import the profile reducer

// import configureStore
import { configureStore } from '@reduxjs/toolkit';

// import the Provider component
import {Provider} from "react-redux";

//Edit profile component
import EditProfileComponent from "./edit-profile";

// configure the store
const store = configureStore(
    {reducer: {who: whoReducer,
            profile: profileReducer, //Add profile reducer
            tuitsData: tuitsReducer}}); // rename reducer property since now it's not just an array



function Tuiter() {
    return (
        <Provider store={store}>
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar selected={"home"}/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6">
                <Routes>
                    <Route path="/explore" element={<ExploreComponent/>}/>
                    <Route path="/" element={<HomeComponent/>}/>
                    <Route path="/home" element={<HomeComponent/>}/>
                    <Route path="/profile" element={<ProfileComponent/>}/>
                    <Route path="/edit-profile" element={<EditProfileComponent/>}/>
                </Routes>
            </div>

            <div className="col-xxl-3 col-xl-4 col-lg-4 col-4 d-none d-lg-block col-5">
                <WhoToFollowList/>
            </div>
        </div>
        </Provider>
    );
}

export default Tuiter