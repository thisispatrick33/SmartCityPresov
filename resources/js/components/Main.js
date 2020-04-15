import React, { useEffect, useState, useRef } from "react";
import {Navigation} from "./Navigation";
import {Footer} from "./Footer";

export const Main = (props) => {
    const [width, setWidth] = useState(window.innerWidth);
    const [pageYOffset, setPageYOffset] = useState(window.pageYOffset);


    useEffect(() => {
        const handleResize = () => {};
        const handleScroll = () => {
            if(props['*'].length > 0){
                $('.background').css('backgroundPositionY', Number($('.background').css('backgroundPositionY').replace('%','').replace('px','')) + 1);
            }else{
                $('.map').css('width', Number($('.map').css('width').replace('%','').replace('px','')) + 1);
            }
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);


        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        }
    }, [pageYOffset]);


    return (
        <>
            <Navigation changeSubpage={props.changeSubpage}/>
            <div>
                { props.children }
            </div>
            <Footer />
        </>

    );
};

