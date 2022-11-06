import React from "react";
import "../../index.css";


const TuitItem = ({
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
        <>
            <span><img width={48} className="rounded-circle me-2" src={`/img/${tuit.image}`}/></span>

            <div //col-11 to ensure cross symbol justified to the right most edge
                className="row col-11">
                <div className={"d-flex flex-nowrap justify-content-between"}>
                    <div>
                        <span className="fw-bolder">{tuit.userName} </span>
                        <i className="fa-solid fa-circle-check text-primary mx-1"></i>
                        <span className="fw-normal text-muted">@{tuit.handle} &#183; {tuit.time}</span>
                    </div>

                </div>
                <span>{( <div>{`${tuit.tuit}`}</div>)}</span>

            </div>

        </>
    );
};
export default TuitItem;


// <i className="fa-solid fa-ellipsis text-muted"></i>

// <div className="fw-bolder">{tuit.tuit_title}</div>