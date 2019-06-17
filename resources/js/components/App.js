import React from "react";
import ReactDOM from "react-dom";

import { Router } from "@reach/router"
import { Home }  from "./Home";
import { Navigation } from './Navigation';
import { Main } from "./Main";
import { Subpage }  from "./Subpage";

const App = () => {
    return (
        <>
            <Navigation />
            <Router>
                <Main path="/">
                    <Home path="/" />
                    <Subpage path={":id"}/>
                </Main>
            </Router>
        </>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
