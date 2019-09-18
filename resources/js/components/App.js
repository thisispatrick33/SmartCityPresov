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

        localStorage["authState"] = JSON.stringify(authState);
        setAuthState(authState);
    };
    const _createPost = ({title,description,price,user_id,subpage_id,images}) => {
        let formData = new FormData();
        formData.append("title",title);
        formData.append("description",description);
        formData.append("price",price);
        formData.append("user_id",user_id);
        formData.append("subpage_id",subpage_id);
        Array.from(images).forEach(image => formData.append('images[]', image));
        axios
            .post("/api/post", formData,{
                headers : {
                    'Content-Type' : 'multipart/form-data',
                    'Accept' : 'multipart/form-data',
                    'Authorization' : `Bearer ${authState.user.auth_token}`
                }
            })
            .then(response => {
                console.log(response)
            })
            .then(json => {
                if (!json) {
                    alert("Úspešne si vytvoril článok.");
                } else  alert("Úprava neprebehla, nastala chyba.");
            })


    };
    const _loginUser = (email,password) => {
        let formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        axios
            .post("/api/auth/login/", formData,{
                headers : {
                    'Content-Type' : 'application/json',
                }
            })
            .then(response => {
                return response;
            })
            .then(json => {
                if (json.data.success) {
                    alert("Login Successful!");
                    console.log(json.data);
                    let authState = {
                        isLoggedIn: true,
                        user: {
                            id: json.data.data.id,
                            name: json.data.data.name,
                            email: json.data.data.email,
                            auth_token : json.data.data.auth_token,
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


    const _updatePost = ({id,title,description,price,subpage_id,images,updated_images}) => {

        const formData = new FormData();
        formData.append("id", id);
        formData.append("title",title);
        formData.append("description",description);
        formData.append("price",price);
        formData.append("subpage_id",subpage_id);
        Array.from(images).forEach(image => formData.append('images[]', image));
        Array.from(updated_images).forEach(image => formData.append('updated_images[]', image));

        axios.post("/api/post/edit", formData,{
            headers : {
                'Content-Type' : 'multipart/form-data',
                'Accept' : 'multipart/form-data',
                'Authorization' : `Bearer ${authState.user.auth_token}`
            }
        })
            .then(response=>{console.log(response.data)})


    };


    const _deletePost = (postData) => {
        axios.put("/api/post/delete", {id : postData},{
            headers : {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : `Bearer ${authState.user.auth_token}`
            }
        })
            .then(response => {
                console.log(response)
            })
            .then(json => {
                if (!json) {
                    alert("Úspešne si upravil článok.");
                } else  alert("Úprava neprebehla, nastala chyba.");

            })
        //navigate(`/${subpage}`);
    };
    return (
        <div className={"col-12 p-0 row"}>
                <Router>
                    <Main path="/" auth={authState} logout={_logoutUser}>
                        <Home path="/" />
                        <Subpage path={":id"} del={_deletePost} logged={authState.isLoggedIn ? authState.user : false}/>
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
