import React, {useEffect, useState} from 'react';
import {NewsOutlook} from './outlook/NewsOutlook';
import {ProjectOutlook} from './outlook/ProjectOutlook';
import {Footer} from '../Footer';
import { Loader } from "../Utillities";
import { Project } from './Project';
import $ from "jquery";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const Subpage = ({id, logged, hide = f => f, data, getpost = f => f, project, closePost}) => {
    const path = window.location.pathname;
    const settings = {
        dots: false,
        arrows : true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight : false,
        nextArrow: <NextArrow />,
        prevArrow: <PreviousArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    const [subpage, setSubpage] = useState([]);

    const close = () => {
        $('.project-details-frame .project-content').animate({
            marginTop: '100vh',
            easing: 'easeInOutCirc'
        },1000);
        $('.project-details-frame').fadeToggle("slow", closePost);
    };

    const chunk = (array, size) => {
        const chunked_arr = [];
        let index = 0;
        while (index < array.length) {
            chunked_arr.push(array.slice(index, size + index));
            index += size;
        }
        return chunked_arr;
    };


    const getSmallerArray = (array) => {
        let size = 1;
        if(window.innerWidth >= 1200){
            size = 4;
        }else if(window.innerWidth >= 999){
            size = 3;
        }else if(window.innerWidth >= 768){
            size = 2;
        }
        return array.filter(item => item.done === 0).slice(0, size);
    };

    useEffect( () => {
        if(data!==null){
            setSubpage(data);
            console.log(data);
        }
    },[data]);


    if(subpage===null || subpage===undefined || !subpage.title){
        return <Loader/>;
    }


    return (
        <div className={`subpage container-fluid p-0 m-0`}>
            {
                (project !==null) ? <Project data={project} close={close}/> : null
            }
            <div className={`py-4`}>
                <svg className={`ml-5 my-3`} style={{transform: `scale(1)`}} width={`47.031`} height={`33.966`} viewBox={`0 0 47.031 33.966`}><path d={`M45.071,126.587H1.96a1.96,1.96,0,1,1,0-3.919H45.071a1.96,1.96,0,1,1,0,3.919Zm0,0`} transform={`translate(0 -107.644)`}/><path d={`M45.071,3.919H1.96A1.96,1.96,0,0,1,1.96,0H45.071a1.96,1.96,0,1,1,0,3.919Zm0,0`}/><path d={`M45.071,249.251H1.96a1.96,1.96,0,1,1,0-3.919H45.071a1.96,1.96,0,1,1,0,3.919Zm0,0`} transform={`translate(0 -215.285)`}/></svg>
            </div>
            <div className={`row col-12`}>
                <div className={`offset-1 col font-bold pt-5 text-lg-left text-center`}>
                    <h1 className="primary-color subpage-main-title text-lowercase">
                        {subpage.title}.
                    </h1>
                    <h1 className="subpage-main-title">
                        smartcity prešov.
                    </h1>
                </div>
                {
                    window.innerWidth >= 1200?
                        <div className={`col-4`}>
                            <img alt={"cover image"} src={`img/subpages${path}.svg`}/>

                        </div>:<><div className="space"></div><div className="space"></div></>
                }
            </div>
            <div className={`row col-12 mt-n4 mb-5 m-0 p-0`}>
                <div className={`col-xl-7 col-lg-11 col-12 background-secondary py-5 position-relative`}>

                        <div className={`preparing offset-md-4 col-md-8 position-absolute background-primary`}>
                            <div className="col-12 h-70 row justify-content-end align-items-end">
                                <div className="col-2">
                                    <svg className="pl-3 mb-5" style={{transform: `scale(1.4)`}} xmlns="http://www.w3.org/2000/svg" width="55.795" height="27.898" viewBox="0 0 55.795 27.898">
                                        <path id="virustotal-icon" d="M160.45,27.9,137.783,50.565V55.8l27.9-27.9L137.783,0V5.231Z" transform="translate(55.795 -137.783) rotate(90)" fill="#fff"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="col-12 h-30 align-items-center d-flex text-center">
                                <h3 className="col-12 font-bold subpage-title">
                                    aktuálne pripravujeme.
                                </h3>
                            </div>
                        </div>


                    <div className={`justify-content-center d-flex`}>
                        <h2 className={`partial-border d-inline font-bold`}>
                            SMARTCITY PREŠOV OBLASŤ <span className={"text-uppercase"}>{subpage.title}</span>
                        </h2>
                    </div>
                    <div className={`col-12 row justify-content-center`}>
                        <p className={`col-9 py-5 text-center h3 font-light subpage-text`}>
                            {subpage.description}
                        </p>
                    </div>


                </div>
                {
                    window.innerWidth >= 1200?
                        <div className="col d-flex justify-content-end align-items-end">
                            <svg className="mr-5" style={{transform:"translateY(60%)"}} xmlns="http://www.w3.org/2000/svg" width="215" height="157" viewBox="0 0 215 157"><g transform="translate(4.5 -1815.5)"><circle cx="6" cy="6" r="6" transform="translate(210.5 1844.5) rotate(90)" fill="#191919"/><circle cx="6" cy="6" r="6" transform="translate(210.5 1815.5) rotate(90)" fill="#191919"/><circle cx="6" cy="6" r="6" transform="translate(210.5 1902.5) rotate(90)" fill="#191919"/><circle cx="6" cy="6" r="6" transform="translate(210.5 1873.5) rotate(90)" fill="#191919"/><circle cx="6" cy="6" r="6" transform="translate(210.5 1960.5) rotate(90)" fill="#191919"/><circle cx="6" cy="6" r="6" transform="translate(210.5 1931.5) rotate(90)" fill="#191919"/><circle cx="6" cy="6" r="6" transform="translate(181.5 1844.5) rotate(90)" fill="#191919"/><circle cx="6" cy="6" r="6" transform="translate(181.5 1815.5) rotate(90)" fill="#191919"/><circle cx="6" cy="6" r="6" transform="translate(181.5 1902.5) rotate(90)" fill="#191919"/><circle cx="6" cy="6" r="6" transform="translate(181.5 1873.5) rotate(90)" fill="#191919"/><circle cx="6" cy="6" r="6" transform="translate(181.5 1960.5) rotate(90)" fill="#191919"/><circle cx="6" cy="6" r="6" transform="translate(181.5 1931.5) rotate(90)" fill="#191919"/><circle cx="6" cy="6" r="6" transform="translate(152.5 1844.5) rotate(90)" fill="#191919"/><circle cx="6" cy="6" r="6" transform="translate(152.5 1815.5) rotate(90)" fill="#191919"/><circle cx="6" cy="6" r="6" transform="translate(152.5 1902.5) rotate(90)" fill="#191919"/><circle cx="6" cy="6" r="6" transform="translate(152.5 1873.5) rotate(90)" fill="#191919"/><circle cx="6" cy="6" r="6" transform="translate(152.5 1960.5) rotate(90)" fill="#191919"/><circle cx="6" cy="6" r="6" transform="translate(152.5 1931.5) rotate(90)" fill="#191919"/><circle cx="6" cy="6" r="6" transform="translate(123.5 1844.5) rotate(90)" fill="#191919"/><circle cx="6" cy="6" r="6" transform="translate(123.5 1815.5) rotate(90)" fill="#191919"/><circle cx="6" cy="6" r="6" transform="translate(123.5 1902.5) rotate(90)" fill="#191919"/><circle cx="6" cy="6" r="6" transform="translate(123.5 1873.5) rotate(90)" fill="#191919"/><circle cx="6" cy="6" r="6" transform="translate(123.5 1960.5) rotate(90)" fill="#191919"/><circle cx="6" cy="6" r="6" transform="translate(123.5 1931.5) rotate(90)" fill="#191919"/><circle cx="6" cy="6" r="6" transform="translate(94.5 1844.5) rotate(90)" fill="#191919"/><circle cx="6" cy="6" r="6" transform="translate(94.5 1815.5) rotate(90)" fill="#191919"/><circle cx="6" cy="6" r="6" transform="translate(94.5 1902.5) rotate(90)" fill="#191919"/><circle cx="6" cy="6" r="6" transform="translate(94.5 1873.5) rotate(90)" fill="#191919"/><circle cx="6" cy="6" r="6" transform="translate(94.5 1960.5) rotate(90)" fill="#191919"/><circle cx="6" cy="6" r="6" transform="translate(94.5 1931.5) rotate(90)" fill="#191919"/><circle cx="6" cy="6" r="6" transform="translate(65.5 1844.5) rotate(90)" fill="#191919"/><circle cx="6" cy="6" r="6" transform="translate(65.5 1815.5) rotate(90)" fill="#191919"/><circle cx="6" cy="6" r="6" transform="translate(65.5 1902.5) rotate(90)" fill="#191919"/><circle cx="6" cy="6" r="6" transform="translate(65.5 1873.5) rotate(90)" fill="#191919"/><circle cx="6" cy="6" r="6" transform="translate(65.5 1960.5) rotate(90)" fill="#191919"/><circle cx="6" cy="6" r="6" transform="translate(65.5 1931.5) rotate(90)" fill="#191919"/><circle cx="6" cy="6" r="6" transform="translate(36.5 1844.5) rotate(90)" fill="#191919"/><circle cx="6" cy="6" r="6" transform="translate(36.5 1815.5) rotate(90)" fill="#191919"/><circle cx="6" cy="6" r="6" transform="translate(36.5 1902.5) rotate(90)" fill="#191919"/><circle cx="6" cy="6" r="6" transform="translate(36.5 1873.5) rotate(90)" fill="#191919"/><circle cx="6" cy="6" r="6" transform="translate(36.5 1960.5) rotate(90)" fill="#191919"/><circle cx="6" cy="6" r="6" transform="translate(36.5 1931.5) rotate(90)" fill="#191919"/><circle cx="6" cy="6" r="6" transform="translate(7.5 1844.5) rotate(90)" fill="#191919"/><circle cx="6" cy="6" r="6" transform="translate(7.5 1815.5) rotate(90)" fill="#191919"/><circle cx="6" cy="6" r="6" transform="translate(7.5 1902.5) rotate(90)" fill="#191919"/><circle cx="6" cy="6" r="6" transform="translate(7.5 1873.5) rotate(90)" fill="#191919"/><circle cx="6" cy="6" r="6" transform="translate(7.5 1960.5) rotate(90)" fill="#191919"/><circle cx="6" cy="6" r="6" transform="translate(7.5 1931.5) rotate(90)" fill="#191919"/></g></svg>
                        </div>:<></>
                }
            </div>

            <div className="space"></div>
            <div className="space"></div>
            <div className="row col-12 p-0 m-0 justify-content-between">
                <div className="col-6 col-lg-2 col-md-4 align-items-center d-flex">
                    <svg className="ml-n3 " xmlns="http://www.w3.org/2000/svg" width="215" height="157" viewBox="0 0 215 157"><g transform="translate(4.5 -1815.5)"><circle cx="6" cy="6" r="6" transform="translate(210.5 1844.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(210.5 1815.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(210.5 1902.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(210.5 1873.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(210.5 1960.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(210.5 1931.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(181.5 1844.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(181.5 1815.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(181.5 1902.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(181.5 1873.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(181.5 1960.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(181.5 1931.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(152.5 1844.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(152.5 1815.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(152.5 1902.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(152.5 1873.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(152.5 1960.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(152.5 1931.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(123.5 1844.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(123.5 1815.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(123.5 1902.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(123.5 1873.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(123.5 1960.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(123.5 1931.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(94.5 1844.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(94.5 1815.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(94.5 1902.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(94.5 1873.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(94.5 1960.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(94.5 1931.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(65.5 1844.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(65.5 1815.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(65.5 1902.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(65.5 1873.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(65.5 1960.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(65.5 1931.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(36.5 1844.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(36.5 1815.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(36.5 1902.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(36.5 1873.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(36.5 1960.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(36.5 1931.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(7.5 1844.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(7.5 1815.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(7.5 1902.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(7.5 1873.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(7.5 1960.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(7.5 1931.5) rotate(90)" fill="#d3d2d2"/></g></svg>
                </div>
                <div className="col-6 col-md-8 col-lg-10 col-xl-9 row my-5">
                    {
                        getSmallerArray(subpage.posts).map((post)=>{
                            return(
                                <NewsOutlook post={post} getPost={(id)=>getpost(id)}></NewsOutlook>
                            );
                        })
                    }
                </div>
                {
                        window.innerWidth >= 1200?
                            <div className="col-1 p-0 m-0 background-secondary"></div>
                            :<></>
                }
            </div>
            <div className="space"></div>
            <div className="row col-12 p-0 m-0 h-15rem">
                <div className="col-md-4 col-lg-3 col-xl-2 background-primary">
                    <div className="position-absolute background-secondary solved align-items-center d-flex text-center">
                        <h3 className="col-12 font-bold subpage-title p-0 m-0">
                            už sme zrealizovali a vyriešili.
                        </h3>
                    </div>
                </div>
            </div>
            <div className="space"></div>
            <div className="space"></div>
            <div className="row col-12 m-0 p-0 justify-content-center">
                <div className="row col-md-11 col-8 m-0 p-0 justify-content-center">
                    {
                        chunk(subpage.posts.filter(item => item.done === 1), 4).map((arr)=> {
                            return(
                                <>
                                <Slider {...settings} className="row col-md-11 col-8 m-0 p-0 justify-content-center">
                                    {
                                        arr.map((post)=>{
                                            return(
                                                <ProjectOutlook post={post} getPost={(id)=>getpost(id)}></ProjectOutlook>
                                            );
                                        })
                                    }
                                </Slider>
                                    <div className={"col-12 text-center my-5 divider"}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="157" height="12" viewBox="0 0 157 12">
                                        <g id="spacer" transform="translate(-563 -2718)">
                                            <circle id="Ellipse_246" data-name="Ellipse 246" cx="6" cy="6" r="6"
                                                    transform="translate(691 2730) rotate(180)" fill="#d3d2d2"/>
                                            <circle id="Ellipse_247" data-name="Ellipse 247" cx="6" cy="6" r="6"
                                                    transform="translate(720 2730) rotate(180)" fill="#d3d2d2"/>
                                            <circle id="Ellipse_246-2" data-name="Ellipse 246" cx="6" cy="6" r="6"
                                                    transform="translate(633 2730) rotate(180)" fill="#d3d2d2"/>
                                            <circle id="Ellipse_247-2" data-name="Ellipse 247" cx="6" cy="6" r="6"
                                                    transform="translate(662 2730) rotate(180)" fill="#d3d2d2"/>
                                            <circle id="Ellipse_246-3" data-name="Ellipse 246" cx="6" cy="6" r="6"
                                                    transform="translate(575 2730) rotate(180)" fill="#d3d2d2"/>
                                            <circle id="Ellipse_247-3" data-name="Ellipse 247" cx="6" cy="6" r="6"
                                                    transform="translate(604 2730) rotate(180)" fill="#d3d2d2"/>
                                            <circle id="Ellipse_246-4" data-name="Ellipse 246" cx="6" cy="6" r="6"
                                                    transform="translate(691 2730) rotate(180)" fill="#d3d2d2"/>
                                            <circle id="Ellipse_247-4" data-name="Ellipse 247" cx="6" cy="6" r="6"
                                                    transform="translate(720 2730) rotate(180)" fill="#d3d2d2"/>
                                            <circle id="Ellipse_246-5" data-name="Ellipse 246" cx="6" cy="6" r="6"
                                                    transform="translate(633 2730) rotate(180)" fill="#d3d2d2"/>
                                            <circle id="Ellipse_247-5" data-name="Ellipse 247" cx="6" cy="6" r="6"
                                                    transform="translate(662 2730) rotate(180)" fill="#d3d2d2"/>
                                            <circle id="Ellipse_246-6" data-name="Ellipse 246" cx="6" cy="6" r="6"
                                                    transform="translate(575 2730) rotate(180)" fill="#d3d2d2"/>
                                            <circle id="Ellipse_247-6" data-name="Ellipse 247" cx="6" cy="6" r="6"
                                                    transform="translate(604 2730) rotate(180)" fill="#d3d2d2"/>
                                        </g>
                                    </svg>
                                    </div>
                                </>
                            );

                        })
                    }
                </div>
            </div>
            <div className="space"></div>
            <div className="space"></div>
            <Footer></Footer>
        </div>
    );
};

const NextArrow = props => {
    const { className, style, onClick } = props;
    return <svg className={className}  style={{ ...style, display: "block"}} onClick={onClick} width="112.756" height="76.79" viewBox="0 0 112.756 76.79"><defs><filter id="a" x="0" y="0" width="112.756" height="76.79" filterUnits="userSpaceOnUse"><feOffset dy="3" input="SourceAlpha"/><feGaussianBlur stdDeviation="3" result="b"/><feFlood flood-opacity="0.161"/><feComposite operator="in" in2="b"/><feComposite in="SourceGraphic"/></filter></defs><g transform="translate(103.756 140.704) rotate(180)"><g transform="matrix(-1, 0, 0, -1, 103.76, 140.7)" filter="url(#a)"><path d="M90.654,101.207H14l18.29-18.291a4.1,4.1,0,0,0-5.8-5.8L1.2,102.408a4.1,4.1,0,0,0,0,5.8L26.494,133.5a4.1,4.1,0,1,0,5.8-5.8L14,109.41h76.65a4.1,4.1,0,1,0,0-8.2Z" transform="translate(103.76 140.7) rotate(180)" fill="#2c393f"/></g></g></svg>
};

const PreviousArrow = props => {
    const { className, style, onClick } = props;
    return <svg className={className}  style={{ ...style, display: "block"}} onClick={onClick} width="112.756" height="76.79" viewBox="0 0 112.756 76.79"><defs><filter id="a" x="0" y="0" width="112.756" height="76.79" filterUnits="userSpaceOnUse"><feOffset dy="3" input="SourceAlpha"/><feGaussianBlur stdDeviation="3" result="b"/><feFlood flood-opacity="0.161"/><feComposite operator="in" in2="b"/><feComposite in="SourceGraphic"/></filter></defs><g transform="translate(9 -69.914)"><g transform="matrix(1, 0, 0, 1, -9, 69.91)" filter="url(#a)"><path d="M90.654,101.207H14l18.29-18.291a4.1,4.1,0,0,0-5.8-5.8L1.2,102.408a4.1,4.1,0,0,0,0,5.8L26.494,133.5a4.1,4.1,0,1,0,5.8-5.8L14,109.41h76.65a4.1,4.1,0,1,0,0-8.2Z" transform="translate(9 -69.91)" fill="#2c393f"/></g></g></svg>
};

