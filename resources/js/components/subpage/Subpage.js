import React, {useEffect, useState} from 'react';
import {NewsOutlook} from './outlook/NewsOutlook';
import {ProjectOutlook} from './outlook/ProjectOutlook';
import { Loader } from "../Utillities";
import { Project } from './Project';
import $ from "jquery";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Subpage = ({id, data, logged, project, author, hide = f => f, getpost = f => f, closePost}) => {

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight : false,
        nextArrow: <NextArrow />,
        prevArrow: <PreviousArrow />,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 860,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    let settings1 = {...settings, dots: true, arrows : false};
    let settings2 = {...settings, dots: false, arrows : true};
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


    useEffect(() => {
        if(data !== null){
            setSubpage(data);
        }
        closePost();
    },[data]);

    const scroll = () => $('html, body').animate({scrollTop: $("#here").offset().top, easing: 'easeInOutCirc'} , 1500);

    if(subpage === null || subpage === undefined || !subpage.title){
        return <Loader/>;
    }

    return (
        <div className={`sub-page | container-fluid | m-0 p-0`}>
            <div className={`intro position-relative | row col-12 | mx-0 p-0`} style={{minHeight : $(window).height()}}>
                <div className={`background position-absolute | col-xl-4 col-lg-4 col-md-4 col-sm-2 col-1 | m-0 p-0`} style={{backgroundImage : 'url("./././././images/backgrounds/'+subpage.title_link+'.svg")'}}/>
                <div className={`row col-xl-9 col-lg-10 col-md-12 col-12 | align-items-end | justify-content-end | m-0 p-0`}>
                    <div className={`row col-12 | justify-content-center | mx-0 p-0`}>
                        <div className={`row col-11 | m-0`}>
                            <h1 className={`main-title | col-auto | mb-0 p-0`}>{subpage.title}.</h1>
                            <h3 className={`sub-title | col-12 | p-0`}>smartcity prešov.</h3>
                        </div>
                    </div>
                    <div className={`description background-secondary | row col-xl-10 col-lg-10 col-md-11 col-12 | align-items-end | justify-content-center | mx-0 py-5 | d-flex`}>
                        <h5 className={`title text-uppercase | col-12 | text-center `}>
                            smartcity prešov oblasť {subpage.title}
                        </h5>
                        <div className={`col-10 | my-2`}><div className="col-6 ml-5"><hr/></div></div>
                        <p className={`col-xl-8 col-lg-9 col-md-9 col-sm-10 col-11 | text-center`}>{subpage.description}</p>
                    </div>
                    <div onClick={scroll} className={`background-primary | col-xl-2 col-lg-2 col-md-1 | align-items-end | justify-content-center | mx-0 p-0 py-5 | d-xl-flex d-lg-flex d-md-flex d-none`}>
                        <svg className={`arrow col-5 | p-0`} fill={`#ffffff`} enableBackground="new 0 0 64 64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="m32 8c-1.104 0-2 .896-2 2v39.899l-14.552-15.278c-.761-.799-2.026-.832-2.828-.069-.8.762-.831 2.027-.069 2.827l16.62 17.449c.756.756 1.76 1.172 2.829 1.172 1.068 0 2.073-.416 2.862-1.207l16.586-17.414c.762-.8.73-2.065-.069-2.827-.799-.763-2.065-.731-2.827.069l-14.552 15.342v-39.963c0-1.104-.896-2-2-2z"/></svg>
                    </div>
                </div>
            </div>
            <div className={`row col-12 | justify-content-end | mb-xl-5 mb-lg-5 mx-0 my-0 p-0`}>
                <div className={`row col-xl-9 col-lg-10 col-md-11 col-12 | align-items-start | justify-content-end | m-0 p-0`}>
                    <div className={`sub-page-sub-title background-primary | row col-xl-7 col-lg-8 col-md-10 col-12 | mx-0 p-0 py-5`}>
                        <h3 id={`here`} className={`font-bold subpage-title | col-12 | m-0 p-0 | text-center`}>
                            aktuálne pripravujeme.
                        </h3>
                    </div>
                </div>
                <div className="row m-0 col-xl-3 col-lg-2 d-xl-flex d-lg-flex d-none justify-content-center p-0"> <svg className={`col-10 | p-0`} xmlns="http://www.w3.org/2000/svg" width="215" height="161" viewBox="0 0 215 161" fill={`white`}><circle cx="6" cy="6" r="6" transform="translate(215 149) rotate(90)"/><circle cx="6" cy="6" r="6" transform="translate(215 120) rotate(90)" /><circle cx="6" cy="6" r="6" transform="translate(186 149) rotate(90)" /><circle cx="6" cy="6" r="6" transform="translate(186 120) rotate(90)" /><circle cx="6" cy="6" r="6" transform="translate(157 149) rotate(90)" /><circle cx="6" cy="6" r="6" transform="translate(157 120) rotate(90)" /><circle cx="6" cy="6" r="6" transform="translate(128 149) rotate(90)" /><circle cx="6" cy="6" r="6" transform="translate(128 120) rotate(90)" /><circle cx="6" cy="6" r="6" transform="translate(99 149) rotate(90)" /><circle cx="6" cy="6" r="6" transform="translate(99 120) rotate(90)" /><circle cx="6" cy="6" r="6" transform="translate(70 149) rotate(90)" /><circle cx="6" cy="6" r="6" transform="translate(70 120) rotate(90)" /><circle cx="6" cy="6" r="6" transform="translate(41 149) rotate(90)" /><circle cx="6" cy="6" r="6" transform="translate(41 120) rotate(90)" /><circle cx="6" cy="6" r="6" transform="translate(12 149) rotate(90)" /><circle cx="6" cy="6" r="6" transform="translate(12 120) rotate(90)"/><circle cx="6" cy="6" r="6" transform="translate(215 89) rotate(90)" /><circle cx="6" cy="6" r="6" transform="translate(215 60) rotate(90)" /><circle cx="6" cy="6" r="6" transform="translate(186 89) rotate(90)" /><circle cx="6" cy="6" r="6" transform="translate(186 60) rotate(90)" /><circle cx="6" cy="6" r="6" transform="translate(157 89) rotate(90)" /><circle cx="6" cy="6" r="6" transform="translate(157 60) rotate(90)" /><circle cx="6" cy="6" r="6" transform="translate(128 89) rotate(90)" /><circle cx="6" cy="6" r="6" transform="translate(128 60) rotate(90)" /><circle cx="6" cy="6" r="6" transform="translate(99 89) rotate(90)" /><circle cx="6" cy="6" r="6" transform="translate(99 60) rotate(90)" /><circle cx="6" cy="6" r="6" transform="translate(70 89) rotate(90)" /><circle cx="6" cy="6" r="6" transform="translate(70 60) rotate(90)"/><circle cx="6" cy="6" r="6" transform="translate(41 89) rotate(90)" /><circle cx="6" cy="6" r="6" transform="translate(41 60) rotate(90)" /><circle cx="6" cy="6" r="6" transform="translate(12 89) rotate(90)"/><circle cx="6" cy="6" r="6" transform="translate(12 60) rotate(90)" /><circle cx="6" cy="6" r="6" transform="translate(215 29) rotate(90)" /><circle cx="6" cy="6" r="6" transform="translate(215) rotate(90)"/><circle cx="6" cy="6" r="6" transform="translate(186 29) rotate(90)" /><circle cx="6" cy="6" r="6" transform="translate(186) rotate(90)" /><circle cx="6" cy="6" r="6" transform="translate(157 29) rotate(90)" /><circle cx="6" cy="6" r="6" transform="translate(157) rotate(90)" /><circle cx="6" cy="6" r="6" transform="translate(128 29) rotate(90)" /><circle cx="6" cy="6" r="6" transform="translate(128) rotate(90)" /><circle cx="6" cy="6" r="6" transform="translate(99 29) rotate(90)" /><circle cx="6" cy="6" r="6" transform="translate(99) rotate(90)" /><circle cx="6" cy="6" r="6" transform="translate(70 29) rotate(90)" /><circle cx="6" cy="6" r="6" transform="translate(70) rotate(90)" /><circle cx="6" cy="6" r="6" transform="translate(41 29) rotate(90)" /><circle cx="6" cy="6" r="6" transform="translate(41) rotate(90)" /><circle cx="6" cy="6" r="6" transform="translate(12 29) rotate(90)" /><circle cx="6" cy="6" r="6" transform="translate(12) rotate(90)" /></svg> </div>
            </div>
            <div className={`row col-12 | justify-content-xl-between justify-content-lg-between justify-content-start | mx-0 m-0 p-0`}>
                <div className={`col-xl-2 col-lg-2 col-md-3 col-4 | align-items-center | p-0 | d-flex`}>
                    <svg className={`col-12 | m-0`} xmlns="http://www.w3.org/2000/svg" width="215" height="157" viewBox="0 0 215 157"><g transform="translate(4.5 -1815.5)"><circle cx="6" cy="6" r="6" transform="translate(210.5 1844.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(210.5 1815.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(210.5 1902.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(210.5 1873.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(210.5 1960.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(210.5 1931.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(181.5 1844.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(181.5 1815.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(181.5 1902.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(181.5 1873.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(181.5 1960.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(181.5 1931.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(152.5 1844.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(152.5 1815.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(152.5 1902.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(152.5 1873.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(152.5 1960.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(152.5 1931.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(123.5 1844.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(123.5 1815.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(123.5 1902.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(123.5 1873.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(123.5 1960.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(123.5 1931.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(94.5 1844.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(94.5 1815.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(94.5 1902.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(94.5 1873.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(94.5 1960.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(94.5 1931.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(65.5 1844.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(65.5 1815.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(65.5 1902.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(65.5 1873.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(65.5 1960.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(65.5 1931.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(36.5 1844.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(36.5 1815.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(36.5 1902.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(36.5 1873.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(36.5 1960.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(36.5 1931.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(7.5 1844.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(7.5 1815.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(7.5 1902.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(7.5 1873.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(7.5 1960.5) rotate(90)" fill="#d3d2d2"/><circle cx="6" cy="6" r="6" transform="translate(7.5 1931.5) rotate(90)" fill="#d3d2d2"/></g></svg>
                </div>

                {
                    chunk(subpage.posts.filter(item => item.done === 0).slice(0, 4), 4).map(arr => {
                        return <Slider {...settings1} className={`row col-xl-8 col-lg-8 col-md-8 col-7 | justify-content-start | mx-xl-0 mx-lg-0 mr-0 my-5 ml-2 p-0`}>
                            {
                                arr.map(post => <NewsOutlook post={post} getPost={id =>getpost(id)} />)
                            }
                        </Slider>
                    })
                }
                {
                    window.innerWidth >= 1200 ?
                        <div className={`col-1 | m-0 p-0 | d-xl-flex d-lg-flex d-none background-secondary`}></div>
                        :<></>
                }
            </div>
            <div className={`h-15rem | row col-12 | mx-0 my-5 p-0`}>
                <div className={`col-xl-2 col-lg-3 col-md-4 | m-0 | background-primary`}>
                    <div className={`position-absolute solved sub-page-sub-title background-secondary | align-items-center | m-0 | d-flex | text-center`}>
                        <h3 className={`font-bold subpage-title | col-12 | m-0 p-3`}>
                            už sme zrealizovali a vyriešili.
                        </h3>
                    </div>
                </div>
            </div>
            <div className={`row col-12 | justify-content-center | my-xl-5 my-lg-5 mx-0 mb-3 p-0`}>
                <div className={`row col-xl-12 col-lg-12 col-md-12 col-sm-11 col-11 | justify-content-center | m-0 p-0`}>
                    {
                        chunk(subpage.posts.filter(item => item.done === 1), 4).map(arr => {
                            return <>
                                <Slider {...settings2} className={`row col-xl-11 col-lg-11 col-md-11 col-10 | justify-content-center | m-0 p-0`}>
                                    {
                                        arr.map(post => <ProjectOutlook post={post} getPost={id => getpost(id)}/>)
                                    }
                                </Slider>

                                <div className={`divider | col-12 | my-5 | text-center`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="157" height="12" viewBox="0 0 157 12">
                                        <g id="spacer" transform="translate(-563 -2718)">
                                            <circle cx="6" cy="6" r="6" transform="translate(691 2730) rotate(180)" fill="#d3d2d2"/>
                                            <circle cx="6" cy="6" r="6" transform="translate(720 2730) rotate(180)" fill="#d3d2d2"/>
                                            <circle cx="6" cy="6" r="6" transform="translate(633 2730) rotate(180)" fill="#d3d2d2"/>
                                            <circle cx="6" cy="6" r="6" transform="translate(662 2730) rotate(180)" fill="#d3d2d2"/>
                                            <circle cx="6" cy="6" r="6" transform="translate(575 2730) rotate(180)" fill="#d3d2d2"/>
                                            <circle cx="6" cy="6" r="6" transform="translate(604 2730) rotate(180)" fill="#d3d2d2"/>
                                            <circle cx="6" cy="6" r="6" transform="translate(691 2730) rotate(180)" fill="#d3d2d2"/>
                                            <circle cx="6" cy="6" r="6" transform="translate(720 2730) rotate(180)" fill="#d3d2d2"/>
                                            <circle cx="6" cy="6" r="6" transform="translate(633 2730) rotate(180)" fill="#d3d2d2"/>
                                            <circle cx="6" cy="6" r="6" transform="translate(662 2730) rotate(180)" fill="#d3d2d2"/>
                                            <circle cx="6" cy="6" r="6" transform="translate(575 2730) rotate(180)" fill="#d3d2d2"/>
                                            <circle cx="6" cy="6" r="6" transform="translate(604 2730) rotate(180)" fill="#d3d2d2"/>
                                        </g>
                                    </svg>
                                </div>
                            </>
                        })
                    }
                </div>
            </div>
            {
                (project !== null) ? (
                    <Project data={project} close={close}/>) : null
            }
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

