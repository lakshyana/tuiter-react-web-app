// import useState to work with local state
import React, {useState} from "react";

// useDispatch hook to call reducers
import {useDispatch} from "react-redux";
// import useSelector
import {useSelector} from "react-redux";

// import reducer function exported by
// todos-reducer and a new deleteTodo reducer function
import {addTodo, deleteTodo, todoDoneToggle} from "./todos-reducer";

// The React useState hook can be used to deal with local component state.
// This is especially useful to integrate React with forms.

// display do property containing the to-do text
const Todos = () => {
    // retrieve todos from reducer state and assign to
    // local todos constant
    const todos = useSelector(state => state.todos);
    // create to-do local state variable
    const [todo, setTodo] = useState({do: ''});

    // create to-do local state variable
    const todoChangeHandler = (event) => {
        const doValue = event.target.value;
        const newTodo = {
            do: doValue
        };
        setTodo(newTodo);
    }


    // get distacher to invoke reducer functions
    const dispatch = useDispatch();

    // handle checkbox click event, accept to-do index
    // send index to reducer function passing index
    // of to-do to toggle done field
    const toggleTodoDone = (todo) => {dispatch(todoDoneToggle(todo))}


    // handle delete button click, accepts to-do index
    // dispatch event to deleteTodo reducer function
    // passing index of to-do we want to delete
    const deleteTodoClickHandler = (index) => {dispatch(deleteTodo(index))}

    // handle click event of button
    // call reducer function passing new to-do
    // as the payload in the action object
    const createTodoClickHandler = () => {dispatch(addTodo(todo))}


    return(
        // new button to add new to-do
        // calls function to handle click event
        // new checkbox which is checked

        // if to-do.done is true
        // if user changes checkbox, we'll pass the
        // to-do to reducer function to update to-do's
        // state

        <>
            <h3>Todos</h3>
            <ul className="list-group">
                <li className="list-group-item">
                    <button onClick={createTodoClickHandler}
                            className="btn btn-primary w-25
                          float-end">
                        Create</button>
                    <input
                        onChange={todoChangeHandler}
                        value={todo.do}
                        className="form-control w-75"/>
                </li>
            {
                todos.map((todo, index) => // add index parameter
                    <li key={todo._id}
                        className="list-group-item">
                        <button onClick={() =>
                            deleteTodoClickHandler(index)}
                                className="btn btn-danger float-end ms-2">
                            Delete
                        </button>
                        <input type="checkbox"
                               checked={todo.done}
                               onChange={() =>
                                   toggleTodoDone(todo)}
                               className="me-2"/>
                        {todo.do}
                    </li>
                )
            }
            </ul>
        </>
    );
};
export default Todos;


// // handle keystroke changes in input field
// const todoChangeHandler = (event) => {
//     // get data from input field
//     const doValue = event.target.value;
//     // create new to-do object instance
//     const newTodo = {
//         do: doValue
//     };
//     // change local state to-do variable
//     setTodo(newTodo);
// }