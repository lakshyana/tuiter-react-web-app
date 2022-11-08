
import React from "react";
import {Link} from "react-router-dom";
import "../../index.css"


const ProfileListItem = ({
                             profile = {
                                 "firstName": "Jose",
                                 "lastName": "Annunziato",
                                 "handle": "@jannunzi",
                                 "profilePicture": "jose.png",
                                 "bannerPicture": "/img/banner.jpeg",
                                 "bio": "Faculty, Software Engineer, AI, Space, and renewable enthusiast.Retuits and likes are not endorsements.",
                                 "website": "youtube.com/webdevtv",
                                 "location": "Boston, MA",
                                 "dateOfBirth": "7/7/1968",
                                 "dateJoined": "4/2009",
                                 "followingCount": 340,
                                 "followersCount": 223,
                                 "tuitCount": 100
                             }
                         }) => {
    return (<div className={"border border-secondary border-opacity-50"}>

        <li className="list-group-item border-0">
            <div>
                <i className="fas fa-arrow-left float-start px-1 py-2 me-3"></i>
                <span className={"row"}>
                   <h6 className={"fw-bold m-0 p-0"}> {profile.firstName} {profile.lastName}</h6>
                    <span className={"text-muted wd-xsmall p-0 mb-1"}>{profile.tuitCount} Tweets</span>
                </span>
            </div>

            <div className="position-relative">
                <img className="img-fluid" src={profile.bannerPicture}/>
                <img height={100} width= {100} className="rounded-circle position-absolute top-50 start-0 ms-2 ps-1 mt-2" src={profile.profilePicture}/>
            </div>

            <Link //Path change to edit profile
                to="/tuiter/edit-profile">
                <button className="btn btn-outline-light btn-sm rounded-pill border-secondary border-opacity-25 float-end mt-2 me-3">
                    <span className="text-black fw-bolder small">Edit profile</span>
                </button>
            </Link>

            <div className={"row ms-2 mt-5 pt-4 w-100"}>
                <h6 className="fw-bold m-0 p-0">{profile.firstName} {profile.lastName}</h6>
                <span className="p-0 m-0 small text-muted wd-xsmall">@{profile.handle}</span>
                <span className="p-0 mt-2 text-dark small fw-normal">{profile.bio}</span>
            </div>

            <div className={"row ms-2"}>
            <span className="p-0 text-muted fw-normal wd-xsmall">
                <i className="fa-solid fa-location-dot me-2"></i>
                {profile.location}
                <i className="fa-solid fa-cake-candles ms-3 me-2"></i>
                Born {profile.dateOfBirth}
                <i className="fa-solid fa-calendar-days ms-3 me-2"></i>
                Joined {profile.dateJoined}
            </span>

            <span className={"p-0 wd-xsmall text-secondary me-3 mt-2"}>
                <span className={"fw-bold text-dark me-1"}>{profile.followingCount}</span>
                Following
                <span className={"fw-bold text-dark ms-3 me-1"}>{profile.followersCount}</span>
                Followers
            </span>

            </div>
        </li>



        </div>
        );
}

export default ProfileListItem;

