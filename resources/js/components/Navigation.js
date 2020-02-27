import React, {useEffect, useState} from "react";
import { Link } from "@reach/router";
import { NonLogged, Logged, Loader } from "./Utillities";
import $ from 'jquery';

export const Navigation = React.forwardRef(({path, auth, logout, scroll, changeSubpage, subpages}, ref) => {
    const [menu, setMenu] = useState(true);

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
        <></>
    );
});
