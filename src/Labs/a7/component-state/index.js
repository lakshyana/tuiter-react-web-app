




// Hooks for maintaining state and notifying components to re-render

//Use state hook to provide an initial state of a variable
import {useState} from "react";
import Counter from "./counter";
import Email from "./email";
//Create a constant and


const  ComponentState = () => {
    // useState returns an array can then be deconstructed [count] is the
    // array destructor or unwrapper
    //second component of the array is a function that allows to modify
    // the state of the value of the state
    //names of the count, and function can be anything

    const [count, setCount] = useState(123);
    const [email, setEmail] = useState("alice@wonderland.com")
    const [bio, setBio] = useState("Lego enthusiast")
    const [showBio, setShowBio] = useState(true)
    const [editingEmail, setEditingEmail] = useState(true)
    const [profile, setProfile] = useState({
        firstName: "Alice", lastName: "Wonderland",
        userName: 'alice123', password: 'p@ssw0rd'
    })


    const changeEmail = (event) => {
        //target is the input field, button, text
        //value is the value of the input field
        setEmail(event.target.value)
    }

    const up = event => {
        setCount(count+1);
        // count++;
    }
    const down = event => {
        setCount(count-1);
        // count--;
    }
    const setFirstName = (e) => {
        const newFirstName = e.target.value;
        const newProfile = {
            firstName: newFirstName,
            lastName: profile.lastName,
            username: profile.userName,
            password: profile.password
        }
        setProfile(newProfile)
    }

    const setLastName = (e) => {
        const newLastName = e.target.value;
        const newProfile = {
            ...profile,
            lastName: newLastName
        }
        setProfile(newProfile)
    }

    const setUsername = (e) => {
        const newUsername = e.target.value;
        const newProfile = {
            ...profile,
            userName: newUsername
        }
        setProfile(newProfile)
    }

    return(
        <>
            <h3>Component State</h3>
            <h4>Objects</h4>
            First Name: <input
            onChange={setFirstName}
            value={profile.firstName}/><br/>
            Last Name: <input
            onChange={setLastName}
            value={profile.lastName}/><br/>
            Username: <input
            onChange={setUsername}
            value={profile.userName}/><br/>
            Password: <input
            value={profile.password} type={"password"}/><br/>



            <pre>
                {JSON.stringify(profile, null, 2)}
            </pre>
            <hr/>

            <input type={"checkbox"}
                   onChange={(e)=> setShowBio(e.target.checked)}
                   checked={showBio}/>
            {
                showBio && //show if showbio is true
            <>
            <h4>Bio</h4>
            <textarea
                value={bio}
                onChange={
                    (e) => setBio(e.target.value)
                }></textarea>
            </>
            }


            <Email email={email}
                editingEmail={editingEmail}
                setEditingEmail = {setEditingEmail}
               changeEmail={changeEmail}/>

            <Counter count={count}
                     up={up}
                     down={down}/>


        </>
    )
}
export default ComponentState


//Adding locally or using external function
// <h4>Counter</h4>
// count = {count}
// <button onClick={up}>Up</button>
// <button onClick={down}>Down</button>