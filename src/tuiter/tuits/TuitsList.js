import React from "react";
// import tuitsArray from './tuits.json';
import TuitItem from "./TuitItem";
import TuitStats from "../TuitStats";

//Redux imports
// import hook to retrieve state from reducer
import {useSelector} from "react-redux";


import {deleteTuit} from "../reducers/tuits-reducer";

// import useDispatch (deleting tuit)
import {useDispatch} from "react-redux";


const TuitList = () => {
    // get dispatch
    const dispatch = useDispatch();
    // handle delete event,
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id)); // pass tuit's ID to reducer
    }

    const tuits = useSelector((state) => state.tuits)

    return(
        <ul className="list-group">
            {tuits.map &&
                tuits.map(tuit =>
                    <>
                    <li className="list-group-item">
                        <div className={"d-flex flex-nowrap"}>
                            <TuitItem key={tuit._id} //Header row and Tuit post
                                      tuit={tuit}/>
                            <i className="bi bi-x-lg float-end" //Delete tuit icon
                               onClick={() => deleteTuitHandler(tuit._id)}>
                            </i>
                        </div>

                        <TuitStats tuit = {tuit}/>

                    </li>

                    </>
                     )
            }
        </ul>
    );
};
export default TuitList;