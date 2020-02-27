import React, { useEffect, useState } from "react";
import {NewsOutlook} from './subpage/outlook/NewsOutlook';
import {Footer} from "./Footer";
import { Loader } from "./Utillities";
import { Project } from './subpage/Project';
import { navigate } from '@reach/router';


export const Home = ({getposts, getpost = f => f, project, author, closePost, changeSubpage}) => {
    const [post, setPost] = useState(null);

    const close = () => {
        $(".project-details-frame .project-content").animate(
            {
                marginTop: "100vh",
                easing: "easeInOutCirc"
            },
            1000
        );
        $(".project-details-frame").fadeToggle("slow", closePost);
    };

    useEffect(() => {
        if (getposts !== null) {
            setPost(getposts.slice(0, 3));
        }
    }, [getposts]);


    if (post !== null && post !== undefined) {

        return (
            <div className={`home container-fluid p-0 m-0`}>
                {
                    (project !== null && author !== null) ? (
                        <Project data={project} user={author} close={close}/>) : null
                }
                <div className="screen">
                    <div className="py-4">
                        <svg className="ml-5 my-3" style={{transform: "scale(1)"}} width="47.031" height="33.966"
                             viewBox="0 0 47.031 33.966">
                            <path d="M45.071,126.587H1.96a1.96,1.96,0,1,1,0-3.919H45.071a1.96,1.96,0,1,1,0,3.919Zm0,0"
                                  transform="translate(0 -107.644)"/>
                            <path d="M45.071,3.919H1.96A1.96,1.96,0,0,1,1.96,0H45.071a1.96,1.96,0,1,1,0,3.919Zm0,0"/>
                            <path d="M45.071,249.251H1.96a1.96,1.96,0,1,1,0-3.919H45.071a1.96,1.96,0,1,1,0,3.919Zm0,0"
                                  transform="translate(0 -215.285)"/>
                        </svg>
                    </div>
                    <div className="row col-12 justify-content-center">
                        <div className="col-md-10">
                            <div className="col-12 mt-md-1 mb-3 py-md-5 py-3 font-bold">
                                <h1 className="silver-color home-main-title">smartcity.</h1>
                                <h1 className="primary-color home-main-title">prešov.</h1>
                            </div>
                            <p className=" col-md-5 home-main-text">
                                Aj toto sú mnohé z aktuálných problémov, pre ktoré mesto Prešov pripravuje smart
                                riešenia.
                                <a className="d-block" href="">Klikni a zisti viac informácií.</a>
                            </p>
                            {
                                window.innerWidth <= 768 ?
                                    <div className="d-flex justify-content-center mt-5">
                                        <svg style={{transform: "scale(1)"}} xmlns="http://www.w3.org/2000/svg"
                                             width="55.795" height="27.898" viewBox="0 0 55.795 27.898">
                                            <path className="a"
                                                  d="M160.45,27.9,137.783,50.565V55.8l27.9-27.9L137.783,0V5.231Z"
                                                  transform="translate(55.795 -137.783) rotate(90)"/>
                                        </svg>
                                    </div>
                                    : <></>
                            }
                        </div>
                    </div>
                </div>
                <div className="screen pb-5">
                    <div className="half-screen background-secondary px-4 py-2 row">
                        <div className="col-lg-3 text-center d-flex d-lg-block justify-content-center">
                            <h2 className="mx-md-5 mt-5 d-inline rotate partial-border font-bold">SMARTCITY PREŠOV</h2>
                        </div>
                        <div className="row mt-lg-5 col-lg-9 mb-5 mb-md-0">
                            <div className="col-lg-7  text-center my-5 px-md-5 home-text">
                                Smart city je koncept, ktorý využíva digitálne, informačné a komunikačné technológie pre
                                zvýšenie kvality života v mestách. Zameriava sa na efektívne využívanie súčasných a
                                hľadanie
                                nových zdrojov, znižovanie spotreby energií, elimináciu záťaží na životné prostredie,
                                optimalizáciu dopravy a zdieľanie dát pre verejné účely.
                            </div>
                            {
                                window.innerWidth >= 992 ?
                                    <div className="col position-relative">
                                        <div className="absolute-red"></div>
                                        <img className="absolute-img" src="./img/image 6.png" alt="presov"/>
                                    </div>
                                    : <></>
                            }
                        </div>
                    </div>
                    <div className="half-screen row">
                        <div className="col-lg-8 col-12 row">
                            <div className="col-12 align-items-center justify-content-end mb-3 mt-5">
                                <h2 className="text-md-right  text-center pr-3 font-bold home-title">momentálne
                                    pripravujeme.</h2>
                            </div>
                            <div className="col-3 align-items-center d-flex">
                                <svg id="home-dots" xmlns="http://www.w3.org/2000/svg" width="215" height="157"
                                     viewBox="0 0 215 157">
                                    <g transform="translate(4.5 -1815.5)">
                                        <circle cx="6" cy="6" r="6" transform="translate(210.5 1844.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(210.5 1815.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(210.5 1902.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(210.5 1873.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(210.5 1960.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(210.5 1931.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(181.5 1844.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(181.5 1815.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(181.5 1902.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(181.5 1873.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(181.5 1960.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(181.5 1931.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(152.5 1844.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(152.5 1815.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(152.5 1902.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(152.5 1873.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(152.5 1960.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(152.5 1931.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(123.5 1844.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(123.5 1815.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(123.5 1902.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(123.5 1873.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(123.5 1960.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(123.5 1931.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(94.5 1844.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(94.5 1815.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(94.5 1902.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(94.5 1873.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(94.5 1960.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(94.5 1931.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(65.5 1844.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(65.5 1815.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(65.5 1902.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(65.5 1873.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(65.5 1960.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(65.5 1931.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(36.5 1844.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(36.5 1815.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(36.5 1902.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(36.5 1873.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(36.5 1960.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(36.5 1931.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(7.5 1844.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(7.5 1815.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(7.5 1902.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(7.5 1873.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(7.5 1960.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(7.5 1931.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                    </g>
                                </svg>
                            </div>
                            <div
                                className="col-9 row align-items-start justify-content-around justify-content-md-between">
                                {
                                    post.slice(0, 2).map((data) => {
                                        return(
                                            <NewsOutlook post={data} getPost={(id) => getpost(id)}></NewsOutlook>
                                        );

                                    })
                                }
                                {
                                    window.innerWidth >= 768 ?
                                        <NewsOutlook post={post[2]} getPost={(id) => getpost(id)}></NewsOutlook> : <></>
                                }

                            </div>

                        </div>
                    </div>
                </div>
                <div className="screen mt-5">
                    <div className="half-screen row pl-lg-5 py-2">
                        <div className="col-lg-3 text-center d-flex d-lg-block justify-content-center">
                            <h2 className="mx-md-5 mt-md-5 d-inline rotate partial-border font-bold">OBLASTI SMARTCITY
                                PREŠOV</h2>
                        </div>
                        <div className="row my-5 col-lg-9 pr-0">
                            <div className="col-md-6">
                                <div className="row background-primary justify-content-center py-5">

                                    <div
                                        className=" col-4 background-white rounded-lg text-center mr-3 text-uppercase font-semibold home-cards"
                                        onClick={()=>{navigate(`/mobilita`); changeSubpage()}}>
                                        <svg className="w-100 my-3" style={{transform: "scale(.8)"}} width="127.27"
                                             height="93.431" viewBox="0 0 127.27 93.431">
                                            <defs></defs>
                                            <g transform="translate(0 -68.066)">
                                                <g transform="translate(97.628 107.933)">
                                                    <g transform="translate(0 0)">
                                                        <path
                                                            d="M407.409,230.639c-4.331-2.165-12.45-2.19-12.794-2.19a1.864,1.864,0,1,0,0,3.729c2.1,0,8.179.323,11.126,1.8a1.864,1.864,0,0,0,1.667-3.335Z"
                                                            transform="translate(-392.751 -228.449)"/>
                                                    </g>
                                                </g>
                                                <g transform="translate(0 68.066)">
                                                    <g transform="translate(0 0)">
                                                        <path
                                                            d="M121.581,136.666l-7.7-2.2a.782.782,0,0,1-.565-.748v-2.57a14.014,14.014,0,0,0,1.783-1.462,13.715,13.715,0,0,0,4.2-9.922v-3.546l.744-1.489a11.894,11.894,0,0,0,1.249-5.291V99.831a1.864,1.864,0,0,0-1.864-1.864h-17.94A11.845,11.845,0,0,0,89.655,109.8v.111a9.888,9.888,0,0,0,1.039,4.4l.955,1.91v3.045a14.546,14.546,0,0,0,5.98,11.761v2.694c0,.415,0,.587-1.539,1.027l-3.757,1.073-10.868-3.952a1.862,1.862,0,0,0-.508-1.427l-3.473-3.649v-6.125c.367-.3.729-.613,1.08-.942a21.881,21.881,0,0,0,6.894-15.907V98.926a21.55,21.55,0,0,0,1.993-9.062V69.93a1.864,1.864,0,0,0-1.864-1.864H57.679A17.831,17.831,0,0,0,39.867,85.877v3.987a21.55,21.55,0,0,0,1.993,9.062v4.209a22.78,22.78,0,0,0,7.974,17.387v6.269l-3.473,3.649a1.862,1.862,0,0,0-.508,1.427l-11.47,4.171a9.776,9.776,0,0,0-2.3,1.208l-1.8-.9c5.362-2.334,7.06-5.616,7.142-5.779a1.864,1.864,0,0,0,0-1.667c-1.344-2.688-1.507-7.615-1.638-11.574-.044-1.318-.085-2.563-.164-3.672-.636-8.942-7.434-15.686-15.813-15.686S4.627,104.71,3.991,113.652c-.079,1.109-.12,2.354-.164,3.672-.131,3.959-.294,8.885-1.638,11.573a1.864,1.864,0,0,0,0,1.667c.082.163,1.777,3.439,7.149,5.775l-5,2.5A7.8,7.8,0,0,0,0,145.858v13.773a1.864,1.864,0,1,0,3.729,0V145.858A4.094,4.094,0,0,1,6,142.177l6.23-3.115,2.167,2.059a7.84,7.84,0,0,0,10.808,0l2.167-2.059,2.031,1.016a9.817,9.817,0,0,0-1.5,5.205v14.349a1.864,1.864,0,1,0,3.729,0V145.283a6.128,6.128,0,0,1,4.021-5.741l12.094-4.4,5.034,7.552a3.844,3.844,0,0,0,2.83,1.7q.193.019.385.019a3.843,3.843,0,0,0,2.724-1.13l3.071-3.071v19.42a1.864,1.864,0,0,0,3.729,0v-19.42l3.071,3.071a3.841,3.841,0,0,0,2.724,1.13q.191,0,.384-.019a3.843,3.843,0,0,0,2.83-1.7l5.035-7.552,12.093,4.4a6.128,6.128,0,0,1,4.021,5.741v14.349a1.864,1.864,0,1,0,3.729,0V145.284a9.855,9.855,0,0,0-2.757-6.821l.461-.132a10.225,10.225,0,0,0,1.735-.626l4.76,4.76v17.168a1.864,1.864,0,1,0,3.729,0V142.465l4.727-4.727a4.437,4.437,0,0,0,.793.315l7.7,2.2a4.133,4.133,0,0,1,2.985,3.958v15.423a1.864,1.864,0,1,0,3.729,0V144.21A7.879,7.879,0,0,0,121.581,136.666ZM11.96,133.374a13.4,13.4,0,0,1-5.983-3.841,20.55,20.55,0,0,0,1.063-4.464,13.9,13.9,0,0,0,4.921,6.071Zm10.68,5.046a4.114,4.114,0,0,1-5.671,0l-1.734-1.648a3.857,3.857,0,0,0,.453-1.821v-1.987a13.863,13.863,0,0,0,8.232,0v1.986a3.857,3.857,0,0,0,.453,1.821Zm-2.835-8.558a10.107,10.107,0,0,1-10.1-10.1,1.853,1.853,0,0,0-2.17-1.837c.005-.16.011-.321.016-.48.042-1.282.082-2.493.155-3.531a13.841,13.841,0,0,1,3.769-8.692,11.583,11.583,0,0,1,16.65,0,13.841,13.841,0,0,1,3.769,8.692c.074,1.038.114,2.249.156,3.531l.011.333a16.752,16.752,0,0,0-9.208-6.729,23.4,23.4,0,0,0-7.091-1.124,1.865,1.865,0,0,0-1.29.569l-3.364,3.489a1.864,1.864,0,0,0,2.684,2.588l2.8-2.9c2.41.118,10.165,1.02,13.181,7.661A10.072,10.072,0,0,1,19.805,129.861Zm7.843,3.519v-2.224a13.79,13.79,0,0,0,4.922-6.077,20.524,20.524,0,0,0,1.061,4.454A13.466,13.466,0,0,1,27.649,133.38Zm17.941-30.245V98.509A1.865,1.865,0,0,0,45.4,97.7,17.883,17.883,0,0,1,43.6,89.864V85.877A14.1,14.1,0,0,1,57.679,71.795H83.722V89.864A17.883,17.883,0,0,1,81.914,97.7a1.865,1.865,0,0,0-.185.811v5.308A17.9,17.9,0,0,1,76.013,117a18.554,18.554,0,0,1-1.431,1.212l-.032.023a17.926,17.926,0,0,1-12.1,3.609C53,121.236,45.589,113.016,45.589,103.135Zm10.5,37.513a.117.117,0,0,1-.1.037.119.119,0,0,1-.095-.057l-5.8-8.7,1.866-1.961,8.8,6.012Zm7.572-7.195-10.1-6.9v-3.48a20.991,20.991,0,0,0,8.648,2.5q.737.048,1.467.047a21.6,21.6,0,0,0,10.077-2.47v3.405Zm7.771,7.175a.119.119,0,0,1-.095.057.115.115,0,0,1-.1-.037l-4.665-4.665,8.8-6.013,1.866,1.961Zm34.043-1.573-4.231-4.231a5.114,5.114,0,0,0,.115-1.107v-.787a13.072,13.072,0,0,0,3.692.652c.144,0,.286.006.429.006a13.848,13.848,0,0,0,4.11-.622v.751a4.456,4.456,0,0,0,.135,1.087Zm7.03-12.044a10.02,10.02,0,0,1-7.342,2.845c-5.4-.162-9.784-4.914-9.784-10.593v-3.485a1.862,1.862,0,0,0-.2-.834l-1.152-2.3a6.141,6.141,0,0,1-.645-2.732V109.8a8.112,8.112,0,0,1,8.1-8.1h16.076v7.743a8.146,8.146,0,0,1-.855,3.624l-.941,1.882a1.863,1.863,0,0,0-.2.834v3.987A10.016,10.016,0,0,1,112.5,127.011Z"
                                                            transform="translate(0 -68.066)"/>
                                                    </g>
                                                </g>
                                                <g transform="translate(115.568 145.807)">
                                                    <g transform="translate(0 0)">
                                                        <path
                                                            d="M466.787,380.814a1.864,1.864,0,0,0-1.864,1.864v11.96a1.864,1.864,0,0,0,3.729,0v-11.96A1.865,1.865,0,0,0,466.787,380.814Z"
                                                            transform="translate(-464.923 -380.814)"/>
                                                    </g>
                                                </g>
                                                <g transform="translate(7.974 148.272)">
                                                    <g transform="translate(0 0)">
                                                        <path
                                                            d="M33.941,390.728a1.864,1.864,0,0,0-1.864,1.864v9.5a1.864,1.864,0,0,0,3.729,0v-9.5A1.865,1.865,0,0,0,33.941,390.728Z"
                                                            transform="translate(-32.077 -390.728)"/>
                                                    </g>
                                                </g>
                                                <g transform="translate(47.841 85.003)">
                                                    <g transform="translate(0 0)">
                                                        <path
                                                            d="M223.55,141.739c-7.051-7.051-21.8-5.7-27.82-4.8a3.827,3.827,0,0,0-3.27,3.813v4.295a1.864,1.864,0,0,0,3.729,0v-4.3a.123.123,0,0,1,.1-.126,58.9,58.9,0,0,1,12.112-.592c5.814.387,10.025,1.846,12.515,4.338a1.864,1.864,0,1,0,2.636-2.636Z"
                                                            transform="translate(-192.46 -136.203)"/>
                                                    </g>
                                                </g>
                                                <g transform="translate(39.867 149.794)">
                                                    <g transform="translate(0 0)">
                                                        <path
                                                            d="M162.248,396.853a1.864,1.864,0,0,0-1.864,1.864v7.974a1.864,1.864,0,1,0,3.729,0v-7.974A1.865,1.865,0,0,0,162.248,396.853Z"
                                                            transform="translate(-160.384 -396.853)"/>
                                                    </g>
                                                </g>
                                                <g transform="translate(83.722 149.794)">
                                                    <g transform="translate(0 0)">
                                                        <path
                                                            d="M338.67,396.853a1.864,1.864,0,0,0-1.864,1.864v7.974a1.864,1.864,0,1,0,3.729,0v-7.974A1.865,1.865,0,0,0,338.67,396.853Z"
                                                            transform="translate(-336.806 -396.853)"/>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                        <p>mobilita</p>
                                    </div>
                                    <div
                                        className=" col-4 background-white rounded-lg text-center ml-3 text-uppercase font-semibold home-cards"
                                        onClick={()=>{navigate(`/zivotne_prostredie`); changeSubpage()}}>
                                        <svg className="w-100 my-3" style={{transform: "scale(.8)"}} width="127.27"
                                             height="93.431" viewBox="0 0 127.27 93.431">
                                            <defs></defs>
                                            <g transform="translate(0 -68.066)">
                                                <g transform="translate(97.628 107.933)">
                                                    <g transform="translate(0 0)">
                                                        <path
                                                            d="M407.409,230.639c-4.331-2.165-12.45-2.19-12.794-2.19a1.864,1.864,0,1,0,0,3.729c2.1,0,8.179.323,11.126,1.8a1.864,1.864,0,0,0,1.667-3.335Z"
                                                            transform="translate(-392.751 -228.449)"/>
                                                    </g>
                                                </g>
                                                <g transform="translate(0 68.066)">
                                                    <g transform="translate(0 0)">
                                                        <path
                                                            d="M121.581,136.666l-7.7-2.2a.782.782,0,0,1-.565-.748v-2.57a14.014,14.014,0,0,0,1.783-1.462,13.715,13.715,0,0,0,4.2-9.922v-3.546l.744-1.489a11.894,11.894,0,0,0,1.249-5.291V99.831a1.864,1.864,0,0,0-1.864-1.864h-17.94A11.845,11.845,0,0,0,89.655,109.8v.111a9.888,9.888,0,0,0,1.039,4.4l.955,1.91v3.045a14.546,14.546,0,0,0,5.98,11.761v2.694c0,.415,0,.587-1.539,1.027l-3.757,1.073-10.868-3.952a1.862,1.862,0,0,0-.508-1.427l-3.473-3.649v-6.125c.367-.3.729-.613,1.08-.942a21.881,21.881,0,0,0,6.894-15.907V98.926a21.55,21.55,0,0,0,1.993-9.062V69.93a1.864,1.864,0,0,0-1.864-1.864H57.679A17.831,17.831,0,0,0,39.867,85.877v3.987a21.55,21.55,0,0,0,1.993,9.062v4.209a22.78,22.78,0,0,0,7.974,17.387v6.269l-3.473,3.649a1.862,1.862,0,0,0-.508,1.427l-11.47,4.171a9.776,9.776,0,0,0-2.3,1.208l-1.8-.9c5.362-2.334,7.06-5.616,7.142-5.779a1.864,1.864,0,0,0,0-1.667c-1.344-2.688-1.507-7.615-1.638-11.574-.044-1.318-.085-2.563-.164-3.672-.636-8.942-7.434-15.686-15.813-15.686S4.627,104.71,3.991,113.652c-.079,1.109-.12,2.354-.164,3.672-.131,3.959-.294,8.885-1.638,11.573a1.864,1.864,0,0,0,0,1.667c.082.163,1.777,3.439,7.149,5.775l-5,2.5A7.8,7.8,0,0,0,0,145.858v13.773a1.864,1.864,0,1,0,3.729,0V145.858A4.094,4.094,0,0,1,6,142.177l6.23-3.115,2.167,2.059a7.84,7.84,0,0,0,10.808,0l2.167-2.059,2.031,1.016a9.817,9.817,0,0,0-1.5,5.205v14.349a1.864,1.864,0,1,0,3.729,0V145.283a6.128,6.128,0,0,1,4.021-5.741l12.094-4.4,5.034,7.552a3.844,3.844,0,0,0,2.83,1.7q.193.019.385.019a3.843,3.843,0,0,0,2.724-1.13l3.071-3.071v19.42a1.864,1.864,0,0,0,3.729,0v-19.42l3.071,3.071a3.841,3.841,0,0,0,2.724,1.13q.191,0,.384-.019a3.843,3.843,0,0,0,2.83-1.7l5.035-7.552,12.093,4.4a6.128,6.128,0,0,1,4.021,5.741v14.349a1.864,1.864,0,1,0,3.729,0V145.284a9.855,9.855,0,0,0-2.757-6.821l.461-.132a10.225,10.225,0,0,0,1.735-.626l4.76,4.76v17.168a1.864,1.864,0,1,0,3.729,0V142.465l4.727-4.727a4.437,4.437,0,0,0,.793.315l7.7,2.2a4.133,4.133,0,0,1,2.985,3.958v15.423a1.864,1.864,0,1,0,3.729,0V144.21A7.879,7.879,0,0,0,121.581,136.666ZM11.96,133.374a13.4,13.4,0,0,1-5.983-3.841,20.55,20.55,0,0,0,1.063-4.464,13.9,13.9,0,0,0,4.921,6.071Zm10.68,5.046a4.114,4.114,0,0,1-5.671,0l-1.734-1.648a3.857,3.857,0,0,0,.453-1.821v-1.987a13.863,13.863,0,0,0,8.232,0v1.986a3.857,3.857,0,0,0,.453,1.821Zm-2.835-8.558a10.107,10.107,0,0,1-10.1-10.1,1.853,1.853,0,0,0-2.17-1.837c.005-.16.011-.321.016-.48.042-1.282.082-2.493.155-3.531a13.841,13.841,0,0,1,3.769-8.692,11.583,11.583,0,0,1,16.65,0,13.841,13.841,0,0,1,3.769,8.692c.074,1.038.114,2.249.156,3.531l.011.333a16.752,16.752,0,0,0-9.208-6.729,23.4,23.4,0,0,0-7.091-1.124,1.865,1.865,0,0,0-1.29.569l-3.364,3.489a1.864,1.864,0,0,0,2.684,2.588l2.8-2.9c2.41.118,10.165,1.02,13.181,7.661A10.072,10.072,0,0,1,19.805,129.861Zm7.843,3.519v-2.224a13.79,13.79,0,0,0,4.922-6.077,20.524,20.524,0,0,0,1.061,4.454A13.466,13.466,0,0,1,27.649,133.38Zm17.941-30.245V98.509A1.865,1.865,0,0,0,45.4,97.7,17.883,17.883,0,0,1,43.6,89.864V85.877A14.1,14.1,0,0,1,57.679,71.795H83.722V89.864A17.883,17.883,0,0,1,81.914,97.7a1.865,1.865,0,0,0-.185.811v5.308A17.9,17.9,0,0,1,76.013,117a18.554,18.554,0,0,1-1.431,1.212l-.032.023a17.926,17.926,0,0,1-12.1,3.609C53,121.236,45.589,113.016,45.589,103.135Zm10.5,37.513a.117.117,0,0,1-.1.037.119.119,0,0,1-.095-.057l-5.8-8.7,1.866-1.961,8.8,6.012Zm7.572-7.195-10.1-6.9v-3.48a20.991,20.991,0,0,0,8.648,2.5q.737.048,1.467.047a21.6,21.6,0,0,0,10.077-2.47v3.405Zm7.771,7.175a.119.119,0,0,1-.095.057.115.115,0,0,1-.1-.037l-4.665-4.665,8.8-6.013,1.866,1.961Zm34.043-1.573-4.231-4.231a5.114,5.114,0,0,0,.115-1.107v-.787a13.072,13.072,0,0,0,3.692.652c.144,0,.286.006.429.006a13.848,13.848,0,0,0,4.11-.622v.751a4.456,4.456,0,0,0,.135,1.087Zm7.03-12.044a10.02,10.02,0,0,1-7.342,2.845c-5.4-.162-9.784-4.914-9.784-10.593v-3.485a1.862,1.862,0,0,0-.2-.834l-1.152-2.3a6.141,6.141,0,0,1-.645-2.732V109.8a8.112,8.112,0,0,1,8.1-8.1h16.076v7.743a8.146,8.146,0,0,1-.855,3.624l-.941,1.882a1.863,1.863,0,0,0-.2.834v3.987A10.016,10.016,0,0,1,112.5,127.011Z"
                                                            transform="translate(0 -68.066)"/>
                                                    </g>
                                                </g>
                                                <g transform="translate(115.568 145.807)">
                                                    <g transform="translate(0 0)">
                                                        <path
                                                            d="M466.787,380.814a1.864,1.864,0,0,0-1.864,1.864v11.96a1.864,1.864,0,0,0,3.729,0v-11.96A1.865,1.865,0,0,0,466.787,380.814Z"
                                                            transform="translate(-464.923 -380.814)"/>
                                                    </g>
                                                </g>
                                                <g transform="translate(7.974 148.272)">
                                                    <g transform="translate(0 0)">
                                                        <path
                                                            d="M33.941,390.728a1.864,1.864,0,0,0-1.864,1.864v9.5a1.864,1.864,0,0,0,3.729,0v-9.5A1.865,1.865,0,0,0,33.941,390.728Z"
                                                            transform="translate(-32.077 -390.728)"/>
                                                    </g>
                                                </g>
                                                <g transform="translate(47.841 85.003)">
                                                    <g transform="translate(0 0)">
                                                        <path
                                                            d="M223.55,141.739c-7.051-7.051-21.8-5.7-27.82-4.8a3.827,3.827,0,0,0-3.27,3.813v4.295a1.864,1.864,0,0,0,3.729,0v-4.3a.123.123,0,0,1,.1-.126,58.9,58.9,0,0,1,12.112-.592c5.814.387,10.025,1.846,12.515,4.338a1.864,1.864,0,1,0,2.636-2.636Z"
                                                            transform="translate(-192.46 -136.203)"/>
                                                    </g>
                                                </g>
                                                <g transform="translate(39.867 149.794)">
                                                    <g transform="translate(0 0)">
                                                        <path
                                                            d="M162.248,396.853a1.864,1.864,0,0,0-1.864,1.864v7.974a1.864,1.864,0,1,0,3.729,0v-7.974A1.865,1.865,0,0,0,162.248,396.853Z"
                                                            transform="translate(-160.384 -396.853)"/>
                                                    </g>
                                                </g>
                                                <g transform="translate(83.722 149.794)">
                                                    <g transform="translate(0 0)">
                                                        <path
                                                            d="M338.67,396.853a1.864,1.864,0,0,0-1.864,1.864v7.974a1.864,1.864,0,1,0,3.729,0v-7.974A1.865,1.865,0,0,0,338.67,396.853Z"
                                                            transform="translate(-336.806 -396.853)"/>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                        <p>životné prostredie</p>
                                    </div>
                                </div>
                                {
                                    window.innerWidth >= 768 ?
                                        <>
                                            <div className="row">
                                                <div className="col-8  font-bold primary-color py-3 home-title">
                                                    riešime a realizujeme.
                                                </div>
                                                <div className="col-4 p-3 d-flex align-items-start">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="215" height="70"
                                                         viewBox="0 0 215 70">
                                                        <g transform="translate(-1195.5 -2361.5)">
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1410.5 2419.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1410.5 2390.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1381.5 2419.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1381.5 2390.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1352.5 2419.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1352.5 2390.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1323.5 2419.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1323.5 2390.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1294.5 2419.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1294.5 2390.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1265.5 2419.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1265.5 2390.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1236.5 2419.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1236.5 2390.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1207.5 2419.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1207.5 2390.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1410.5 2390.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1410.5 2361.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1381.5 2390.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1381.5 2361.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1352.5 2390.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1352.5 2361.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1323.5 2390.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1323.5 2361.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1294.5 2390.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1294.5 2361.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1265.5 2390.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1265.5 2361.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1236.5 2390.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1236.5 2361.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1207.5 2390.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1207.5 2361.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                        </>
                                        : <></>
                                }
                            </div>
                            <div className="col-md-6">
                                {
                                    window.innerWidth >= 768 ?
                                        <>
                                            <div className="row">
                                                <div className="col-4 p-3 d-flex align-items-end">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="215" height="70"
                                                         viewBox="0 0 215 70">
                                                        <g transform="translate(-1195.5 -2361.5)">
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1410.5 2419.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1410.5 2390.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1381.5 2419.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1381.5 2390.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1352.5 2419.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1352.5 2390.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1323.5 2419.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1323.5 2390.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1294.5 2419.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1294.5 2390.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1265.5 2419.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1265.5 2390.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1236.5 2419.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1236.5 2390.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1207.5 2419.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1207.5 2390.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1410.5 2390.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1410.5 2361.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1381.5 2390.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1381.5 2361.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1352.5 2390.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1352.5 2361.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1323.5 2390.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1323.5 2361.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1294.5 2390.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1294.5 2361.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1265.5 2390.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1265.5 2361.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1236.5 2390.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1236.5 2361.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1207.5 2390.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1207.5 2361.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <div className="col-8 h4 font-bold py-3 text-right home-title">
                                                    a týmto sa zaoberáme.
                                                </div>
                                            </div>
                                        </>
                                        : <></>
                                }
                                <div className="row background-secondary justify-content-center py-5">
                                    <div
                                        className=" col-4 background-white rounded-lg text-center mr-3 text-uppercase font-semibold home-cards"
                                        onClick={()=>{navigate(`/digitalne_mesto`); changeSubpage()}}>
                                        <svg className="w-100 my-3" style={{transform: "scale(.8)"}} width="127.27"
                                             height="93.431" viewBox="0 0 127.27 93.431">
                                            <defs></defs>
                                            <g transform="translate(0 -68.066)">
                                                <g transform="translate(97.628 107.933)">
                                                    <g transform="translate(0 0)">
                                                        <path
                                                            d="M407.409,230.639c-4.331-2.165-12.45-2.19-12.794-2.19a1.864,1.864,0,1,0,0,3.729c2.1,0,8.179.323,11.126,1.8a1.864,1.864,0,0,0,1.667-3.335Z"
                                                            transform="translate(-392.751 -228.449)"/>
                                                    </g>
                                                </g>
                                                <g transform="translate(0 68.066)">
                                                    <g transform="translate(0 0)">
                                                        <path
                                                            d="M121.581,136.666l-7.7-2.2a.782.782,0,0,1-.565-.748v-2.57a14.014,14.014,0,0,0,1.783-1.462,13.715,13.715,0,0,0,4.2-9.922v-3.546l.744-1.489a11.894,11.894,0,0,0,1.249-5.291V99.831a1.864,1.864,0,0,0-1.864-1.864h-17.94A11.845,11.845,0,0,0,89.655,109.8v.111a9.888,9.888,0,0,0,1.039,4.4l.955,1.91v3.045a14.546,14.546,0,0,0,5.98,11.761v2.694c0,.415,0,.587-1.539,1.027l-3.757,1.073-10.868-3.952a1.862,1.862,0,0,0-.508-1.427l-3.473-3.649v-6.125c.367-.3.729-.613,1.08-.942a21.881,21.881,0,0,0,6.894-15.907V98.926a21.55,21.55,0,0,0,1.993-9.062V69.93a1.864,1.864,0,0,0-1.864-1.864H57.679A17.831,17.831,0,0,0,39.867,85.877v3.987a21.55,21.55,0,0,0,1.993,9.062v4.209a22.78,22.78,0,0,0,7.974,17.387v6.269l-3.473,3.649a1.862,1.862,0,0,0-.508,1.427l-11.47,4.171a9.776,9.776,0,0,0-2.3,1.208l-1.8-.9c5.362-2.334,7.06-5.616,7.142-5.779a1.864,1.864,0,0,0,0-1.667c-1.344-2.688-1.507-7.615-1.638-11.574-.044-1.318-.085-2.563-.164-3.672-.636-8.942-7.434-15.686-15.813-15.686S4.627,104.71,3.991,113.652c-.079,1.109-.12,2.354-.164,3.672-.131,3.959-.294,8.885-1.638,11.573a1.864,1.864,0,0,0,0,1.667c.082.163,1.777,3.439,7.149,5.775l-5,2.5A7.8,7.8,0,0,0,0,145.858v13.773a1.864,1.864,0,1,0,3.729,0V145.858A4.094,4.094,0,0,1,6,142.177l6.23-3.115,2.167,2.059a7.84,7.84,0,0,0,10.808,0l2.167-2.059,2.031,1.016a9.817,9.817,0,0,0-1.5,5.205v14.349a1.864,1.864,0,1,0,3.729,0V145.283a6.128,6.128,0,0,1,4.021-5.741l12.094-4.4,5.034,7.552a3.844,3.844,0,0,0,2.83,1.7q.193.019.385.019a3.843,3.843,0,0,0,2.724-1.13l3.071-3.071v19.42a1.864,1.864,0,0,0,3.729,0v-19.42l3.071,3.071a3.841,3.841,0,0,0,2.724,1.13q.191,0,.384-.019a3.843,3.843,0,0,0,2.83-1.7l5.035-7.552,12.093,4.4a6.128,6.128,0,0,1,4.021,5.741v14.349a1.864,1.864,0,1,0,3.729,0V145.284a9.855,9.855,0,0,0-2.757-6.821l.461-.132a10.225,10.225,0,0,0,1.735-.626l4.76,4.76v17.168a1.864,1.864,0,1,0,3.729,0V142.465l4.727-4.727a4.437,4.437,0,0,0,.793.315l7.7,2.2a4.133,4.133,0,0,1,2.985,3.958v15.423a1.864,1.864,0,1,0,3.729,0V144.21A7.879,7.879,0,0,0,121.581,136.666ZM11.96,133.374a13.4,13.4,0,0,1-5.983-3.841,20.55,20.55,0,0,0,1.063-4.464,13.9,13.9,0,0,0,4.921,6.071Zm10.68,5.046a4.114,4.114,0,0,1-5.671,0l-1.734-1.648a3.857,3.857,0,0,0,.453-1.821v-1.987a13.863,13.863,0,0,0,8.232,0v1.986a3.857,3.857,0,0,0,.453,1.821Zm-2.835-8.558a10.107,10.107,0,0,1-10.1-10.1,1.853,1.853,0,0,0-2.17-1.837c.005-.16.011-.321.016-.48.042-1.282.082-2.493.155-3.531a13.841,13.841,0,0,1,3.769-8.692,11.583,11.583,0,0,1,16.65,0,13.841,13.841,0,0,1,3.769,8.692c.074,1.038.114,2.249.156,3.531l.011.333a16.752,16.752,0,0,0-9.208-6.729,23.4,23.4,0,0,0-7.091-1.124,1.865,1.865,0,0,0-1.29.569l-3.364,3.489a1.864,1.864,0,0,0,2.684,2.588l2.8-2.9c2.41.118,10.165,1.02,13.181,7.661A10.072,10.072,0,0,1,19.805,129.861Zm7.843,3.519v-2.224a13.79,13.79,0,0,0,4.922-6.077,20.524,20.524,0,0,0,1.061,4.454A13.466,13.466,0,0,1,27.649,133.38Zm17.941-30.245V98.509A1.865,1.865,0,0,0,45.4,97.7,17.883,17.883,0,0,1,43.6,89.864V85.877A14.1,14.1,0,0,1,57.679,71.795H83.722V89.864A17.883,17.883,0,0,1,81.914,97.7a1.865,1.865,0,0,0-.185.811v5.308A17.9,17.9,0,0,1,76.013,117a18.554,18.554,0,0,1-1.431,1.212l-.032.023a17.926,17.926,0,0,1-12.1,3.609C53,121.236,45.589,113.016,45.589,103.135Zm10.5,37.513a.117.117,0,0,1-.1.037.119.119,0,0,1-.095-.057l-5.8-8.7,1.866-1.961,8.8,6.012Zm7.572-7.195-10.1-6.9v-3.48a20.991,20.991,0,0,0,8.648,2.5q.737.048,1.467.047a21.6,21.6,0,0,0,10.077-2.47v3.405Zm7.771,7.175a.119.119,0,0,1-.095.057.115.115,0,0,1-.1-.037l-4.665-4.665,8.8-6.013,1.866,1.961Zm34.043-1.573-4.231-4.231a5.114,5.114,0,0,0,.115-1.107v-.787a13.072,13.072,0,0,0,3.692.652c.144,0,.286.006.429.006a13.848,13.848,0,0,0,4.11-.622v.751a4.456,4.456,0,0,0,.135,1.087Zm7.03-12.044a10.02,10.02,0,0,1-7.342,2.845c-5.4-.162-9.784-4.914-9.784-10.593v-3.485a1.862,1.862,0,0,0-.2-.834l-1.152-2.3a6.141,6.141,0,0,1-.645-2.732V109.8a8.112,8.112,0,0,1,8.1-8.1h16.076v7.743a8.146,8.146,0,0,1-.855,3.624l-.941,1.882a1.863,1.863,0,0,0-.2.834v3.987A10.016,10.016,0,0,1,112.5,127.011Z"
                                                            transform="translate(0 -68.066)"/>
                                                    </g>
                                                </g>
                                                <g transform="translate(115.568 145.807)">
                                                    <g transform="translate(0 0)">
                                                        <path
                                                            d="M466.787,380.814a1.864,1.864,0,0,0-1.864,1.864v11.96a1.864,1.864,0,0,0,3.729,0v-11.96A1.865,1.865,0,0,0,466.787,380.814Z"
                                                            transform="translate(-464.923 -380.814)"/>
                                                    </g>
                                                </g>
                                                <g transform="translate(7.974 148.272)">
                                                    <g transform="translate(0 0)">
                                                        <path
                                                            d="M33.941,390.728a1.864,1.864,0,0,0-1.864,1.864v9.5a1.864,1.864,0,0,0,3.729,0v-9.5A1.865,1.865,0,0,0,33.941,390.728Z"
                                                            transform="translate(-32.077 -390.728)"/>
                                                    </g>
                                                </g>
                                                <g transform="translate(47.841 85.003)">
                                                    <g transform="translate(0 0)">
                                                        <path
                                                            d="M223.55,141.739c-7.051-7.051-21.8-5.7-27.82-4.8a3.827,3.827,0,0,0-3.27,3.813v4.295a1.864,1.864,0,0,0,3.729,0v-4.3a.123.123,0,0,1,.1-.126,58.9,58.9,0,0,1,12.112-.592c5.814.387,10.025,1.846,12.515,4.338a1.864,1.864,0,1,0,2.636-2.636Z"
                                                            transform="translate(-192.46 -136.203)"/>
                                                    </g>
                                                </g>
                                                <g transform="translate(39.867 149.794)">
                                                    <g transform="translate(0 0)">
                                                        <path
                                                            d="M162.248,396.853a1.864,1.864,0,0,0-1.864,1.864v7.974a1.864,1.864,0,1,0,3.729,0v-7.974A1.865,1.865,0,0,0,162.248,396.853Z"
                                                            transform="translate(-160.384 -396.853)"/>
                                                    </g>
                                                </g>
                                                <g transform="translate(83.722 149.794)">
                                                    <g transform="translate(0 0)">
                                                        <path
                                                            d="M338.67,396.853a1.864,1.864,0,0,0-1.864,1.864v7.974a1.864,1.864,0,1,0,3.729,0v-7.974A1.865,1.865,0,0,0,338.67,396.853Z"
                                                            transform="translate(-336.806 -396.853)"/>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                        <div className={"row col-12 justify-content-center text-center m-0 p-0"}>
                                            <p className={"col-8"}>DIGITÁLNE MESTO</p>
                                        </div>
                                    </div>
                                    <div
                                        className=" col-4 background-white rounded-lg text-center ml-3 text-uppercase font-semibold home-cards"
                                        onClick={()=>{navigate(`/energia`); changeSubpage()}}>
                                        <svg className="w-100 my-3 " style={{transform: "scale(.8)"}} width="127.27"
                                             height="93.431" viewBox="0 0 127.27 93.431">
                                            <defs></defs>
                                            <g transform="translate(0 -68.066)">
                                                <g transform="translate(97.628 107.933)">
                                                    <g transform="translate(0 0)">
                                                        <path
                                                            d="M407.409,230.639c-4.331-2.165-12.45-2.19-12.794-2.19a1.864,1.864,0,1,0,0,3.729c2.1,0,8.179.323,11.126,1.8a1.864,1.864,0,0,0,1.667-3.335Z"
                                                            transform="translate(-392.751 -228.449)"/>
                                                    </g>
                                                </g>
                                                <g transform="translate(0 68.066)">
                                                    <g transform="translate(0 0)">
                                                        <path
                                                            d="M121.581,136.666l-7.7-2.2a.782.782,0,0,1-.565-.748v-2.57a14.014,14.014,0,0,0,1.783-1.462,13.715,13.715,0,0,0,4.2-9.922v-3.546l.744-1.489a11.894,11.894,0,0,0,1.249-5.291V99.831a1.864,1.864,0,0,0-1.864-1.864h-17.94A11.845,11.845,0,0,0,89.655,109.8v.111a9.888,9.888,0,0,0,1.039,4.4l.955,1.91v3.045a14.546,14.546,0,0,0,5.98,11.761v2.694c0,.415,0,.587-1.539,1.027l-3.757,1.073-10.868-3.952a1.862,1.862,0,0,0-.508-1.427l-3.473-3.649v-6.125c.367-.3.729-.613,1.08-.942a21.881,21.881,0,0,0,6.894-15.907V98.926a21.55,21.55,0,0,0,1.993-9.062V69.93a1.864,1.864,0,0,0-1.864-1.864H57.679A17.831,17.831,0,0,0,39.867,85.877v3.987a21.55,21.55,0,0,0,1.993,9.062v4.209a22.78,22.78,0,0,0,7.974,17.387v6.269l-3.473,3.649a1.862,1.862,0,0,0-.508,1.427l-11.47,4.171a9.776,9.776,0,0,0-2.3,1.208l-1.8-.9c5.362-2.334,7.06-5.616,7.142-5.779a1.864,1.864,0,0,0,0-1.667c-1.344-2.688-1.507-7.615-1.638-11.574-.044-1.318-.085-2.563-.164-3.672-.636-8.942-7.434-15.686-15.813-15.686S4.627,104.71,3.991,113.652c-.079,1.109-.12,2.354-.164,3.672-.131,3.959-.294,8.885-1.638,11.573a1.864,1.864,0,0,0,0,1.667c.082.163,1.777,3.439,7.149,5.775l-5,2.5A7.8,7.8,0,0,0,0,145.858v13.773a1.864,1.864,0,1,0,3.729,0V145.858A4.094,4.094,0,0,1,6,142.177l6.23-3.115,2.167,2.059a7.84,7.84,0,0,0,10.808,0l2.167-2.059,2.031,1.016a9.817,9.817,0,0,0-1.5,5.205v14.349a1.864,1.864,0,1,0,3.729,0V145.283a6.128,6.128,0,0,1,4.021-5.741l12.094-4.4,5.034,7.552a3.844,3.844,0,0,0,2.83,1.7q.193.019.385.019a3.843,3.843,0,0,0,2.724-1.13l3.071-3.071v19.42a1.864,1.864,0,0,0,3.729,0v-19.42l3.071,3.071a3.841,3.841,0,0,0,2.724,1.13q.191,0,.384-.019a3.843,3.843,0,0,0,2.83-1.7l5.035-7.552,12.093,4.4a6.128,6.128,0,0,1,4.021,5.741v14.349a1.864,1.864,0,1,0,3.729,0V145.284a9.855,9.855,0,0,0-2.757-6.821l.461-.132a10.225,10.225,0,0,0,1.735-.626l4.76,4.76v17.168a1.864,1.864,0,1,0,3.729,0V142.465l4.727-4.727a4.437,4.437,0,0,0,.793.315l7.7,2.2a4.133,4.133,0,0,1,2.985,3.958v15.423a1.864,1.864,0,1,0,3.729,0V144.21A7.879,7.879,0,0,0,121.581,136.666ZM11.96,133.374a13.4,13.4,0,0,1-5.983-3.841,20.55,20.55,0,0,0,1.063-4.464,13.9,13.9,0,0,0,4.921,6.071Zm10.68,5.046a4.114,4.114,0,0,1-5.671,0l-1.734-1.648a3.857,3.857,0,0,0,.453-1.821v-1.987a13.863,13.863,0,0,0,8.232,0v1.986a3.857,3.857,0,0,0,.453,1.821Zm-2.835-8.558a10.107,10.107,0,0,1-10.1-10.1,1.853,1.853,0,0,0-2.17-1.837c.005-.16.011-.321.016-.48.042-1.282.082-2.493.155-3.531a13.841,13.841,0,0,1,3.769-8.692,11.583,11.583,0,0,1,16.65,0,13.841,13.841,0,0,1,3.769,8.692c.074,1.038.114,2.249.156,3.531l.011.333a16.752,16.752,0,0,0-9.208-6.729,23.4,23.4,0,0,0-7.091-1.124,1.865,1.865,0,0,0-1.29.569l-3.364,3.489a1.864,1.864,0,0,0,2.684,2.588l2.8-2.9c2.41.118,10.165,1.02,13.181,7.661A10.072,10.072,0,0,1,19.805,129.861Zm7.843,3.519v-2.224a13.79,13.79,0,0,0,4.922-6.077,20.524,20.524,0,0,0,1.061,4.454A13.466,13.466,0,0,1,27.649,133.38Zm17.941-30.245V98.509A1.865,1.865,0,0,0,45.4,97.7,17.883,17.883,0,0,1,43.6,89.864V85.877A14.1,14.1,0,0,1,57.679,71.795H83.722V89.864A17.883,17.883,0,0,1,81.914,97.7a1.865,1.865,0,0,0-.185.811v5.308A17.9,17.9,0,0,1,76.013,117a18.554,18.554,0,0,1-1.431,1.212l-.032.023a17.926,17.926,0,0,1-12.1,3.609C53,121.236,45.589,113.016,45.589,103.135Zm10.5,37.513a.117.117,0,0,1-.1.037.119.119,0,0,1-.095-.057l-5.8-8.7,1.866-1.961,8.8,6.012Zm7.572-7.195-10.1-6.9v-3.48a20.991,20.991,0,0,0,8.648,2.5q.737.048,1.467.047a21.6,21.6,0,0,0,10.077-2.47v3.405Zm7.771,7.175a.119.119,0,0,1-.095.057.115.115,0,0,1-.1-.037l-4.665-4.665,8.8-6.013,1.866,1.961Zm34.043-1.573-4.231-4.231a5.114,5.114,0,0,0,.115-1.107v-.787a13.072,13.072,0,0,0,3.692.652c.144,0,.286.006.429.006a13.848,13.848,0,0,0,4.11-.622v.751a4.456,4.456,0,0,0,.135,1.087Zm7.03-12.044a10.02,10.02,0,0,1-7.342,2.845c-5.4-.162-9.784-4.914-9.784-10.593v-3.485a1.862,1.862,0,0,0-.2-.834l-1.152-2.3a6.141,6.141,0,0,1-.645-2.732V109.8a8.112,8.112,0,0,1,8.1-8.1h16.076v7.743a8.146,8.146,0,0,1-.855,3.624l-.941,1.882a1.863,1.863,0,0,0-.2.834v3.987A10.016,10.016,0,0,1,112.5,127.011Z"
                                                            transform="translate(0 -68.066)"/>
                                                    </g>
                                                </g>
                                                <g transform="translate(115.568 145.807)">
                                                    <g transform="translate(0 0)">
                                                        <path
                                                            d="M466.787,380.814a1.864,1.864,0,0,0-1.864,1.864v11.96a1.864,1.864,0,0,0,3.729,0v-11.96A1.865,1.865,0,0,0,466.787,380.814Z"
                                                            transform="translate(-464.923 -380.814)"/>
                                                    </g>
                                                </g>
                                                <g transform="translate(7.974 148.272)">
                                                    <g transform="translate(0 0)">
                                                        <path
                                                            d="M33.941,390.728a1.864,1.864,0,0,0-1.864,1.864v9.5a1.864,1.864,0,0,0,3.729,0v-9.5A1.865,1.865,0,0,0,33.941,390.728Z"
                                                            transform="translate(-32.077 -390.728)"/>
                                                    </g>
                                                </g>
                                                <g transform="translate(47.841 85.003)">
                                                    <g transform="translate(0 0)">
                                                        <path
                                                            d="M223.55,141.739c-7.051-7.051-21.8-5.7-27.82-4.8a3.827,3.827,0,0,0-3.27,3.813v4.295a1.864,1.864,0,0,0,3.729,0v-4.3a.123.123,0,0,1,.1-.126,58.9,58.9,0,0,1,12.112-.592c5.814.387,10.025,1.846,12.515,4.338a1.864,1.864,0,1,0,2.636-2.636Z"
                                                            transform="translate(-192.46 -136.203)"/>
                                                    </g>
                                                </g>
                                                <g transform="translate(39.867 149.794)">
                                                    <g transform="translate(0 0)">
                                                        <path
                                                            d="M162.248,396.853a1.864,1.864,0,0,0-1.864,1.864v7.974a1.864,1.864,0,1,0,3.729,0v-7.974A1.865,1.865,0,0,0,162.248,396.853Z"
                                                            transform="translate(-160.384 -396.853)"/>
                                                    </g>
                                                </g>
                                                <g transform="translate(83.722 149.794)">
                                                    <g transform="translate(0 0)">
                                                        <path
                                                            d="M338.67,396.853a1.864,1.864,0,0,0-1.864,1.864v7.974a1.864,1.864,0,1,0,3.729,0v-7.974A1.865,1.865,0,0,0,338.67,396.853Z"
                                                            transform="translate(-336.806 -396.853)"/>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                        <p>ENERGIA</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="half-screen row px-5 py-2">
                        <div className="col-lg-3 row text-center d-flex d-lg-block justify-content-lg-center">
                            <div className="col-lg-12 col-7 d-flex d-lg-block justify-content-end m-0 p-0">
                                <h2 className="mx-md-5 mt-md-5 d-inline rotate partial-border font-bold">PARTNERI</h2>
                            </div>
                            {
                                window.innerWidth <= 768 ?
                                    <>
                                        <div className="col-5">
                                            <svg style={{transform: "scale(.5) translateY(-75%)"}}
                                                 xmlns="http://www.w3.org/2000/svg" width="215" height="161"
                                                 viewBox="0 0 215 161">
                                                <g transform="translate(-1573.5 -3252.5)">
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1788.5 3401.5) rotate(90)"
                                                            fill="#d31920"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1788.5 3372.5) rotate(90)"
                                                            fill="#d31920"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1759.5 3401.5) rotate(90)"
                                                            fill="#d31920"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1759.5 3372.5) rotate(90)"
                                                            fill="#d31920"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1730.5 3401.5) rotate(90)"
                                                            fill="#d31920"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1730.5 3372.5) rotate(90)"
                                                            fill="#d31920"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1701.5 3401.5) rotate(90)"
                                                            fill="#d31920"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1701.5 3372.5) rotate(90)"
                                                            fill="#d31920"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1672.5 3401.5) rotate(90)"
                                                            fill="#d31920"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1672.5 3372.5) rotate(90)"
                                                            fill="#d31920"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1643.5 3401.5) rotate(90)"
                                                            fill="#d31920"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1643.5 3372.5) rotate(90)"
                                                            fill="#d31920"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1614.5 3401.5) rotate(90)"
                                                            fill="#d31920"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1614.5 3372.5) rotate(90)"
                                                            fill="#d31920"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1585.5 3401.5) rotate(90)"
                                                            fill="#d31920"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1585.5 3372.5) rotate(90)"
                                                            fill="#d31920"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1788.5 3341.5) rotate(90)"
                                                            fill="#191919"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1788.5 3312.5) rotate(90)"
                                                            fill="#191919"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1759.5 3341.5) rotate(90)"
                                                            fill="#191919"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1759.5 3312.5) rotate(90)"
                                                            fill="#191919"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1730.5 3341.5) rotate(90)"
                                                            fill="#191919"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1730.5 3312.5) rotate(90)"
                                                            fill="#191919"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1701.5 3341.5) rotate(90)"
                                                            fill="#191919"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1701.5 3312.5) rotate(90)"
                                                            fill="#191919"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1672.5 3341.5) rotate(90)"
                                                            fill="#191919"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1672.5 3312.5) rotate(90)"
                                                            fill="#191919"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1643.5 3341.5) rotate(90)"
                                                            fill="#191919"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1643.5 3312.5) rotate(90)"
                                                            fill="#191919"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1614.5 3341.5) rotate(90)"
                                                            fill="#191919"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1614.5 3312.5) rotate(90)"
                                                            fill="#191919"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1585.5 3341.5) rotate(90)"
                                                            fill="#191919"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1585.5 3312.5) rotate(90)"
                                                            fill="#191919"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1788.5 3281.5) rotate(90)"
                                                            fill="#d3d2d2"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1788.5 3252.5) rotate(90)"
                                                            fill="#d3d2d2"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1759.5 3281.5) rotate(90)"
                                                            fill="#d3d2d2"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1759.5 3252.5) rotate(90)"
                                                            fill="#d3d2d2"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1730.5 3281.5) rotate(90)"
                                                            fill="#d3d2d2"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1730.5 3252.5) rotate(90)"
                                                            fill="#d3d2d2"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1701.5 3281.5) rotate(90)"
                                                            fill="#d3d2d2"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1701.5 3252.5) rotate(90)"
                                                            fill="#d3d2d2"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1672.5 3281.5) rotate(90)"
                                                            fill="#d3d2d2"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1672.5 3252.5) rotate(90)"
                                                            fill="#d3d2d2"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1643.5 3281.5) rotate(90)"
                                                            fill="#d3d2d2"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1643.5 3252.5) rotate(90)"
                                                            fill="#d3d2d2"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1614.5 3281.5) rotate(90)"
                                                            fill="#d3d2d2"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1614.5 3252.5) rotate(90)"
                                                            fill="#d3d2d2"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1585.5 3281.5) rotate(90)"
                                                            fill="#d3d2d2"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1585.5 3252.5) rotate(90)"
                                                            fill="#d3d2d2"/>
                                                </g>
                                            </svg>
                                        </div>
                                    </>
                                    : <></>
                            }
                        </div>
                        <div className="row mt-5 pt-5 col-lg-9 sponsors">
                            <div className="col-md-3 text-center">
                                <img className="" src="./img/Image 7.png" alt="partneri"/>
                            </div>
                            {
                                window.innerWidth >= 768 ?
                                    <>
                                        <div className="col-md-6">
                                            <img className="" src="./img/Image 8.png" alt="partneri"/>
                                        </div>
                                        <div className="col-md-3">
                                            <svg transform="scale(.75)" xmlns="http://www.w3.org/2000/svg" width="215"
                                                 height="161" viewBox="0 0 215 161">
                                                <g transform="translate(-1573.5 -3252.5)">
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1788.5 3401.5) rotate(90)"
                                                            fill="#d31920"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1788.5 3372.5) rotate(90)"
                                                            fill="#d31920"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1759.5 3401.5) rotate(90)"
                                                            fill="#d31920"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1759.5 3372.5) rotate(90)"
                                                            fill="#d31920"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1730.5 3401.5) rotate(90)"
                                                            fill="#d31920"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1730.5 3372.5) rotate(90)"
                                                            fill="#d31920"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1701.5 3401.5) rotate(90)"
                                                            fill="#d31920"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1701.5 3372.5) rotate(90)"
                                                            fill="#d31920"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1672.5 3401.5) rotate(90)"
                                                            fill="#d31920"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1672.5 3372.5) rotate(90)"
                                                            fill="#d31920"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1643.5 3401.5) rotate(90)"
                                                            fill="#d31920"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1643.5 3372.5) rotate(90)"
                                                            fill="#d31920"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1614.5 3401.5) rotate(90)"
                                                            fill="#d31920"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1614.5 3372.5) rotate(90)"
                                                            fill="#d31920"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1585.5 3401.5) rotate(90)"
                                                            fill="#d31920"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1585.5 3372.5) rotate(90)"
                                                            fill="#d31920"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1788.5 3341.5) rotate(90)"
                                                            fill="#191919"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1788.5 3312.5) rotate(90)"
                                                            fill="#191919"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1759.5 3341.5) rotate(90)"
                                                            fill="#191919"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1759.5 3312.5) rotate(90)"
                                                            fill="#191919"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1730.5 3341.5) rotate(90)"
                                                            fill="#191919"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1730.5 3312.5) rotate(90)"
                                                            fill="#191919"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1701.5 3341.5) rotate(90)"
                                                            fill="#191919"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1701.5 3312.5) rotate(90)"
                                                            fill="#191919"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1672.5 3341.5) rotate(90)"
                                                            fill="#191919"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1672.5 3312.5) rotate(90)"
                                                            fill="#191919"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1643.5 3341.5) rotate(90)"
                                                            fill="#191919"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1643.5 3312.5) rotate(90)"
                                                            fill="#191919"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1614.5 3341.5) rotate(90)"
                                                            fill="#191919"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1614.5 3312.5) rotate(90)"
                                                            fill="#191919"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1585.5 3341.5) rotate(90)"
                                                            fill="#191919"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1585.5 3312.5) rotate(90)"
                                                            fill="#191919"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1788.5 3281.5) rotate(90)"
                                                            fill="#d3d2d2"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1788.5 3252.5) rotate(90)"
                                                            fill="#d3d2d2"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1759.5 3281.5) rotate(90)"
                                                            fill="#d3d2d2"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1759.5 3252.5) rotate(90)"
                                                            fill="#d3d2d2"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1730.5 3281.5) rotate(90)"
                                                            fill="#d3d2d2"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1730.5 3252.5) rotate(90)"
                                                            fill="#d3d2d2"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1701.5 3281.5) rotate(90)"
                                                            fill="#d3d2d2"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1701.5 3252.5) rotate(90)"
                                                            fill="#d3d2d2"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1672.5 3281.5) rotate(90)"
                                                            fill="#d3d2d2"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1672.5 3252.5) rotate(90)"
                                                            fill="#d3d2d2"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1643.5 3281.5) rotate(90)"
                                                            fill="#d3d2d2"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1643.5 3252.5) rotate(90)"
                                                            fill="#d3d2d2"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1614.5 3281.5) rotate(90)"
                                                            fill="#d3d2d2"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1614.5 3252.5) rotate(90)"
                                                            fill="#d3d2d2"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1585.5 3281.5) rotate(90)"
                                                            fill="#d3d2d2"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1585.5 3252.5) rotate(90)"
                                                            fill="#d3d2d2"/>
                                                </g>
                                            </svg>
                                        </div>
                                    </>
                                    : <></>
                            }

                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
    return <Loader />;
};