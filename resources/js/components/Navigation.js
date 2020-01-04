import React, {useEffect, useState} from "react";
import { Link } from "@reach/router";
import { NonLogged, Logged, Loader } from "./Utillities";
import $ from 'jquery';

export const Navigation = React.forwardRef(({path, auth, logout, scroll, changeSubpage}, ref) => {
    const [menu, setMenu] = useState(true);
    const [subpages, setSubpages] = useState([]);
    const [scrollControl, setScrollControl] = useState(false);

    useEffect(() => {
        setScrollControl(scroll > 0);
        if(subpages[0] === undefined){
            fetch(`/api/`)
                .then(response => response.json())
                .then(subpages => {
                    setSubpages(subpages)
                });
        }
    },[scroll]);

    open = e => {
        e.preventDefault();
        setMenu(!menu);
        $('.navigation-items').slideToggle();
        $('.navigation-header').toggleClass('shadow-sm');
    };
    if(!subpages){
        return <Loader />;
    }
    const _changeSubpage = () =>{
        window.scrollTo(0, 0);
        changeSubpage();
    };

    return (
            <nav ref={ref} className={`navigation | row col-12 | justify-content-around | align-items-center | position-fixed | ${scrollControl ? `shadow-sm` : ``} | p-0`}>
                <div className={`navigation-header | row col-xl-auto col-lg-auto col-md-12 col-sm-12 col-12 | justify-content-xl-start justify-content-lg-start justify-content-end | p-0`}>
                    <Link className={`logo | col-xl-12 col-lg-12 col-md-6 col-sm-6 col-6 | p-0 | text-center`} to={`/`}>
                        <img src={`../img/logo.png`} className={`col-12 | p-2`} alt={`Smartcity Logo`} style={window.pageYOffset > 0  ? { width : 90,height : 90} : {width : 100,height : 100}}/>
                    </Link>
                    {
                        window.innerWidth <= 991 ? <div className={`menu-button | row col-6 | justify-content-end | align-items-center | p-0 pr-3`}  onClick={open}>
                            <svg className={`col-md-3 col-sm-3 col-5`} enableBackground="new 0 0 42 42" version="1.1" viewBox="0 0 42 42" space="preserve" xmlns="http://www.w3.org/2000/svg">
                                <rect y="15" width="90%" height="2"/>
                                <rect y="25" width="90%" height="2"/>
                            </svg>
                        </div> : null
                    }
                </div>
                <div className={`navigation-items | row col-xl-10 col-lg-10 col-12 | justify-content-around | align-items-center | p-lg-0 my-3`} style={{display : (window.innerWidth > 991 ? `flex` : `none`)}}>
                    {subpages.map(({title, title_link}) => {
                        return (
                            <div onClick={() => _changeSubpage()} key={title_link} className={`nav-item | row col-xl-auto col-lg-2 col-12 | justify-content-xl-start justify-content-lg-start justify-content-center | text-center | p-0 ${path.includes(`${title_link}`) ? `on` : ``}`}>
                                <Link className={`col-xl-12 col-lg-10 col-auto | px-xl-0 px-lg-0 px-2| mb-xl-0 mb-lg-0 my-2 | text-center `} to={`/${title_link}`}>{title}</Link>
                                <hr className={`underline | col-5 | d-xl-flex d-lg-flex d-none | m-0 my-2`}/>
                            </div>
                        );
                    })}
                    <div className={`nav-item | row ${auth.isLoggedIn ? `col-xl-3 col-lg-3` : `col-xl-auto col-lg-auto`} col-md-12 col-sm-12 col-12 | justify-content-xl-start justify-content-lg-start justify-content-center | p-0 `}>
                        {auth.isLoggedIn ? <Logged user={auth.user} logout={logout}/> : <NonLogged/>}
                    </div>
                </div>
            </nav>
    );
});
