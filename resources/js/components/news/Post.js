import React, { useEffect, useState } from "react";
import { Loader } from "../Utillities";

export const Post = ({ id, logged, make = f => f , location}) => {
    let _idControl = (id !== undefined);
    const [postData, setPostData] = useState([]);
    const [user, setUser] = useState([]);
    if(_idControl){
        useEffect(() => {
            fetch(`/api/post/${id}`)
                .then(response => response.json())
                .then(postData => {
                    setPostData(postData);
                    fetch(`/api/author/${postData.user_id}`)
                        .then(response => response.json())
                        .then(user => {
                            setUser(user);
                        })
                })
        }, [id]);
    }
    const handleSubmit = e => {
        e.preventDefault();
        make({
            ...postData,
            user_id : _idControl ? user.data.id : logged.id,
            subpage_id : location.state.subpage
        });
    };
    const date = new Date();
    if((!postData || !user.data) && _idControl){
        return <Loader />;
    }
    let control = _idControl ? (user.data.name  === logged.name)  : true;
    if(logged.name){
        return (
            <form onSubmit={handleSubmit} method={_idControl ? "PUT" : "POST"} className={"admin-form mt-4 row col-12"}>
                {
                    control ? "" : (
                        <label className={"col-12 row warning p-2 mb-5  justify-content-start align-items-center"} htmlFor="info">
                            <p className={"col-12 mb-0"}><span className={"pr-3"}><img style={{width : 24, height : 24}} src="../img/danger.svg" alt=""/></span> Hmm...toto nie je tvoj článok, ale tak, prečítaj si ho.</p>
                        </label>
                    )
                }
                <label htmlFor={`post`} className={`col-12 p-0 row`}>
                    <label htmlFor={`post-data`} className={`col-10 p-0`}>
                        <label className={"col-12 mb-5 row title p-2 justify-content-start"} htmlFor={"title"}>
                            <h2 className="mb-0 col-11 p-0 ml-4 mb-0">názov</h2>
                            <p className={"col-11 ml-4 p-0 mb-0"}>krátky, pútavý, no proste zaujmi <span><img style={{width : 24, height : 24}} src="../img/wink.svg" alt=""/></span></p>

                            <div className="col-4 p-0 ml-4">
                                <hr/>
                            </div>
                            <input
                                name={"title"}
                                value={postData.title}
                                placeholder={"Zadajte názov"}

                                onChange={e => {setPostData({...postData,title : e.target.value})}}

                                disabled={!control}
                                className={"col-11 mt-3 px-0 py-2 ml-4"}
                            />
                        </label>

                        <label className={"description col-12 mb-5 row p-2 justify-content-start"} htmlFor={"description"}>
                            <h2 className="mb-0 col-11 p-0 ml-4 mb-0">popisok</h2>
                            <p className={"col-11 ml-4 p-0 mb-0"}>{control ? "teraz sa ukáž a predveď svoj skill v písaní" : "ten frajer nižšie napísal celkom fajn sloh, že"} <span><img style={{width : 24, height : 24}} src="../img/happy.svg" alt=""/></span></p>
                            <div className="col-4 p-0 ml-4">
                                <hr/>
                            </div>
                            <textarea
                                name={"description"}
                                placeholder={"Zadajte popis"}
                                value={postData.description}

                                onChange={e => {setPostData({...postData,description : e.target.value})}}

                                className={"col-11 mt-3 px-0 py-2 ml-4"}
                                disabled={!control}
                                rows={5}
                            />
                        </label>
                        <label className={"col-12 mb-5 row autor p-2 justify-content-start"} htmlFor="autor">
                            <label className={"col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mb-5 row autor p-2 justify-content-start"} htmlFor="autor">
                                <h4 className="mb-0 col-11 p-0 ml-4 mb-0">autor</h4>
                                <p className={"col-11 ml-4 p-0 mb-0"}>{control ? "len aby si vedel ako sa voláš" : "toto asi nie je tvoje meno"} <span><img style={{width : 24, height : 24}} src="../img/laughing.svg" alt=""/></span></p>
                                <div className="col-8 p-0 ml-4">
                                    <hr/>
                                </div>
                                <br/>
                                <input disabled={true} name={"user"} className={"col-8 px-0 py-2 ml-4"} value={_idControl ? user.data.name : logged.name} />

                            </label>
                            <label className={"col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mb-5 row title p-2 justify-content-start"} htmlFor="title">
                                <h4 className="mb-0 col-11 p-0 ml-4 mb-0">dátum - posledná zmena</h4>
                                <p className={"col-11 ml-4 p-0 mb-0"}>{control ?  "po uložení zmien sa automaticky upraví" :"upravoval to presne vtedy"}</p>
                                <div className="col-8 p-0 ml-4">
                                    <hr/>
                                </div>
                                <br/>
                                <input disabled={true} className={"col-8 px-0 py-2 ml-4"} value={_idControl ? postData.updated_at : `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()+1} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`} />
                            </label>
                        </label>
                    </label>
                    <label htmlFor={`post-gallery`} className={`col-2 p-0`}>
                        <label className={"col-12 mb-5 row title justify-content-start"} htmlFor={"title"}>
                            <h2 className="mb-0 col-12 p-0 ml-1 mb-0">galéria</h2>
                            <p className={"col-12 ml-4 p-0 mb-0"}>fotky ? sem s nimi<span><img style={{width : 24, height : 24}} src="../img/wink.svg" alt=""/></span></p>
                            <div className="col-4 p-0 ml-4">
                                <hr/>
                            </div>
                            <input
                                name={"title"}
                                type={`file`}
                                placeholder={"Zadajte názov"}

                                disabled={!control}
                                className={"col-12 mt-3 px-0 py-2 ml-1"}
                            />
                        </label>
                    </label>
                </label>


                {
                    !control ? "" : (
                        <label className={"col-12 mb-5 row title p-2 justify-content-start"} htmlFor="button">
                            <p className={"col-11 ml-4 p-0 mb-0"}>Hej hej, je to fajn, skontroluj to a pacni ten button dole <span><img style={{width : 24, height : 24}} src="../img/cool.svg" alt=""/></span></p>
                            <input className={"col-4 p-2 mt-3 ml-4  mb-0"} type="submit" value={"potvrdiť"}/>
                        </label>
                    )
                }
            </form>

        );
    }else{
        return (
            <div className={"post-details mt-4 ml-5 row col-auto justify-content-center"}>
                <div className={"col-lg-12 col-sm-10 mb-5 row title p-2 justify-content-start"}>
                    <div className={"col-12 row p-0"}>
                        <h2 className="mb-0 p-0 pb-3 mb-0 col-auto">{postData.title}</h2>
                    </div>
                        <hr className={"m-0 mt-2 col-2"}/>
                </div>

                <div className={"description col-lg-12 col-sm-10 mb-5 row p-2 justify-content-start"}>
                    <p>{postData.description}</p>
                </div>
                <div className={"col-lg-12 col-sm-10 mb-5 row autor p-2 justify-content-start"} htmlFor="autor">
                    <p className={"col-lg-6 col-sm-12 px-0 py-2 "} >{user.data.name}</p>
                    <p className={"col-lg-6 col-sm-12 px-0 py-2 "}>{new Date(postData.updated_at).toLocaleDateString("en-US")} </p>
                </div>
            </div>
        );
    }

};
