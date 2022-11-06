import React from "react";
import "../../index.css";

const TuitStats = ({
    tuit = {
        "_id": 234,
        "topic": "Space",
        "userName": "SpaceX",
        "time": "2h",
        "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
        "image": "spacex.png",
        "liked": true,
        "replies": 123,
        "retuits": 432,
        "likes": 2345,
        "handle": "spacex",
        "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
    }
    }) => {

    return(
        <div className={"ms-5 ps-3"}>
            <div className="d-flex justify-content-between text-muted">
                <span className="text-secondary">
                <i className="fa-regular fa-comment me-3"></i>
                    {tuit.replies}
                </span>
                <span className="text-secondary">
                    <i className="fa-solid fa-retweet me-3"></i>
                    {tuit.retuits}
                </span>

                <span className="text-secondary">
                    {tuit.liked ? <i className="fa-solid fa-heart me-3 text-danger"></i>
                        : <i className="fa-solid fa-heart me-3 wd-no-fill"></i>
                    }

                    {tuit.likes}
                </span>
                <span className="text-secondary me-5">
                    <i className="fa-solid fa-upload me-3"></i>
                </span>
            </div>
        </div>
    )

};
export default TuitStats;