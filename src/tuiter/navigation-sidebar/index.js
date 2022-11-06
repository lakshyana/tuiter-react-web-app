
import "../../vendors/bootstrap/css/bootstrap.min.css"
import "../../vendors/fontawesome/css/all.min.css";
import "../../index.css"

import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    // const active = paths.length === 2 ? paths[2] : selected ;
    const active = paths[2];
    console.log("Path name in nav sb:"+pathname)
    console.log("paths: " + paths)
    console.log("active: " + active)

    return (
        <div className="list-group">
            <a className="list-group-item">
                <i className="fab fa-twitter"></i>
                <span className={"d-none d-xl-inline"}> Tuiter</span>
            </a>
            <Link to="/tuiter/" className={`list-group-item ${active === ''?'active':''}`}>
                <i className="fa-solid fa-house mx-2"></i>
                <span className={"d-none d-xl-inline"}>Home</span>
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
                <i className="fa-solid fa-hashtag mx-2"></i>
                <span className={"d-none d-xl-inline"}>Explore</span>
            </Link>

            <Link to="/" className="list-group-item">
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

            <a className={`list-group-item ${active === 'profile'?'active':''}`}>
                <i className="fa-solid fa-user mx-2"></i>
                <span className={"d-none d-xl-inline"}>Profile</span>
            </a>

            <a className={`list-group-item ${active === 'more'?'active':''}`}>
                <i className="fa-solid fa-ellipsis mx-2"></i>
                <span className={"d-none d-xl-inline"}>More</span>
            </a>
        </div>
    );
};
export default NavigationSidebar;

