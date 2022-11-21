// import React from "react";
// import tuitsArray from './tuits.json';
import TuitItem from "./TuitItem";
import TuitStats from "../TuitStats";

//Redux imports

import React, {useEffect} from "react";

// import hook to retrieve state from reducer
import {useSelector} from "react-redux";
// import useDispatch (deleting tuit)
import {useDispatch} from "react-redux";

// import {deleteTuit} from "../reducers/tuits-reducer";
import {deleteTuitThunk} from "../../services/tuits-thunks";

// import the thunk
import {findTuitsThunk} from "../../services/tuits-thunks";

const TuitList = () => {

    // grab tuits and loading flag from reducer
    const {tuits, loading} = useSelector(
        state => state.tuitsData)
    // const tuits = useSelector((state) => state.tuits)

    // get dispatch
    const dispatch = useDispatch();

    // handle delete event,
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
        // dispatch(deleteTuit(id)); // pass tuit's ID to reducer
    }

    // on component load
    useEffect(() => {
        dispatch(findTuitsThunk()) // invoke find tuits thunk to fetch tuits and
    }, []) // put them in the reducer's store so we can extract them with useSelector() and render the tuits here

    return(
        <ul className="list-group">

            {loading && //Added
                <li className="list-group-item">
                    Loading...
                </li>
            }
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