
import "../../vendors/bootstrap/css/bootstrap.min.css"
import "../../vendors/fontawesome/css/all.min.css";
import "../../index.css"

import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = (selected) => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    // const active = paths.length === 2 ? paths[2] : selected ;
    // const active = paths[2];
    const active = paths.length === 3 ? paths[2] : selected ;//select default option otherwise

    console.log("path name: ", pathname)
    console.log("paths length: ", paths.length)
    console.log("selected: ", selected)
    console.log("path name split result: ", pathname.split("/"))
    console.log("test active condition: ", pathname.includes("/") && paths.length === 2)

    console.log("paths: " + paths)

    console.log("active: " + active)

    return (
        <div className="list-group">
            <a className="list-group-item">
                <i className="fab fa-twitter"></i>
                <span className={"d-none d-xl-inline"}>Tuiter</span>
            </a>

            <Link to="/tuiter/home" className={`list-group-item ${active === 'home' || active==='' ?'active':''}`}>
                <i className="fa-solid fa-house mx-2"></i>
                <span className={"d-none d-xl-inline"}>Home</span>
            </Link>

            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
                <i className="fa-solid fa-hashtag mx-2"></i>
                <span className={"d-none d-xl-inline"}>Explore</span>
            </Link>

            <Link to="/labs" className="list-group-item">
                <i className="fa-solid fa-book mx-2"></i>
                <span className={"d-none d-xl-inline"}>Labs</span>
            </Link>

            <a className={`list-group-item ${active === 'notifications'?'active':''}`}>
                <i className="fa-solid fa-bell mx-2"></i>
                <span className={"d-none d-xl-inline"}>Notifications</span>
            </a>

            <a className={`list-group-item ${active === 'messages'?'active':''}`}>
                <i className="fa-solid fa-envelope mx-2"></i>
                <span className={"d-none d-xl-inline"}>Messages</span>
            </a>

            <a className={`list-group-item ${active === 'bookmarks'?'active':''}`}>
                <i className="fa-solid fa-bookmark mx-2"></i>
                <span className={"d-none d-xl-inline"}>Bookmarks</span>
            </a>

            <a className={`list-group-item ${active === 'lists'?'active':''}`}>
                <i className="fa-solid fa-list mx-2"></i>
                <span className={"d-none d-xl-inline"}>Lists</span>
            </a>


            <Link to="/tuiter/profile" className={`list-group-item ${active === 'profile'?'active':''}`}>
                <i className="fa-solid fa-user mx-2"></i>
                <span className={"d-none d-xl-inline"}>Profile</span>
            </Link>

            <a className={`list-group-item ${active === 'more'?'active':''}`}>
                <i className="fa-solid fa-ellipsis mx-2"></i>
                <span className={"d-none d-xl-inline"}>More</span>
            </a>
        </div>
    );
};
export default NavigationSidebar;

