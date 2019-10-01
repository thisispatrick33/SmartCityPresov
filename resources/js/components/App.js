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

    {/*
        Auxiliary variable for store user data
    */}

    const [authState, setAuthState] = useState({
        isLoggedIn: false,
        user: {}
    });

    {/*
        Before start check state of user isLoggedIn
    */}

   useEffect(() => {
        let state = localStorage[`authState`];
        if (state) {
            let AppState = JSON.parse(state);
            setAuthState(AppState);
        }
    },[authState]);

    {/*

        User Functions

    */}

    const _loginUser = (email,password) => {
        let formData = new FormData();
        formData.append(`email`, email);
        formData.append(`password`, password);
        axios
            .post(`/api/auth/login/`, formData,{
                headers : {
                    'Content-Type' : `application/json`,
                    'Accept' : `application/json`,
                }
            })
            .then(response => {
                return response;
            })
            .then(({data}) => {
                if (data.success) {
                    alert(`Prihlásenie prebehlo úspešne !`);
                    let authState = {
                        isLoggedIn: true,
                        user: {
                            id: data.data.id,
                            name: data.data.name,
                            email: data.data.email,
                            auth_token : data.data.auth_token,
                            timestamp: new Date().toString()
                        }
                    };
                    localStorage[`authState`] = JSON.stringify(authState);
                    setAuthState(authState.user);
                    navigate(`/`);
                } else alert(`Nesprávne prihlasovacie údaje`);

                $(`#login-form button`)
                    .removeAttr(`disabled`)
                    .html(`Login`);
            })
            .catch(error => {
                alert(`Nastala chyba ! ${error}`);
                $(`#login-form button`)
                    .removeAttr(`disabled`)
                    .html(`Login`);
            });
    };
    const _logoutUser = () => {
        let authState = {
            isLoggedIn: false,
            user: {}
        };

        localStorage[`authState`] = JSON.stringify(authState);
        setAuthState(authState);
    };


    {/*

        Post Functions

    */}

    const _createPost = ( {title, description, price, user_id, subpage_id, images } ) => {
        let formData = new FormData();
        formData.append(`title`, title);
        formData.append(`description`, description);
        formData.append(`price`, price);
        formData.append(`user_id`, user_id);
        formData.append(`subpage_id`, subpage_id);
        if(!images){
            console.log("sem som");
        }
        else {
            console.log("aj tu som");
            Array.from(images).forEach(image => formData.append(`images[]`, image));
        }

        axios
            .post(`/api/post`, formData,{
                headers : {
                    'Content-Type' : `multipart/form-data`,
                    'Accept' : `multipart/form-data`,
                    'Authorization' : `Bearer ${authState.user.auth_token}`
                }
            })
            .then(response => {
                console.log(response)
            })
            .then(( {data} ) => {
                alert(data.success ? `Úspešne si vytvoril článok.` : `Článok sa nepodarilo vytvoriť!`);
            });
    };

    const _updatePost = ( {id, title, description, price, subpage_id, images, updated_images} ) => {
        const formData = new FormData();
        formData.append(`id`, id);
        formData.append(`title`, title);
        formData.append(`description`, description);
        formData.append(`price`, price);
        formData.append(`subpage_id`, subpage_id);
        Array.from(images).forEach(image => formData.append(`images[]`, image));
        Array.from(updated_images).forEach(image => formData.append(`updated_images[]`, image));

        axios.post(`/api/post/edit`, formData,{
            headers : {
                'Content-Type' : `multipart/form-data`,
                'Accept' : `multipart/form-data`,
                'Authorization' : `Bearer ${authState.user.auth_token}`
            }
        })
            .then(response => {
                return response;
            })
            .then(( {data} ) => {
                alert(data.success ? `Úspešne si úpravil článok.` : `Článok sa nepodarilo upraviť!`);
            });
    };


    const _deletePost = (id, title_link) => {
        axios.put(`/api/post/delete`, {id : id},{
            headers : {
                'Content-Type' : `application/json`,
                'Accept' : `application/json`,
                'Authorization' : `Bearer ${authState.user.auth_token}`
            }
        })
            .then(response => {
                console.log(response);
            })
            .then(( {data} ) => {
                alert(data === 200 ? `Článok sa úspešne vymazal` : `Článok sa nepodarilo vymazať!`);
            });
        navigate(`/${title_link}`);
    };
    return (
        <div className={`row col-12 | p-0`}>
                <Router>
                    <Main path={`/`} auth={authState} logout={_logoutUser}>
                        <Home path={`/`} />
                        <Subpage path={`:id`} hide={_deletePost} logged={authState.isLoggedIn ? authState.user : false}/>
                        <Post path={"/posts/:id"} logged={authState.user} post={_updatePost} hide={_deletePost}/>
                        <Post path={"/post-create"} logged={authState.user} post={_createPost}/>
                        <Login path={"/login"} login={_loginUser} logout={_logoutUser}/>
                    </Main>
                </Router>
        </div>
    );
};

{/*
    React export
*/}

ReactDOM.render(<App />, document.getElementById("root"));
