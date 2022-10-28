import React from "react";
import "../../index.css";
import ItemHistory from "./post-item-history";

const PostItem = (
    {
        post = {
            "_id": "123",
            "action": "retuit",
            "user_name": "Spacex",
            "user_handle": "SpaceX",
            "user_icon": "spacex.png",
            "timestamp": "23h",
            "post_title": "Dennis and Akiko Tito are the first two crewmembers on Starship’s second commercial spaceflight around the Moon → ",
            "post_link" : "spacex.com/updates",
            "post_thumbnail": "post1.jpg",
            "post_caption": "Countdown Inspirational4 Mission to Space | Netflix Official Site",
            "post_details": "From training to launch launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space mission.",
            "likes":"11.1k",
            "retuits":"1,168",
            "comments":"595",

            "history" : {
                "_id": "234",
                "action": "tuit",
                "user_name": "",
                "user_handle":"",
                "user_icon": "",
                "timestamp": "",
                "post_link" : "",
                "post_title":"",
                "post_thumbnail": "",
                "post_caption": "",
                "post_details": "",
                "likes":"",
                "retuits":"",
                "comments":"",
                "history":{}
            }
        }
    }
) => {
    return(
        <li className="list-group-item">
            <span className="text-muted small row ms-3 fw-bolder">
                {post.action === "retuit" ? (
                    <span>
                        <i className="fa-solid fa-retweet"></i>
                        {` ${post.history.user_name} Retweeted`}
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
                    {( <span>
                            {`${post.post_title}`}
                            <span className="text-primary">{post.post_link}</span>
                        </span>

                    )}

                    {post.post_thumbnail != "" ? (<div className="px-2 my-2">
                        <img className="img-fluid w-90 rounded-3" src={`/img/${post.post_thumbnail}`}/>
                    </div>)
                        : ("")
                    }

                    {post.action === "share" ? (
                        <span className="rounded-3"> <ItemHistory post={post.history}/> </span>
                        )
                        : ("")
                    }

                    <div className="d-flex justify-content-between text-muted">
                        <span className="text-secondary">
                        <i className="fa-regular fa-comment me-3"></i>
                            {post.comments}
                        </span>
                        <span className="text-secondary">
                            <i className="fa-solid fa-retweet me-3"></i>
                                    {post.retuits}
                        </span>

                        <span className="text-secondary">
                            <i className="fa-solid fa-heart me-3"></i>
                                    {post.likes}
                        </span>
                        <span className="text-secondary me-5">
                            <i className="fa-solid fa-upload me-3"></i>
                        </span>

                    </div>

                </div>

            </div>



        </li>
        );
};
export default PostItem;

// <div className="fw-bolder">{post.post_title}</div>