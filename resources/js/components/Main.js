import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router"
import { Home }  from "./Home";

const App = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("/api")
            .then(response => response.json())
            .then(data => {
                setData(data.subpages.map((subpage) => {
                    return subpage.title;
                }));
            });
    }, []);
    return (
        console.log(data),
        <>
            <nav className={"row"}>
                <div>

                </div>
                {
                    data.map((subpage) => {
                        return (
                            <div className={"nav_item row d-flex justify-content-start"}>
                                <Link className={"col-10"} to="/">{subpage}</Link>
                                <hr className={"col-5 m-0 mt-2"}/>
                            </div>
                        );
                    })
                }

            </nav>

            <Router>
                <Home path="/" />
            </Router>
        </>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
