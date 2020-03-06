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

    const [authState, setAuthState] = useState({isLoggedIn: false, user: {}});
    const [post, setPost] = useState(null);
    const [subpageData, setSubpageData] = useState(JSON.parse(localStorage.getItem("subpageData"))==null ? {data: null, version: 0} : JSON.parse(localStorage.getItem("subpageData")));
    const [currentSubpage, setCurrentSubpage] = useState(null);

    const [project, setProject] = useState(null);
    const [author, setAuthor] = useState(null);

    const [newsPosts, setNewsPosts] = useState([]);

    const [subpages, setSubpages] = useState(null);


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
        console.log("controlSubpgae");
        console.log(controlSubpage);
        if(controlSubpage === null){
            localStorage["subpageData"] = JSON.stringify({data:null, version:0});
        }

        getPosts();
        subpageFetchData();
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

    const _createPost = ( {title, description, price, user_id, subpage_id, images } ) => {
        config_multipart_form_data.headers['Authorization'] =  'Bearer '+authState.user.auth_token;
        let formData = new FormData();
        formData.append(`title`, title);
        formData.append(`description`, description);
        formData.append(`price`, price);
        formData.append(`user_id`, user_id);
        formData.append(`subpage_id`, subpage_id);
        if(!images){
        }
        else {
            Array.from(images).forEach(image => formData.append(`images[]`, image));
        }

        _postData(`/api/post`, formData, config_multipart_form_data)
            .then(response => {
                if(response.status==200){
                    alert(`Úspešne si vytvoril článok.`);
                }
                else {
                    alert(`Článok sa nepodarilo vytvoriť!`);
                }
            })

    };

    const _updatePost = ( {id, title, description, price, subpage_id, images, updated_images} ) => {
        config_multipart_form_data.headers['Authorization'] =  'Bearer '+authState.user.auth_token;
        const formData = new FormData();
        formData.append(`id`, id);
        formData.append(`title`, title);
        formData.append(`description`, description);
        formData.append(`price`, price);
        formData.append(`subpage_id`, subpage_id);
        Array.from(images).forEach(image => formData.append(`images[]`, image));
        Array.from(updated_images).forEach(image => formData.append(`updated_images[]`, image));

        _postData(`/api/post/edit`, formData, config_multipart_form_data)
            .then(response => {
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
        if(subpageData === null || subpageData.data===null || subpageData.data[window.location.pathname]===undefined || subpageData.data[window.location.pathname]===null){
            console.log("fetching from server");
            _getData(`api${window.location.pathname}`, config_aplication_json)
                .then( res => {
                    setSubpageData({...subpageData, data : {...subpageData.data, [window.location.pathname]: res.data.subpage}});
                    localStorage[`subpageData`] = JSON.stringify({...subpageData, data : {...subpageData.data, [window.location.pathname]: res.data.subpage}});
                    setCurrentSubpage(res.data.subpage);
                    console.log(window.location.pathname);
                });
        }
        else {
            console.log("already saved");
            setCurrentSubpage(subpageData.data[window.location.pathname]);
        }
    };

    const getPost = _id => {
        fetch(`/api/post/${_id}`)
            .then(response => response.json())
            .then(postData => {
                setProject(postData);
                fetch(`/api/author/${postData.user_id}`)
                    .then(response => response.json())
                    .then(({ data }) => {
                        setAuthor(data);
                    });
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
                    </Main>
                </Router>
        </div>
    );
};

{/*
    React export
*/}

ReactDOM.render(<App />, document.getElementById("root"));
