import React, {useEffect, useState} from "react";
import $ from 'jquery';
import {ProjectOutlook} from "./outlook/ProjectOutlook";
export const Search = ({close = f => f, searchFetchData = f => f, allSubpageData, getPost = f => f}) => {

    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        $('.project-details-frame').fadeIn();
        $('.project-details-frame .project-content').animate({
            marginTop: '10vh',
            easing: 'easeInOutCirc'
        },1000);
        $('.gallery').css("maxHeight",$('.project-content .content').height());

        searchFetchData("/mobilita", false);
        searchFetchData("/zivotne_prostredie", false);
        searchFetchData("/digitalne_mesto", false);
        searchFetchData("/energia", false);
    }, []);

    return (
        <div className={"project-details-frame row mx-0 p-0 m-0 justify-content-center"} style={{display : `none`}}>
            <div className="project-content col-xl-9 col-lg-9 col-md-10 col-12 row mx-0 shadow p-0 justify-content-start align-items-start">
                <div className="gallery m-0 col-xl-2 col-lg-2 col-12 order-xl-1 order-lg-1 order-2 row mx-0 p-0 " style={{overflowY : 'scroll'}}>
                    <div className="col-12 p-0 mt-5 title">
                        <h3 className={"text-center"}>galéria</h3>
                    </div>

                </div>
                <div className="content m-0 shadow col-xl-10 col-lg-10 col-12 order-xl-2 order-lg-2 order-1 row mx-0 justify-content-end p-0 align-items-start">
                    <div className="col-12 row mx-0 p-0">
                        <div className="col-12 row mx-0 mt-5 px-5 title p-0 justify-content-xl-start justify-content-lg-start justify-content-md-start justify-content-end">
                            <h2 className={"title p-xl-2 p-lg-2 p-md-2 px-0 col-xl-11 col-lg-11 col-md-11 col-12 order-xl-1 order-lg-1 order-md-1 order-2 mb-3"}>SearchBar</h2>
                            <span onClick={() => close()} className={"col-1 order-xl-2 order-lg-2 order-md-2 order-1 p-0"}>
                                <svg className={"col-12 p-0 close-button"} enableBackground="new 0 0 357 357" version="1.1" viewBox="0 0 357 357" space="preserve" xmlns="http://www.w3.org/2000/svg">
                                        <polygon points="357 35.7 321.3 0 178.5 142.8 35.7 0 0 35.7 142.8 178.5 0 321.3 35.7 357 178.5 214.2 321.3 357 357 321.3 214.2 178.5"/>
                                </svg>
                            </span>
                        </div>
                        <input onChange={e => setSearchInput(e.target.value)}/>
                        {
                            console.log(allSubpageData)
                        }
                        {
                            allSubpageData["/mobilita"].posts.map((current) => {
                                return(
                                    (current.title.toUpperCase().includes(searchInput.toUpperCase()) || current.description.toUpperCase().includes(searchInput.toUpperCase())) && <ProjectOutlook post={current} getPost={id => getPost(id)}/>
                                )
                            })
                        }
                        {
                            allSubpageData["/zivotne_prostredie"].posts.map((current) => {
                                return(
                                    (current.title.toUpperCase().includes(searchInput.toUpperCase()) || current.description.toUpperCase().includes(searchInput.toUpperCase())) && <ProjectOutlook post={current} getPost={id => getPost(id)}/>
                                )
                            })
                        }
                        {
                            allSubpageData["/digitalne_mesto"].posts.map((current) => {
                                return(
                                    (current.title.toUpperCase().includes(searchInput.toUpperCase()) || current.description.toUpperCase().includes(searchInput.toUpperCase())) && <ProjectOutlook post={current} getPost={id => getPost(id)}/>
                                )
                            })
                        }
                        {
                            allSubpageData["/energia"].posts.map((current) => {
                                return(
                                    (current.title.toUpperCase().includes(searchInput.toUpperCase()) || current.description.toUpperCase().includes(searchInput.toUpperCase())) && <ProjectOutlook post={current} getPost={id => getPost(id)}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

