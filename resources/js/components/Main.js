import React, { useEffect, useState, useRef } from "react";

export const Main = (props) => {
    const [bodyMargin, setBodyMargin] = useState(0);
    const refNavigation = useRef();
    const refNews = useRef();
    const [news, setNews] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const [pageYOffset, setPageYOffset] = useState(window.pageYOffset);


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
            <div>
                { props.children }
            </div>
        </>

    );
};

