import React, { useEffect, useState, useRef } from "react";
import { News } from './news/News';
import { Navigation } from "./Navigation";

export const Main = (props) => {
    const [bodyMargin, setBodyMargin] = useState(0);
    const refNavigation = useRef();
    const refNews = useRef();
    const [news, setNews] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const [pageYOffset, setPageYOffset] = useState(window.pageYOffset);
    let { pathname } = props.location;

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        const handleScroll = () => setPageYOffset(window.pageYOffset);

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);


        setTimeout(
            function() {
                setBodyMargin($('.navigation').height());
            }
                .bind(this),
            200
        );

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        }
    }, [pageYOffset]);


    return (
        <>
            {/* Navigation */}
            <Navigation
                ref={refNavigation}
                path={pathname}
                auth={props.auth}
                logout={props.logout}
                scroll={pageYOffset}
                changeSubpage={props.changeSubpage}
                subpages={props.subpages}
            />

            {/* News */}
            <div className={"main-container | row"}
                 style={{marginTop : bodyMargin}}
            >
                <div
                    ref={refNews}
                    className={`news-frame | ${((pathname.length > 1 && pathname !== `/login`) && width > 991) || news ? `d-flex` : ``} ${news ? `shadow` : ``} col-xl-3 col-lg-3 col-md-5 col-sm-9 col-8 row p-0 position-fixed`}
                    style={{height : window.innerHeight - bodyMargin, width : (news || width > 991 ? `100%` : "0%"), transition : `all 400ms ease`}}>
                    <div
                        className={`col-12 p-0 row`}>
                        { pathname.length > 1 ? <News loggedIn={props.auth.isLoggedIn} getposts={props.getNewsPosts} posts={props.newsPosts}/> : ``}
                    </div>
                </div>
                {/* news-button */}
                {
                    width <= 991 ?
                        <button
                            className={`news-button | ${news ? `offset-md-5 offset-sm-9 offset-8` : ``} shadow position-fixed py-2 mt-4`}
                            style={{top : bodyMargin, transition: `all 450ms ease`}}
                            onClick={()=>setNews(!news)}
                        >
                        <span>a</span><br/>
                        <span>k</span><br/>
                        <span>t</span><br/>
                        <span>u</span><br/>
                        <span>a</span><br/>
                        <span>l</span><br/>
                        <span>i</span><br/>
                        <span>t</span><br/>
                        <span>y</span><br/>
                    </button> : ``
                }

                {/* Content */}
                <div className={`col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 p-0 offset-xl-3 offset-lg-3 offset-0`}>
                    <div className={`row p-0`}>
                        {/* Subpage content */}
                        <div className={`subpage | ${!props.auth.isLoggedIn ? `col-xl-10 col-lg-10` : `col-xl-12 col-lg-12`} col-md-12 col-sm-12 col-12 row p-0 align-items-start`}>
                            { props.children }
                        </div>
                        {/* Subpage cover image */}
                        {
                            props.auth.isLoggedIn ? "" : (
                                <div
                                    className={`subpage-cover-image | col-xl-2 col-lg-2 d-xl-flex d-lg-flex d-sm-none d-md-none d-none row p-0 align-items-center position-fixed justify-content-end`}
                                    style={{height : window.innerHeight - bodyMargin - 35}}>
                                    <div className={`p-0`}>
                                        <img src={`../img/subpages/${pathname.includes(`posts`) ? `posts` : pathname.replace(`/`, ``) }.png`}
                                             alt={`cover-image`}
                                             className={`col-12 p-0`}/>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </>

    );
};

