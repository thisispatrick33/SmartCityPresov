import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";

import { Router, navigate } from "@reach/router"
import { Home }  from "./Home";
import { Main } from "./Main";
import { Subpage }  from "./subpage/Subpage";
import { Post } from "./news/Post";
import { Login } from "./admin/Login";
import axios from "axios";
import {CreatePost} from "./admin/CreatePost";
import {UpdatePost} from "./admin/UpdatePost";

const App = () => {

    {/*
        Auxiliary variable for store user data
    */}

    const [authState, setAuthState] = useState({isLoggedIn: false, user: {}});
    const [post, setPost] = useState(null);
    const [subpageData, setSubpageData] = useState(JSON.parse(localStorage.getItem("subpageData"))==null ? null : JSON.parse(localStorage.getItem("subpageData")).data);
    const [currentSubpage, setCurrentSubpage] = useState(null);

    const [project, setProject] = useState(null);
    const [author, setAuthor] = useState(null);

    const [newsPosts, setNewsPosts] = useState([]);

    const [subpages, setSubpages] = useState(null);

    const [version, setVersion] = useState( JSON.parse(localStorage.getItem("subpageData"))==null ? null : JSON.parse(localStorage.getItem("subpageData")).version);


    const config_aplication_json = {
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization' : '',
        }
    };

    const config_multipart_form_data = {
        headers : {
            'Accept' : `multipart/form-data`,
            'Content-Type' : `multipart/form-data`,
            'Authorization' : '',
        }
    };

    {/*
        Before start check state of user isLoggedIn
    */}

   useEffect( () => {
        let state = JSON.parse(localStorage.getItem("authState"));
        if (state !== null && state.isLoggedIn && !authState.isLoggedIn) {
            let AppState = state;
            setAuthState(AppState);
        }
        let controlSubpage = JSON.parse(localStorage.getItem("subpageData"));
        if(controlSubpage === null){
            localStorage["subpageData"] = JSON.stringify({data:null, version:null});
        }

        getPosts();

        if(window.location.pathname!=="/create" && window.location.pathname.indexOf("/update/")===-1 && window.location.pathname!=="/login"){
            subpageFetchData();
        }


        getSubpages();

    },[authState]);

    {/*

        User Functions

    */}

    const _postData = async (url, data, config) => await axios.post(url, data, config);

    const _getData = async (url, config) => await axios.get(url, config);

    const _putData = async (url, data, config) => await axios.put(url, data, config);

    const _loginUser = (email,password) => {
        let formData = new FormData();
        formData.append(`email`, email);
        formData.append(`password`, password);
        _postData(`/api/auth/login/`, formData, config_aplication_json)
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
                    config_aplication_json.headers['Authorization'] =  'Bearer '+authState.user.auth_token;
                    config_multipart_form_data.headers['Authorization'] =  'Bearer '+authState.user.auth_token;
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
        let authState = { isLoggedIn: false, user: {}};
        localStorage[`authState`] = JSON.stringify(authState);
        setAuthState(authState);
        config_aplication_json.headers['Authorization'] =  null;
        config_multipart_form_data.headers['Authorization'] =  null;
    };


    {/*

        Post Functions

    */}

    const _createPost = ( creationData ) => {
        console.log(creationData);
        config_multipart_form_data.headers['Authorization'] =  'Bearer '+authState.user.auth_token;
        let formData = new FormData();
        formData.append(`title`, creationData.title);
        formData.append(`description`, creationData.description);
        formData.append(`price`, creationData.price);
        formData.append(`user_id`, 5);
        formData.append(`author`, creationData.author);
        formData.append(`subpage_id`, creationData.subpageId);
        formData.append(`done`, creationData.done);
        if(!creationData.images){
        }
        else {
            Array.from(creationData.images).forEach(image => formData.append(`images[]`, image));
        }
        _postData(`/api/post`, formData, config_multipart_form_data)
            .then(response => {
                console.log(response);
                if(response.status==200){
                    alert(`Úspešne si vytvoril článok.`);
                }
                else {
                    alert(`Článok sa nepodarilo vytvoriť!`);
                }
            })
    };

    const _updatePost = ( updatedData ) => {
        console.log(updatedData);
        config_multipart_form_data.headers['Authorization'] =  'Bearer '+authState.user.auth_token;
        const formData = new FormData();
        formData.append(`id`, updatedData.id);
        formData.append(`title`, updatedData.title);
        formData.append(`description`, updatedData.description);
        formData.append(`price`, updatedData.price);
        formData.append(`subpage_id`, updatedData.subpage_id);
        Array.from(updatedData.images).forEach(image => formData.append(`images[]`, image));
        Array.from(updatedData.updated_images).forEach(image => formData.append(`updated_images[]`, image));
        formData.append(`done`, updatedData.done);
        formData.append(`user_id`, 5);
        formData.append(`author`, updatedData.author);

        _postData(`/api/post/edit`, formData, config_multipart_form_data)
            .then(response => {
                console.log(response);
                return response;
            })
            .then(( {data} ) => {
                alert(data==200? `Úspešne si úpravil článok.` : `Článok sa nepodarilo upraviť!`);
            });
    };


    const _deletePost = (id, title_link) => {
        config_aplication_json.headers['Authorization'] =  'Bearer '+authState.user.auth_token;
        console.log(config_aplication_json);
        _putData(`/api/post/delete`, {id : id}, config_aplication_json).then(response => {
                alert(response.status==200 ? `Článok sa úspešne vymazal` : `Článok sa nepodarilo vymazať!`);
            });
        navigate(`/${title_link}`);
    };

    const getPosts = () => { _getData("/api/post", config_aplication_json).then(res => { setPost(res.data); }); };

    const subpageFetchData = () => {
        _getData("api/version", config_aplication_json).then(versionResponse => {
            console.log(versionResponse.data);
            console.log(versionResponse.data[window.location.pathname]);
            if (( version === null || version[window.location.pathname] === null || version[window.location.pathname] !== versionResponse.data[window.location.pathname]) || (subpageData === null || subpageData[window.location.pathname] === undefined || subpageData[window.location.pathname] === null)) {
                console.log("fetching from server");
                _getData(`api${window.location.pathname}`, config_aplication_json)
                    .then(res => {
                        setSubpageData({...subpageData, [window.location.pathname]: res.data.subpage});
                        setVersion({...version, [window.location.pathname]: versionResponse.data[window.location.pathname]});

                        console.log(versionResponse.data[window.location.pathname]);
                        localStorage[`subpageData`] = JSON.stringify({
                            data: {...subpageData, [window.location.pathname]: res.data.subpage},
                            version : {...version, [window.location.pathname]: versionResponse.data[window.location.pathname]}
                        });
                        setCurrentSubpage(res.data.subpage);
                        console.log(window.location.pathname);
                    });
            }
            else {
                console.log("already saved");
                setCurrentSubpage(subpageData[window.location.pathname]);
            }
        });
    };

    const getPost = id => {
        fetch(`/api/post/${id}`)
            .then(response => response.json())
            .then(postData => {
                setProject(postData);
            });
    };

    const getNews = () => {
        fetch(`/api/news`)
            .then(response => response.json())
            .then(posts => {
                setNewsPosts(posts.reverse());
            });
    };

    const closePost = () => {
        setProject(null);
        setAuthor([]);
    };

    const getSubpages = () =>{
        fetch(`/api/`)
            .then(response => response.json())
            .then(subpages => {
                setSubpages(subpages);
            });
    };

    return (
        <div className={`row col-12 | p-0 m-0`}>
                <Router>
                    <Main path={`/`} auth={authState} logout={_logoutUser} changeSubpage={subpageFetchData} getNewsPosts={getNews} newsPosts={newsPosts} subpages={subpages}>
                        <Home path={`/`} getposts={post} getpost={getPost} project={project} author={author} closePost={closePost} changeSubpage={subpageFetchData}/>
                        <Subpage path={`:id`} hide={_deletePost} logged={authState.isLoggedIn ? authState.user : false} data={currentSubpage} getpost={getPost} project={project} author={author} closePost={closePost} />
                        <Post path={"/posts/:id"} logged={authState.user} getpost={getPost} project={project} author={author} post={_updatePost} hide={_deletePost}/>
                        <Post path={"/post-create"} logged={authState.user} getpost={getPost} project={project} author={author} post={_createPost}/>
                        <Login path={"/login"} login={_loginUser} logout={_logoutUser}/>
                        <CreatePost path={"/create"} logged={authState.user} changeSubpage={subpageFetchData} post={_createPost}/>
                        <UpdatePost path={"/update/:id"} logged={authState.user} changeSubpage={subpageFetchData} post={_updatePost} getpost={getPost} project={project}/>
                    </Main>
                </Router>
        </div>
    );
};

{/*
    React export
*/}

ReactDOM.render(<App />, document.getElementById("root"));
