import React, {useEffect, useState} from "react";
import { Loader } from "../Utillities";
import { PostLookup } from "./PostLookup";
import { Link } from "@reach/router";
export const News = ({loggedIn, getposts, posts}) => {

    useEffect(() => {
        getposts();
    }, []);


    if(!posts){
        return <Loader />;
    }
    return (
        <div className={"news row col-12 p-0 align-items-start shadow"}>
            <div className={"col-12 p-0 row mt-3"}>
                <h2 className={"mb-4 col-11 text-center mt-3"}>aktuality</h2>
                <div className="data">
                    {
                        loggedIn ? (
                            <div className={"row post col-xl-11 col-lg-11 col-12 px-0"}>
                                <div className={`row p-0 col-12 mt-4 px-3 content mb-3`}>
                                    <Link className="col-12 p-0 row" to={`/post-create`} state={{ subpage : null }}>
                                        <div className="col-4 p-0">
                                            <img src="../img/newspaper.svg" alt="" className={"col-12"} style={{width : `5vw`, height : `auto`}}/>
                                        </div>
                                        <div className="col-8 row p-0" style={{border : `none`}}>
                                            <h3 className={"col-12 p-0"}>máš novinku?</h3>
                                            <p className={"col-12 p-0 mb-0 description"}>Napíš o tom niečo ! <span><img style={{width : 24, height : 24}} src="../img/wink.svg" alt=""/></span></p>
                                        </div>
                                    </Link>
                                </div>
                                <div className={`offset-1 col-11 px-0`}>
                                    <div className={`offset-6 col-6 px-0 mt-2`}>
                                        <hr className={"m-0 mt-2"}/>
                                    </div>
                                </div>
                            </div>
                        ) : ``
                    }
                    {
                        posts.map( ({ id, title, description, user, updated_at }, index)  => {
                            return <PostLookup
                                key={index}
                                id={id}
                                index={index}
                                title={title}
                                description={description}
                                author={user}
                                date={updated_at}
                            />;
                        })
                    }
                </div>
            </div>

        </div>
    );
};

