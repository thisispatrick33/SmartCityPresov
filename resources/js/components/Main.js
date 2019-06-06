import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router"
import { Home }  from "./Home";

const App = () => {
    const [logged, setLogged] = useState(false);
    return (
        <>
            <nav className={"row"}>
                <div>

                </div>
                <div className={"nav_item"}>
                    <Link to="/">Home</Link>
                </div>
            </nav>

            <Router>
                <Home path="/" />
            </Router>
        </>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
