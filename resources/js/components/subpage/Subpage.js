import React, {useEffect, useState} from "react";
import { Loader } from "../Utillities";
import { Project } from './Project';
import { Link } from "@reach/router";
import $ from "jquery";

export const Subpage = ({id, logged, hide = f => f, data}) => {

    {/*
        Auxiliary variable for store subpage, project and author data
    */}

    const [subpage, setSubpage] = useState([]);
    const [project, setProject] = useState(null);
    const [author, setAuthor] = useState([]);

    {/*
        Handlers
    */}
    const handleDelete = (_id,_title_link) => {
        hide(_id, _title_link);
    };


    const close = () => {
        $('.project-details-frame .project-content').animate({
            marginTop: '100vh',
            easing: 'easeInOutCirc'
        },1000);
        $('.project-details-frame').fadeToggle("slow", () => setProject(null));
    };
    const handleGet = (_id) => {
        fetch(`/api/post/${_id}`)
            .then(response => response.json())
            .then(postData => {
                setProject(postData);
                fetch(`/api/author/${postData.user_id}`)
                    .then(response => response.json())
                    .then(({data}) => {
                        setAuthor( data );
                    })
            })
    };
    useEffect( () => {
        console.log(data);
        setSubpage(data);
    },[data]);

    if(logged){
        if(subpage===null || !subpage.title){
            return <Loader/>;
        }

        return (
            <div className={` subpage-content | row col-12 | justify-content-center | align-items-start`}>
                <h1 className={` title | col-xl-12 col-lg-12 col-11 | mt-4 | text-center`}>{subpage.title}</h1>
                <p className={` description | col-xl-12 col-lg-12 col-11 | mt-5 | text-center`}  dangerouslySetInnerHTML={{__html: subpage.description}} />
                <div className={` projects-frame | row col-xl-12 col-lg-12 col-11 | justify-content-center `}>
                    <h3 className={`projects-title | col-12 | my-5 p-0`}>projekty smartcity prešov - <span className={"projects-category"}>{subpage.title}</span></h3>
                    <div className={`projects | row col-12 | p-0`}>
                        {subpage.posts.map(({id, title, description, user, image, updated_at}) => {
                            let written = new Date(updated_at.replace(' ', 'T'));
                            return ( <div className={`project-frame | row col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 | justify-content-xl-start justify-content-lg-start justify-content-md-center justify-content-sm-center justify-content-center | mb-4 p-0`} key={id}>
                                <div className={`shadow project | row col-10 | align-items-start | p-0 `}>
                                    <div className={`row col-12 | p-0 `}>
                                        <div className={`col-12 | p-0`}><img src={`../${image.substr(image.indexOf('img'))}`} alt="" className={`col-12 | p-0`} style={{borderRadius : "10px 10px 0 0"}}/></div>
                                    </div>
                                    <h3 className={`col-12 | mt-3 py-0 px-3`}>{title}</h3>
                                    <p className={`col-12 | mb-3 py-0 px-3`}>{description.substring(0, description.includes(".") ? description.indexOf(".")+1 : 50)} <a href={`/api/post/${id}`} className={"read_more"}>Objav viac</a></p>
                                    <p className={`col-12 | mb-0 py-0  px-3`}><span>Dátum : </span>{ String(new Date(written).getDay()) + `/` + (new Date(written).getMonth()+1) + `/` + new Date(written).getFullYear() }</p>
                                    <p className={`col-12 | py-0 px-3`}><span>Autor : </span>{user.name}</p>
                                    {
                                        logged.name !== user.name ? `` : <div className="col-12 row mb-2">
                                            <Link to={`/posts/${id}`} state={{ subpage : subpage.id }} className={"edit | d-flex mx-2 justify-content-center align-items-center p-2 shadow"}><div style={{width : 28, height : 28}}><img style={{width : 28, height : 28}} src="../img/edit.svg" alt=""/></div></Link>
                                            <div onClick={() => handleDelete(id, subpage.title_link)} className={"delete | d-flex mx-2 justify-content-center align-items-center p-2 shadow"}><div style={{width : 28, height : 28}}><img style={{width : 28, height : 28}} src="../img/delete.svg" alt=""/></div></div>
                                        </div>
                                    }
                                </div>
                            </div>

                            );
                        })}
                        <div className={"project-frame row col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 p-0 justify-content-xl-start justify-content-lg-start justify-content-md-center justify-content-sm-center justify-content-center mb-4"}>
                            <div className="project col-10 row shadow p-0 justify-content-center align-items-center">
                                <Link className="justify-content-center row my-3" to={"/post-create"} state={{subpage : subpage.id}}>
                                    <div className="col-xl-5 col-lg-6 col-md-7 col-sm-6 col-6">
                                        <img src="../img/file.png" alt="" className={"col-12"}/>
                                    </div>
                                    <h3 className={"col-12 py-0 px-3 mt-3 text-center"}>pridajte projekt</h3>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else{

        {/*
           Subpage content, for public
        */}
        if(subpage===null ||!subpage.title){
            return <Loader/>;
        }
        return (
            <div className={"subpage-content  col-12 row align-items-start justify-content-center"}>
                <h1 className={"col-xl-12 col-lg-12 col-11 text-center mt-4"}>{subpage.title}</h1>
                <p className={"col-xl-12 col-lg-12 col-11 text-center description mt-5"}  dangerouslySetInnerHTML={{__html: subpage.description}} />
                <div className="col-xl-12 col-lg-12 col-11 justify-content-center  projects-frame row">
                    <h3 className={"col-12 projects-title my-5"}>projekty smartcity prešov - <span className={"projects-category"}>{subpage.title}</span></h3>
                    <div className="col-12 row projects p-0 align-items-start">
                        {subpage.posts.map(({id, title, description, user, image, updated_at}) => {
                            let written = new Date(updated_at.replace(' ', 'T'));
                            return ( <div onClick={() => handleGet(id)} className={`project-frame | row col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 | justify-content-xl-start justify-content-lg-start justify-content-md-center justify-content-sm-center justify-content-center | mb-4 p-0`} key={id}>
                                    <div className={`shadow project | row col-10 | align-items-start | p-0 `}>
                                        <div className={`row col-12 | p-0 `}>
                                            <div className={`col-12 | p-0`}><img src={`../${image.substr(image.indexOf('img'))}`} alt="" className={`col-12 | p-0`} style={{borderRadius : "10px 10px 0 0"}}/></div>
                                        </div>
                                        <h3 className={`col-12 | mt-3 py-0 px-3`}>{title}</h3>
                                        <p className={`col-12 | mb-0 py-0 px-3`}>{description.substring(0, 50)}</p>
                                        <p className={`col-12 | mb-3 py-0 px-3`}><a className={"read_more"}>Objav viac</a></p>
                                        <p className={`col-12 | mb-0 py-0  px-3`}><span>Dátum : </span>{ String(new Date(written).getDay()) + `/` + (new Date(written).getMonth()+1) + `/` + new Date(written).getFullYear() }</p>
                                        <p className={`col-12 | py-0 px-3`}><span>Autor : </span>{user.name}</p>

                                    </div>
                                </div>

                            );
                        })}
                    </div>
                </div>
                {
                    project !== null ? <Project data={project} user={author} close={close}/> : null
                }
            </div>
        );
    }
};

