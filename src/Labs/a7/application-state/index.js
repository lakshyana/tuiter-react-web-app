import ProfileScreen from "./profile-screen";
import BillingScreen from "./billing-screen";

//using reducer to access application state?

//Redux library: allow sharing data across multiple components

//React redux library allows to use redux lib specifically for react


//to Create store
import {createStore, combineReducers} from "redux";
//Provide data from all components
import {Provider} from "react-redux";

import currentUserReducer from "./current-user";

import tuitsReducer from "./tuits-reducer"


const masterReducer = combineReducers( {
    currentUser: currentUserReducer,
    tuits: tuitsReducer
    }
)

//Create store to allow all the components to grab the data from the store, and allow provider to pluck the needed info
const store = createStore(masterReducer);
//share the store space with other reducers, eg, tuits, likes, followers etc, using a map to create a master reducer
//Can be achieved using combine reducers

const ApplicationState = () => {
    return(
        <>
            <Provider store={store}/>
            <h3>Application State</h3>
            <ProfileScreen/>
            <BillingScreen/>

        </>
    )
}
export default ApplicationState;