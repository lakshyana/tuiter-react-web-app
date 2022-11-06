import Nav from "../nav";
import Assignment6 from "./a6";
import Assignment7 from "./a7";
import {Route, Routes} from "react-router";

function Labs() {
    return(
        <div>
            <Nav/>
            <Routes>
                <Route path="a7" element={
                    <Assignment7/>}/>
                <Route index element={<Assignment6/>}/>
            </Routes>
        </div>
    )
}
export default Labs;

//
// <Nav/>
// <Assignment7/>
// <Assignment6/>
// <h2>Assignment 8</h2>
// <h2>Assignment 9</h2>