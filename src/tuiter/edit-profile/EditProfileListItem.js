


import React from "react";
import {useState} from "react";
import {Link} from "react-router-dom";

// import useDispatch (edit profile)
import {useDispatch} from "react-redux";

// // import hook to retrieve state from reducer
// import {useSelector} from "react-redux";
// import { useNavigate } from 'react-router';

// // import { useNavigate } from 'react-router'; //navigate to a url
import {updateProfile} from "../reducers/profile-reducer";

import "../../index.css"
import {deleteTuit} from "../reducers/tuits-reducer"; //Style

const EditProfileItem = ({
                            // initial state
                             initialProfile = {
                                     "firstName": "Jose",
                                     "lastName": "Annunziato",
                                     "handle": "@jannunzi",
                                     "profilePicture": "/img/profile-icon.jpg",
                                     "bannerPicture": "/img/fall_banner.jpg",
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
    // Use initial state
    let [profile, updateView] = useState(initialProfile);

    // get dispatch
    const dispatch = useDispatch();


    // handle update profile event,
    // update Profile on Save
    const updateProfileHandler = () => {
        dispatch(
            updateProfile(profile) // pass user profile to reducer
            // alternate way: {type: 'update-profile', profile}
        );
    }



    //Dynamically update field on change
    const updateField = (event) => {
        const {name, value} = event.target;
        // console.log("name " + name)
        // console.log("field " + value)

        if (name === "fullName") {
            // console.log("full name")
            const fullName = value.split(" ")
            // console.log(fullName)
            return updateView({...profile,
                                                "firstName" : fullName[0],
                                                "lastName" : fullName.length > 1 ? fullName.slice(1,) : ""
            });
        }
        updateView({...profile, [name] : value});
    };

    return (
        <div className={"list-group-item"}>

            <div className="border-0 mb-2">

                <div className={"d-flex flex-nowrap align-items-center justify-content-between"}>

                    <div className={"col-5"}>
                        <Link to="/tuiter/profile"
                              className="fa-solid fa-xmark float-start py-1 me-4 text-decoration-none text-dark small">
                        </Link>
                        <h6 className={"fw-bold small"}>Edit profile</h6>
                    </div>

                    <Link to="/tuiter/profile">
                        <button type={"submit"}
                                className="float-end btn btn-sm btn-dark rounded-pill fw-semibold"
                                onClick={updateProfileHandler}>
                            Save
                        </button>
                    </Link>


                </div>

            </div>

            <div className="position-relative">
                <img className="img-fluid" src={profile.bannerPicture}/>

                <div className="position-absolute top-50 start-50 translate-middle">
                    <button className="btn btn-sm rounded-circle btn-dark opacity-75 m-2">
                        <i className="bi bi-camera"></i>
                    </button>
                    <button className="btn btn-sm rounded-circle btn-dark opacity-75">
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>

                <div className={"position-absolute"}>
                    <div className={"ms-2 position-relative start-50"}>
                        <img height={80} width= {80} className="translate-middle rounded-circle" src={profile.profilePicture}/>
                        <button className="btn btn-sm rounded-circle btn-dark opacity-75 position-absolute translate-middle start-0">
                            <i className="bi bi-camera"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div className="row">
                <div>
                    <div className="mt-5 pt-2 mb-3 form-floating">
                        <input type="name" className="form-control" id="fullName"
                               name={"fullName"}
                               placeholder="Full Name"
                               defaultValue={`${profile.firstName} ${profile.lastName}`}
                               onChange={updateField}/>

                        <label htmlFor={"fullName"} className={"text-muted wd-xsmall mt-3 mx-1 p-0"}>Name</label>
                    </div>

                    <div className="my-3 form-floating">
                        <textarea className="form-control" placeholder="Add your bio"
                                  name={"bio"}
                                  id="userBio" style={{height:80}}
                                  defaultValue={`${profile.bio}`}
                                  onChange={updateField}/>
                        <label htmlFor="inputName" className={"text-muted wd-xsmall mt-2 mx-1 p-0"}>Bio</label>
                    </div>

                    <div className="my-3 form-floating">
                        <input type="location" className="form-control" placeholder="Current Location"
                               id="userLocation"
                               name={"location"}
                               defaultValue={`${profile.location}`}
                               onChange={updateField}/>
                        <label htmlFor="userLocation" className={"text-muted wd-xsmall mt-1 mx-1 p-0"}>Location</label>
                    </div>

                    <div className="my-3 form-floating">
                        <input type="website" className="form-control" placeholder="Website link"
                               id="userWebsite"
                               name={"website"}
                               defaultValue={`${profile.website}`}
                               onChange={updateField}/>
                        <label htmlFor="userWebsite" className={"text-muted wd-xsmall mt-1 mx-1 p-0"}>Website</label>
                    </div>

                    <div className="my-3">
                        <label htmlFor="userBirthday" className={"text-muted wd-xsmall mt-1 mx-1 p-0"}>Birth Date</label>
                        <input type="birthday" className="form-control" placeholder="Month Date, YYYY"
                               id="userBirthday"
                               name={"dateOfBirth"}
                               defaultValue={`${profile.dateOfBirth}`}
                               onChange={updateField}/>
                    </div>

                    <div className="mt-2 mb-5 d-flex justify-content-between">
                        <div className={"small"}>Switch to professional</div>
                        <div><i className="fa-solid fa-angle-right"></i></div>
                    </div>

                </div>

            </div>
        </div>

    );
}
export default EditProfileItem;

