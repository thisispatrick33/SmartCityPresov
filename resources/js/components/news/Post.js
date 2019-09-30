import React, { useEffect, useState } from "react";
import { Loader } from "../Utillities";

export const Post = ({ id, logged, post = f => f , location }) => {
    let _idControl = (id !== undefined);
    const [postData, setPostData] = useState([]);
    const [user, setUser] = useState([]);
    const [images, setImages] = useState([]);
    if(_idControl){
        useEffect(() => {
            fetch(`/api/post/${id}`)
                .then(response => response.json())
                .then(postData => {
                    setPostData(postData);
                    setImages(postData.images)
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
        post({
            ...postData,
            updated_images : images.map(({id}) => id),
            user_id : _idControl ? user.data.id : logged.id,
            subpage_id : location.state.subpage ? location.state.subpage : null
        });
    };

    const handleImages = index => setImages(images.filter((image) => image.id !== index));

    const date = new Date();
    if((!postData || !user.data) && _idControl){
        return <Loader />;
    }
    let control = _idControl ? (user.data.name  === logged.name)  : true;
    if(logged.name){
        return (
            <form encType="multipart/form-data" onSubmit={handleSubmit} method={_idControl ? `PUT` : `POST`} className={`post-form | row col-12 | mt-4`}>
                {
                    /*
                     *  WARN
                     *  if you are not an owner of the post
                     */
                }
                {
                    control ? `` : (
                        <div className={`warning | row col-12 | justify-content-start | align-items-center | mb-5 p-2`}>
                            <p className={`col-12 | mb-0`}><span className={`pr-3`}><img style={{width : 24, height : 24}} src={`../img/danger.svg`} alt={`warning`}/></span> Hmm...toto nie je tvoj článok, ale tak, prečítaj si ho.</p>
                        </div>
                    )
                }

                {
                    /*
                    *  POST FORM
                    *  form for creating post to news or project to sub-page
                    */
                }
                <label htmlFor={`post-frame`} className={`post-frame | row col-12 | p-0`}>
                    <label htmlFor={`post-data`} className={`post-data | row col-10 | p-0`}>
                        <label className={`title | row col-12 | justify-content-start | mb-5 p-2`} htmlFor={`title`}>
                            <h2 className={`col-11 | p-0 ml-4 mb-0`}>názov</h2>
                            <p className={`col-11 | p-0 ml-4 mb-0`}>krátky, pútavý, no proste zaujmi <span><img style={{width : 24, height : 24}} src={`../img/wink.svg`} alt={`smile`}/></span></p>
                            <div className={`col-4 | p-0 ml-4`}>
                                <hr/>
                            </div>
                            <input
                                name={`title`}
                                value={postData.title}
                                placeholder={`Zadajte názov`}

                                onChange={e => {setPostData({...postData,title : e.target.value})}}

                                disabled={!control}
                                className={`col-11 | px-0 py-2 mt-3 ml-4`}
                            />
                        </label>
                        <label className={`description | row col-12 | justify-content-start | mb-5 p-2`} htmlFor={`description`}>
                            <h2 className={`col-11 | p-0 ml-4 mb-0`}>popisok</h2>
                            <p className={`col-11 | p-0 ml-4 mb-0`}>{control ? `teraz sa ukáž a predveď svoj skill v písaní` : `ten frajer nižšie napísal celkom fajn sloh, že`} <span><img style={{width : 24, height : 24}} src={`../img/happy.svg`} alt={`smile`}/></span></p>
                            <div className={`col-4 | p-0 ml-4`}>
                                <hr/>
                            </div>
                            <textarea
                                name={`description`}
                                placeholder={`Zadajte text článku`}
                                value={postData.description}

                                onChange={e => {setPostData({...postData,description : e.target.value})}}

                                className={`col-11 | ml-4 mt-3 px-0 py-2`}
                                disabled={!control}
                                rows={5}
                            />
                        </label>
                        <label className={`price | row col-12 | justify-content-start | mb-5 p-2`} htmlFor={`price`}>
                            <h2 className={`col-11 | p-0 ml-4 mb-0`}>price</h2>
                            <p className={`col-11 | p-0 ml-4 mb-0`}><span><img style={{width : 24, height : 24}} src={`../img/wink.svg`} alt={`smile`}/></span></p>
                            <div className={`col-4 | p-0 ml-4`}>
                                <hr/>
                            </div>
                            <input
                                name={`price`}
                                value={postData.price}
                                placeholder={`Zadajte cenu projektu`}
                                type={`number`}

                                onChange={e => {setPostData({...postData,price : e.target.value})}}

                                disabled={!control}
                                className={`col-11 | px-0 py-2 mt-3 ml-4`}
                            />
                        </label>
                        <label className={`author | row col-12 | justify-content-start | mb-5 p-2`} htmlFor={`autor`}>
                            <label className={`author col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mb-5 row p-2 justify-content-start`} htmlFor="autor">
                                <h4 className={`col-11 | ml-4 mb-0 p-0`}>autor</h4>
                                <p className={"col-11 ml-4 p-0 mb-0"}>{control ? "len aby si vedel ako sa voláš" : "toto asi nie je tvoje meno"} <span><img style={{width : 24, height : 24}} src="../img/laughing.svg" alt=""/></span></p>
                                <div className="col-8 p-0 ml-4">
                                    <hr/>
                                </div>
                                <br/>
                                <input disabled={true} name={"user_id"} className={"col-8 px-0 py-2 ml-4"} value={_idControl ? user.data.name : logged.name} />
                            </label>
                            <label className={`date | row col-xl-6 col-lg-6 col-12 | justify-content-start | mb-5 p-2 `} htmlFor="title">
                                <h4 className={`col-11 | mb-0 ml-4 mb-0 p-0`}>dátum - posledná zmena</h4>
                                <p className={`col-11 | ml-4 mb-0 p-0`}>{control ?  "po uložení zmien sa automaticky upraví" :"upravoval to presne vtedy"}</p>
                                <div className={`col-8 | ml-4 p-0`}>
                                    <hr/>
                                </div>
                                <br/>
                                <input disabled={true} className={`col-8 | ml-4 px-0 py-2`} value={_idControl ? postData.updated_at : `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()+1} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`} />
                            </label>
                        </label>
                    </label>
                        <label className={`gallery | row col-12 | justify-content-start | mb-5 `} htmlFor={"images"}>
                            <h2 className={`col-11 | mb-0  ml-4 mb-0 p-0`}>galéria</h2>
                            <p className={`col-11 | ml-4 mb-0 p-0`}>fotky ? sem s nimi <span><img style={{width : 24, height : 24}} src="../img/wink.svg" alt=""/></span></p>
                            <div className={`col-4 | ml-4 p-0`}>
                                <hr/>
                            </div>
                            <div className={"col-12 row"}>
                                        {images.map(({path,id}) => {
                                            return (
                                                <div>
                                                    <span onClick={() => {handleImages(id)}}>x</span>
                                                    <img style={{height : "100px", width : "auto"}} src={`../${path.substr(path.indexOf('img'))}`}  className={"m-2"} alt=""/>
                                                </div>
                                            )
                                        })}
                                </div>
                            <input
                                name={`images[]`}
                                type={`file`}
                                placeholder={"Zadajte názov"}
                                onChange={e => {setPostData({...postData,images : e.target.files})}}
                                disabled={!control}
                                className={`col-11 | mt-3 ml-4 px-0 py-2`}
                                multiple

                            />
                        </label>
                </label>


                {
                    !control ? "" : (
                        <label className={`title | row col-12 | mb-5 p-2`} htmlFor="button">
                            <p className={`col-11 | ml-4 mb-0 p-0`}>Hej hej, je to fajn, skontroluj to a pacni ten button dole <span><img style={{width : 24, height : 24}} src="../img/cool.svg" alt=""/></span></p>
                            <input className={`col-4 | mt-3 ml-4 mb-0 p-2`} type="submit" value={"potvrdiť"}/>
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

                <div className={"description col-lg-11 col-sm-10 mb-5 row p-2 justify-content-start"}>
                    <p>{postData.description}</p>
                </div>
                <div className={"col-lg-12 col-sm-10 mb-5 row autor p-2 justify-content-start"}>
                    <p className={"col-lg-6 col-sm-12 px-0 py-2 "} >{user.data.name}</p>
                    <p className={"col-lg-6 col-sm-12 px-0 py-2 "}>{new Date(postData.updated_at).toLocaleDateString("en-US")} </p>
                </div>

            </div>
        );
    }

};
