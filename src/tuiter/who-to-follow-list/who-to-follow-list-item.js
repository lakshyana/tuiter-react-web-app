import React from "react";
const WhoToFollowListItem = (
    {
        who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.png' }
    }
) => {
    return(
        <li className="list-group-item flex-grow-1">
            <div className="row">
                <div className="col-2">
                    <img className="img-fluid me-1 rounded-circle wd-image-circular" src={`/img/${who.avatarIcon}`}/>

                </div>
                <div className="col-8">
                    <div className="fw-bold mb-1">{who.userName}</div>
                    <div>@{who.handle}</div>
                </div>
                <div className="col-2">
                    <button className="btn btn-primary rounded-pill btn-group-sm float-end">Follow</button>
                </div>
            </div>
        </li>
    );
};
export default WhoToFollowListItem;

// height={48}
//using url from public folder
// https://stackoverflow.com/questions/37644265/correct-path-for-img-on-react-js

// `${process.env.PUBLIC}/img/${who.avatarIcon}`