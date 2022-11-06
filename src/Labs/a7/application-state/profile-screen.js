
//Profile screen: Holds the information from the reducer
import {useSelector} from "react-redux";
import BillingScreen from "./billing-screen";

// Useselector: to extract whatever is needed from what is available in the store
//Store: invokes the function of the user and shares the data globally
//Use the selector hook to extract the parts needed

const ProfileScreen = () => {
    //Pluck out useful data
    // from the bigger state object, extract user
    const user = useSelector((state) => state.currentUser)
    return(
        <>
            <h4>Profile Screen</h4>
            {user.firstName}
            <pre>
                {JSON.stringify(user)}
            </pre>
            <BillingScreen/>
        </>
    )
}
export default ProfileScreen;