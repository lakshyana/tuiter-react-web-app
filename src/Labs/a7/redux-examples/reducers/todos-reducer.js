// Redux allows maintaining the state of an application.
// The state changes over time as the user interacts with the application.
// There are four basic ways we interact with data: create data, read data, update date, and delete data.
// We often refer to these operations by the acronym CRUD.
// Let's implement a small to-do app to illustrate the CRUD operations.
// In the same reducers directory created earlier, create the reducer for the to-do app in a file called todos-reducer.js.

// todos-reducer.js declares an initial set of to-do objects in a constant array.
// This will be the initial state of our simple todos application.



import {createSlice} from "@reduxjs/toolkit";

const initialTodos = [
    {
        _id: "123",
        do: "Accelerate the world's transition to sustainable energy",
        done: false
    },
    {
        _id: "234",
        do: "Reduce space transportation costs to become a spacefaring civilization",
        done: false
    },
];

//Now that we have edited a to-do object, we can send it to the reducer to
// store it in the global state. Lets add an addTodo handler that can receive the new to-do instance
// and push it to the array of current todos.
const todosSlice = createSlice({
    name: 'todos',
    initialState: initialTodos,

    //define reducer functions as a map
    reducers: {
        // reducer functions receive current state
        addTodo(state, action) {
            // mutate current state into new state, e.g.,
            state.push({
                // pushing new object. _id set to current date
                _id: (new Date()).getTime(),
                do: action.payload.do,
                done: false
            });
        },

        // new deleteTodo function extracts
        // index from action's payload and
        // uses it to splice out the todo to
        // be deleted
        deleteTodo(state, action) {
            const index = action.payload
            state.splice(index, 1)
        },
        todoDoneToggle(state, action) {
            const todo = state.find((todo) =>
                todo._id === action.payload._id)
            todo.done = !todo.done
        }

    }

});
// export actions so we can call them from UI
export const {
    addTodo,
    deleteTodo,
    todoDoneToggle
} = todosSlice.actions

export default todosSlice.reducer