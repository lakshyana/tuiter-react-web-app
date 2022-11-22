import Labs from "./Labs";
import HelloWorld from "./Labs/hello-world/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter, Link} from "react-router-dom";
import {Routes, Route} from "react-router";
// import Nav from "./nav";


function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/*" element={<Tuiter/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default App;

// <Route path={"/*"} element={<Labs/>}/>
// <Route path="/hello" element={<HelloWorld/>}/>
// <Route path="/tuiter/*" element={<Tuiter/>}/>


// For nested routes, redefine tuiter route in app.js