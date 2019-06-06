import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router"
import { Home }  from "./Home";
import { Subpage }  from "./Subpage";
const App = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("/api")
            .then(response => response.json())
            .then(data => {
                setData(data);
            });
    }, []);
    return (
        <>
            <nav className={"row"}>
                <div>

                </div>
                <Link className={"col-10"} to={`/`}>Home</Link>
                {
                    data.map(({ title, title_link}) => {
                        return (
                            <div className={"nav_item row d-flex justify-content-start"} key={title}>
                                <Link className={"col-10"} to={`/${title_link}`}>{title}</Link>
                                <hr className={"col-5 m-0 mt-2"}/>
                            </div>
                        );
                    })
                }

            </nav>

            <Router>
                <Home path="/" />
                <Subpage path={":id"}/>
            </Router>
        </>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
