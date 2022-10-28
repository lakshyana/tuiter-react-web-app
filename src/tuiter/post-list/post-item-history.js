import React from "react";

const ItemHistory = (
    {
        post = {
            "_id": "023",
            "action": "tuit",
            "user_name": "Spacex",
            "user_handle":"Spacex",
            "user_icon": "spacex.png",
            "timestamp": "Oct 12",
            "post_title": "Starlink for RVs now has over 100,000 customers! Access high-speed, low-latency internet on an as-needed basis anywhere Starlink provides active coverage → ",
            "post_link" : "starlink.com/rv",
            "post_thumbnail": "",
            "post_caption": ""
        }
    }
) => {
    return(
        <div className="mt-2 list-group-item">

            <div className="d-flex flex-nowrap">
                <span><img width={30} className="rounded-circle me-1" src={`/img/${post.user_icon}`}/></span>
                <div className="row">
                    <div className="d-flex flex-nowrap justify-content-between">
                        <div>
                            <span className="fw-bolder">{post.user_name} </span>
                            <i className="fa-solid fa-circle-check text-primary mx-1"></i>
                            <span className="fw-normal text-muted">@{post.user_handle} &#183; {post.timestamp}</span>
                        </div>
                    </div>
                    {( <span>
                            {`${post.post_title}`}
                            <span className="text-primary">{post.post_link}</span>
                        </span>

                    )}

                    {post.post_thumbnail != "" ? (<div className="px-1">
                            <img className="img-fluid w-90 rounded-3" src={`/img/${post.post_thumbnail}`}/>
                        </div>)
                        : ("")
                    }

                </div>

            </div>



        </div>
    );
};
export default ItemHistory;

// <div className="fw-bolder">{post.post_title}</div>