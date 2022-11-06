
import React from "react";
import {Link} from "react-router-dom";


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
    return (<>
        <li className="list-group-item">
            <div>
                <i className="fas fa-arrow-left float-start px-1 py-2 me-3"></i>
                <span className={"column"}>
                   <h6 className={"fw-bolder m-0 p-0"}> {profile.firstName} {profile.lastName}</h6>
                    <span className={"text-muted small"}>{profile.tuitCount} Tweets</span>
                </span>
            </div>
        </li>

            <div className="position-relative">
                <img className="img-fluid" src={profile.bannerPicture}/>
                <img height={100} width= {100} className="rounded-circle position-absolute top-50 start-0 ms-2 mt-3" src={profile.profilePicture}/>
            </div>

            <div className="w-100">
                <Link to="/tuiter/edit-profile">
                    <button className="btn btn-outline-light btn-sm rounded-pill border-secondary border-opacity-25 float-end mt-2 me-2">
                        <span className="text-black fw-bolder small">Edit profile</span>
                    </button>
                </Link>
            </div>
        <span className={"row ms-2 mt-4"}>
            <h6 className="w-100 fw-bold m-0 p-0">{profile.firstName} {profile.lastName}</h6>
            <span className="m-0 p-0 small wd-bio-handle">@{profile.handle}</span>
        </span>

        </>
        );
}

export default ProfileListItem;



