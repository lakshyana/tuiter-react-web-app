import React, {useState} from "react";

// import reducer function
import {createTuit} from "../reducers/tuits-reducer";
// import dispatch hook
import {useDispatch} from "react-redux";


// Use the redux dispatcher to notify the reducer with the createTuit reducer function.
// Pass the whatsHappening state variable to the reducer as part of a new tuit to add to
// the array of tuits.

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    // retrieve dispatch function with hook
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        // create new tuit
        // with text typed in textarea

        const newTuit = {
            tuit: whatsHappening
        }
        // send tuit as action payload
        dispatch(createTuit(newTuit));
        console.log(whatsHappening);
    }
    return (
        <div className="row">
            <div className="col-auto">
                <img src="/img/nasa.png" width={60}/>
            </div>
            <div className="col-10">
       <textarea value={whatsHappening} placeholder="What's happening?"
                 className="form-control border-0"
                 onChange={(event) => setWhatsHappening(event.target.value)}>
       </textarea>
                <div>
                    <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                            onClick={tuitClickHandler}>
                        Tuit
                    </button>
                    <div className="text-primary fs-2">
                        <i className="bi bi-card-image me-3"></i>
                        <i className="bi bi-filetype-gif me-3"></i>
                        <i className="bi bi-bar-chart me-3"></i>
                        <i className="bi bi-emoji-smile me-3"></i>
                        <i className="bi bi-geo-alt"></i>
                    </div>
                </div>
            </div>
            <div className="col-12"><hr/></div>
        </div>
    );
}
export default WhatsHappening;