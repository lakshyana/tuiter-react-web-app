
//Taking out the fields of the object
const Counter = ({count, email, up, down}) => {
    return (
        <>
            <h4>Counter</h4>
            count = {count}
            <button onClick={up}>Up</button>
            <button onClick={down}>Down</button>
        </>
    )
}
export default Counter;