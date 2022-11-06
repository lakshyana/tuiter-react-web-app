
const initialState = {
    firstName: "Bob",
    lastName: 'Hope',
    userName: 'bob@hope.com'
}

//create a function to calculate the updated state of these values

//based on the actions and events, reduce them into a value: AKA Reducer

//right now it's constant
const currentUserReducer = () => {
    return initialState
}

export default currentUserReducer();