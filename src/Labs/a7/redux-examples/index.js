import React from "react";


// glue together the reducer producing the data, and the
//  HelloReduxExampleComponent consuming the data

// import the component that consumes the data
import HelloReduxExampleComponent from "./hello-redux-example-component";
// import reducer that calculates/generates the data
import hello from "./reducers/hello"

// import the new reducer
import todos from "./reducers/todos-reducer";

// import createStore to store data from reducers
// import {createStore} from "redux";

// instead of createStore,
// import Provider which will deliver the data
import {Provider} from "react-redux";

// import the configureStore function
import { configureStore } from '@reduxjs/toolkit';

// import new component to render todos
import Todos from "./reducers/todos-component";


// // create data storage
// const store = createStore(hello);

// All reducers must collate their collective states into a common store.
// To do this we will use configureStore to collate the various reducers into a single store

// combine all reducers into a single store
// each available through these namespaces

const store = configureStore({
    reducer: {hello, todos}
});


const ReduxExamples = () => {
    return(
        // Provider delivers data in store to child elements,
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                <HelloReduxExampleComponent/>
                <Todos/>

            </div>
        </Provider> //Component consumes the data
    );
};
export default ReduxExamples;




