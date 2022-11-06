//TODO Update Profile list

import React from "react";
// import hook to retrieve state from reducer
import {useSelector} from "react-redux";

import ProfileListItem from "./ProfileListItem";

const Profile = () => {
    const profile = useSelector((state) => state.profile);
    return (
        <div className="list-group">
            {profile.map &&
                profile.map(profile => //map profile list item
                <ProfileListItem profile={profile}/>
                )
            }
        </div>
    );
}

export default Profile;
