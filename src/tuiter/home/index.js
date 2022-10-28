import React from "react";
import PostList from "../post-list";
import "./index.css";

const HomeComponent = () => {
    return(
        <>
            <div className="position-relative mb-2">
                <img src="/img/spacex.jpeg" className="w-100"/>
                <h1 className="position-absolute wd-nudge-up text-white">
                    SpaceX Starship</h1>
            </div>
            <PostList/>
        </>
    );
};
export default HomeComponent;