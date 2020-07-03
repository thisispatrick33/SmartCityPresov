import React, { useEffect } from "react";
import {Navigation} from "./Navigation";
import {Footer} from "./Footer";

export const Main = (props) => {
    useEffect(() => {
        const handleScroll = () => {
            if(props['*'].length > 0){
                $('.background').css('backgroundPositionY', Number($('.background').css('backgroundPositionY').replace('%','').replace('px','')) + 3);
            }else{
                Number($('.map-frame').css('width').replace('px','') * 1.2 >  Number($('.map').css('width').replace('px','')) ? $('.map').css('width', Number($('.map').css('width').replace('%','').replace('px','')) + 1) : ``);
            }
        };
        window.addEventListener('scroll', handleScroll);


        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);


    return (
        <>
            <Navigation subpageId={props['*']} changeSubpage={props.changeSubpage} setShowSearchBar={value => props.setShowSearchBar(value)}/>
            <div>
                { props.children }
            </div>
            <Footer />
        </>

    );
};

