import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import { Router, navigate } from "@reach/router";

import { Home }  from "./Home";
import { Main } from "./Main";
import { Subpage }  from "./subpage/Subpage";
import { Login } from "./admin/Login";
import { CreatePost } from "./admin/CreatePost";
import { UpdatePost } from "./admin/UpdatePost";
import { AdministrationPage } from "./admin/AdministrationPage";

import axios from "axios";


const App = () => {

    const [authState, setAuthState] = useState({isLoggedIn: false, user: {}});

    const [currentSubpage, setCurrentSubpage] = useState(null);

    const [subpageData, setSubpageData] = useState(JSON.parse(localStorage.getItem("subpageData"))==null ? null : JSON.parse(localStorage.getItem("subpageData")).data);
    const [version, setVersion] = useState( JSON.parse(localStorage.getItem("subpageData"))==null ? null : JSON.parse(localStorage.getItem("subpageData")).version);

    const [homeNewestPosts, setHomeNewestPosts] = useState(null);

    const [project, setProject] = useState(null);

    const [allPosts, setAllPosts] = useState(null);

    const [showSearchBar, setShowSearchBar] = useState(false);


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

   useEffect( () => {
        let state = JSON.parse(localStorage.getItem("authState"));
        if (state !== null && state.isLoggedIn && !authState.isLoggedIn) {
            setAuthState(state);
        }
        let controlSubpage = JSON.parse(localStorage.getItem("subpageData"));
        if(controlSubpage === null){
            localStorage["subpageData"] = JSON.stringify({data:null, version:null});
        }

       _getData("/api/post", config_aplication_json).then(res => { setHomeNewestPosts(res.data); });

        if(window.location.pathname!=="/administration" && window.location.pathname!=="/create" && window.location.pathname.indexOf("/update/")===-1 && window.location.pathname!=="/login" &&  window.location.pathname!=="/"){
            subpageFetchData();
        }
    },[authState]);



    const _postData = async (url, data, config) => await axios.post(url, data, config);

    const _getData = async (url, config) => await axios.get(url, config);

    const _putData = async (url, data, config) => await axios.put(url, data, config);

    const _loginUser = (email,password) => {
        let formData = new FormData();
        formData.append(`email`, email);
        formData.append(`password`, password);
        _postData(`/api/auth/login`, formData, config_aplication_json)
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
                    navigate(`/administration`);
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


    const _createPost = ( creationData ) => {
        config_multipart_form_data.headers['Authorization'] =  'Bearer '+authState.user.auth_token;
        let formData = new FormData();
        formData.append(`title`, creationData.title);
        formData.append(`description`, creationData.description);
        formData.append(`price`, creationData.price);
        formData.append(`user_id`, 5);
        formData.append(`author`, creationData.author);
        formData.append(`subpage_id`, creationData.subpage_id);
        formData.append(`done`, creationData.done);
        if(!creationData.images){
        }
        else {
            Array.from(creationData.images).forEach(image => formData.append(`images[]`, image));
        }
        _postData(`/api/post`, formData, config_multipart_form_data)
            .then(response => {
                alert(response.status==200? `Úspešne si vytvoril článok.` : `Článok sa nepodarilo vytvoriť!`);
                setProject(null);
                getAllPosts();
                navigate(`/administration`);
            });

    };

    const _updatePost = ( updatedData ) => {
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
                return response;
            })
            .then(( {data} ) => {
                alert(data==200? `Úspešne si úpravil článok.` : `Článok sa nepodarilo upraviť!`);
                setProject(null);
                getAllPosts();
                navigate(`/administration`);
            });

    };


    const _showPost = (id, show) => {
        config_aplication_json.headers['Authorization'] =  'Bearer '+authState.user.auth_token;
        _putData(`/api/post/show`, {id : id, show : show}, config_aplication_json).then(response => {
                alert(response.status==200 ? `Článok sa úspešne aktualizoval` : `Článok sa nepodarilo aktualizovať!`);
            });
        getAllPosts();
    };

    const subpageFetchData = (value = window.location.pathname, control = true) => {
        _getData("api/version", config_aplication_json).then(versionResponse => {
            if (( version === null || version[value] === null || version[value] !== versionResponse.data[value]) || (subpageData === null || subpageData[value] === undefined || subpageData[value] === null)) {

                _getData(`api${value}`, config_aplication_json)
                    .then(res => {
                        setSubpageData({...subpageData, [value]: res.data.subpage});
                        setVersion({...version, [value]: versionResponse.data[value]});
                        localStorage[`subpageData`] = JSON.stringify({
                            data: {...subpageData, [value]: res.data.subpage},
                            version : {...version, [value]: versionResponse.data[value]}
                        });
                        if(control){
                            setCurrentSubpage(res.data.subpage);
                        }
                    });
            }
            else {
                if(control){
                    setCurrentSubpage(subpageData[value]);
                }
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

    const getAllPosts = () =>{
        _getData("/api/postAll", config_aplication_json)
            .then(res => {
                setAllPosts(res.data);
            });
    };

    const getPostsSearch = () =>{
        _getData("api/version", config_aplication_json).then(versionResponse => {
            _getData(`api/mobilita`, config_aplication_json)
                .then(res => {
                    return {"/mobilita" : res.data.subpage};
                })
                .then((data) => {
                    _getData(`api/zivotne_prostredie`, config_aplication_json)
                        .then(res => {
                            return {...data, "/zivotne_prostredie" : res.data.subpage};
                        })
                        .then((data) => {
                            _getData(`api/digitalne_mesto`, config_aplication_json)
                                .then(res => {
                                    return {...data, "/digitalne_mesto" : res.data.subpage};
                                })
                                .then((data) => {
                                    _getData(`api/energia`, config_aplication_json)
                                        .then(res => {
                                            return  {...data, "/energia" : res.data.subpage};
                                        })
                                        .then((data) => {
                                            setSubpageData(data);
                                            setVersion({...version, "/mobilita" : versionResponse.data["/mobilita"], "/zivotne_prostredie" : versionResponse.data["/zivotne_prostredie"], "/digitalne_mesto" : versionResponse.data["/digitalne_mesto"], "/energia" : versionResponse.data["/energia"]});
                                            localStorage[`subpageData`] = JSON.stringify({
                                                data: data,
                                                version : {...version, "/mobilita": versionResponse.data["/mobilita"], "/zivotne_prostredie": versionResponse.data["/zivotne_prostredie"], "/digitalne_mesto": versionResponse.data["/digitalne_mesto"], "/energia": versionResponse.data["/energia"]}
                                            });
                                        })
                                })
                        })
                })
        });
    };

    return (
        <div className={`row col-12 | p-0 m-0`}>
                <Router>
                    <Main path={`/`} changeSubpage={() => subpageFetchData()} setShowSearchBar={value => setShowSearchBar(value)}>
                        <Home path={`/`} _homeNewestPosts={homeNewestPosts} getpost={getPost} project={project} closePost={()=>setProject(null)} changeSubpage={() => subpageFetchData()} showSearchBar={showSearchBar} closeSearchBar={() => {$('body,html').css('overflowY', 'scroll'); setShowSearchBar(false)}} searchFetchData={() => getPostsSearch()} allSubpageData={subpageData}/>
                        <Subpage path={`:id`} data={currentSubpage} getpost={getPost} project={project} closePost={()=>setProject(null)} showSearchBar={showSearchBar} closeSearchBar={() => {$('body,html').css('overflowY', 'scroll'); setShowSearchBar(false)}} searchFetchData={() => getPostsSearch()} allSubpageData={subpageData}/>
                        <Login path={"/login"} login={_loginUser}/>
                        <CreatePost path={"/create"} logged={authState.user} post={_createPost}/>
                        <UpdatePost path={"/update/:id"} logged={authState.user} post={_updatePost} getpost={getPost} project={project}/>
                        <AdministrationPage path={"/administration"} logged={authState.user} changeSubpage={() => subpageFetchData()} getAllPosts={getAllPosts} allPosts={allPosts} show={(id, show) => _showPost(id, show)} clear={()=>setProject(null)}/>
                    </Main>
                </Router>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
