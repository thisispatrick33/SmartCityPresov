import React, {useEffect, useState } from "react";
import { navigate } from '@reach/router';

export const AdministrationPage = ({logged, changeSubpage, getAllPosts = f => f, allPosts, hide = f => f, clear}) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        if(allPosts===null){
            getAllPosts();
        }
        else {
            setData(allPosts);
        }
    }, [allPosts]);

    const _update = (id) =>{
        clear();
        navigate(`/update/${id}`);
    };

    const _create = () =>{
        navigate('/create');
    };

    const _delete = (id) =>{
        hide(id);
    };

    if(logged.id!==undefined){
        if(data===null){
            return (
                <div>
                    Loading...
                </div>
            )
        }
        else {
            return (
                <div className={"row"}>
                    <div className={"col-12"}>Pripravujeme</div>
                    {data.filter(item => item.done === 0).map(({id, title, image, author, description})=>{
                        return(
                            <div className={'project-outlook-frame | col-2 | mx-0 my-2 p-0 | justify-content-center'}>
                                <div className={'project-outlook | row col-xl-11 col-lg-11 col-md-11 col-12 | m-0 p-0'}>
                                    <div className={'project-cover-image | col-12 | m-0 p-0 | justify-content-center'}>
                                        <img src={image} alt="project-cover-image" className={'col-12 | p-0'}/>
                                    </div>
                                    <div className={'project-content | row col-12 | m-0 p-0 | justify-content-center'}>
                                        <div className={'col-10 | p-0 mx-0 mt-3 mb-2'}>
                                            <h4 className={'title | mb-1'}>{id}</h4>
                                            <h4 className={'title | mb-1'}>{title}</h4>
                                            <h4 className={'mb-1'}>{author}</h4>
                                            <p className={'description'}>
                                                {description.substring(0, 200)}...
                                                <br/>
                                                <span className={'show-more'} onClick={() => _update(id)}>Edit</span>
                                                <span className={'show-more'} onClick={() => _delete(id)}>Delete</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    <div className={"col-12"}>Ukoncene</div>
                    {data.filter(item => item.done === 1).map(({id, title, image, author, description})=>{
                        return(
                            <div className={'project-outlook-frame | col-2 | mx-0 my-2 p-0 | justify-content-center'}>
                                <div className={'project-outlook | row col-xl-11 col-lg-11 col-md-11 col-12 | m-0 p-0'}>
                                    <div className={'project-cover-image | col-12 | m-0 p-0 | justify-content-center'}>
                                        <img src={image} alt="project-cover-image" className={'col-12 | p-0'}/>
                                    </div>
                                    <div className={'project-content | row col-12 | m-0 p-0 | justify-content-center'}>
                                        <div className={'col-10 | p-0 mx-0 mt-3 mb-2'}>
                                            <h4 className={'title | mb-1'}>{id}</h4>
                                            <h4 className={'title | mb-1'}>{title}</h4>
                                            <h4 className={'mb-1'}>{author}</h4>
                                            <p className={'description'}>
                                                {description.substring(0, 200)}...
                                                <br/>
                                                <span className={'show-more'} onClick={() => _update(id)}>Edit</span>
                                                <span className={'show-more'} onClick={() => _delete(id)}>Delete</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    <div className={"col-12"} onClick={() => _create()}>Create</div>
                </div>
            );
        }
    }
    else {
        return (
            <div>
                <h1>Unauthorized</h1>
                <div onClick={()=>{navigate(`/`); changeSubpage()}}>
                    <h1>Go back!</h1>
                </div>
            </div>
        )
    }
};