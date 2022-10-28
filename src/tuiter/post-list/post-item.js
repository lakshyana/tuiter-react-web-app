import React from "react";
const PostItem = (
    {
        post = {
            "action": "retuit",
            "source_user_name": "Elon Musk",
            "user_name": "Spacex",
            "user_handle": "SpaceX",
            "user_icon": "/img/spacex.png",
            "timestamp": "23h",
            "post_title": "Dennis and Akiko Tito are the first two crewmembers on Starship’s second commercial spaceflight around the Moon → http://spacex.com/updates",
            "post_link" : "spacex.com/updates",
            "post_thumbnail": "../images/inspiration4x.jpg",
            "post_caption": "Countdown Inspirational4 Mission to Space | Netflix Official Site",
            "post_details": "From training to launch launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space mission.",
            "source":"netflix.com",
            "likes":"37.5k",
            "retuits":"3.5k",
            "comments":"4.2k"
        }
    }
) => {
    return(
        <li className="list-group-item">
            <span className="text-muted small row ms-4 fw-bolder">
                {post.action === "retuit" ? (
                    <span>
                        <i className="fa-solid fa-retweet"></i>
                        {` ${post.source_user_name} Retweeted`}
                    </span>
                    )
                    : ("")}
            </span>
            <div className="d-flex flex-nowrap">
                <span><img width={48} className="rounded-circle m-2" src={`/img/${post.user_icon}`}/></span>
                <div className="row">
                    <div className="d-flex flex-nowrap justify-content-between">
                        <div>
                            <span className="fw-bolder">{post.user_name} </span>
                            <i className="fa-solid fa-circle-check text-primary mx-1"></i>
                            <span className="fw-normal text-muted">@{post.user_handle} &#183; {post.timestamp}</span>
                        </div>
                        <i className="fa-solid fa-ellipsis text-muted"></i>
                    </div>
                    <div>{post.post_title}</div>
                    <div className="px-2">
                        <img className="img-fluid w-90 rounded-3" src={`/img/${post.post_thumbnail}`}/>
                    </div>
                </div>
            </div>

        </li>
        );
};
export default PostItem;

// <div className="fw-bolder">{post.post_title}</div>