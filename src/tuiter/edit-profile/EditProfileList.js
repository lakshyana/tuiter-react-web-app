import React from "react";
// import hook to retrieve state from reducer
import {useSelector} from "react-redux";
//Import edit profile list item component
import EditProfileItem from "./EditProfileListItem";

const EditProfile = () => {
    const profile = useSelector((state) => state.profile); //select profile from state
    return (
        <div className="list-group">
            {profile.map &&
                profile.map(item => //map profile list item
                <EditProfileItem initialProfile={item}/>
                )
            }
        </div>
    );
}

export default EditProfile;






