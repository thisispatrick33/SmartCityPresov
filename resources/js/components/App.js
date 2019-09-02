import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";

import { Router, navigate } from "@reach/router"
import { Home }  from "./Home";
import { Main } from "./Main";
import { Subpage }  from "./subpage/Subpage";
import { Post } from "./news/Post";
import { Login } from "./admin/Login";
import axios from "axios";

const App = () => {
    const [authState, setAuthState] = useState({
        isLoggedIn: false,
        user: {}
    });
   useEffect(() => {
        let state = localStorage["authState"];
        if (state) {
            let AppState = JSON.parse(state);
            setAuthState(AppState);
        }
    },[authState]);
    const _logoutUser = () => {
        let authState = {
            isLoggedIn: false,
            user: {}
        };
        // save app state with user date in local storage
        localStorage["authState"] = JSON.stringify(authState);
        setAuthState(authState);
    };
    const _loginUser = (email,password) => {
        let formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        axios
            .post("/api/auth/login/", formData)
            .then(response => {
                return response;
            })
            .then(json => {
                if (json.data.success) {
                    alert("Login Successful!");
                    let authState = {
                        isLoggedIn: true,
                        user: {
                            id: json.data.data.id,
                            name: json.data.data.name,
                            email: json.data.data.email,
                            timestamp: new Date().toString()
                        }
                    };
                    localStorage["authState"] = JSON.stringify(authState);
                    setAuthState(authState.user);
                    navigate(`/`);
                } else alert("Login Failed!");

                $("#login-form button")
                    .removeAttr("disabled")
                    .html("Login");
            })
            .catch(error => {
                alert(`An Error Occured! ${error}`);
                $("#login-form button")
                    .removeAttr("disabled")
                    .html("Login");
            });
    };

    const _updatePost = (postData) => {
        axios
            .put("/api/post/edit", postData)
            .then(response => {
                console.log(response)
            })
            .then(json => {
                if (!json) {
                    alert("Úspešne si upravil článok.");
                } else  alert("Úprava neprebehla, nastala chyba.");

            })

    };
    const _createPost = (postData) => {
        axios
            .post("/api/post", postData)
            .then(response => {
                console.log(response)
            })
            .then(json => {
                if (!json) {
                    alert("Úspešne si vytvoril článok.");
                } else  alert("Úprava neprebehla, nastala chyba.");
            })

    };
    const _deletePost = (postData,subpage) => {
        postData = {
            id : postData
        };
        axios
            .delete("/api/post/delete", { data : postData})
            .then(response => {
                console.log(response)
            })
            .then(json => {
                if (!json) {
                    alert("Úspešne si vymazal článok.");
                } else  alert("Vymazanie neprebehlo, nastala chyba.");
            })
        navigate(`/${subpage}`);
    };
    return (
        <div className={"col-12 p-0 row"}>
                <Router>
                    <Main path="/" auth={authState} logout={_logoutUser}>
                        <Home path="/" />
                        <Subpage path={":id"} del={_deletePost} user={authState.isLoggedIn ? authState.user : false}/>
                        <Post path={"/posts/:id"} logged={authState.user} make={_updatePost}/>
                        <Post path={"/post-create"} logged={authState.user} make={_createPost}/>
                        <Login path={"/login"} login={_loginUser} logout={_logoutUser}/>
                    </Main>
                </Router>
        </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
