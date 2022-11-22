import React from "react";

// import PostList from "../post-list";
import TuitList from "../tuits/TuitsList";

//What's happening to add new post
import WhatsHappening from "./whats-happening";

import "./index.css";

const HomeComponent = () => {
    return(
        <>
            <h4>Home</h4>
            <WhatsHappening/>
            <TuitList/>

        </>
    );
};
export default HomeComponent;

// <PostList/>