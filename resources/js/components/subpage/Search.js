import React, {useEffect, useState} from "react";
import $ from 'jquery';
import {ProjectOutlook} from "./outlook/ProjectOutlook";
import {NewsOutlook} from "./outlook/NewsOutlook";
import {Loader} from "../Utillities";
export const Search = ({close = f => f, searchFetchData = f => f, allSubpageData, getPost = f => f}) => {

    const [searchInput, setSearchInput] = useState("");
    const [firstTime, setFirstTime] = useState(true);
    useEffect(() => {
        $('.searchbar-frame').fadeIn();
        $('body,html').css('overflow', 'hidden');
        if(firstTime){
            searchFetchData();
            console.log("FirstTime");
            setFirstTime(false);
        }
    }, []);

    if(allSubpageData == null || allSubpageData["/mobilita"] == undefined || allSubpageData["/zivotne_prostredie"] == undefined || allSubpageData["/digitalne_mesto"] == undefined || allSubpageData["/energia"] == undefined){
        console.log("loader");
        searchFetchData();
        return <Loader/>
    }
    else {
        return (
            <div className={"searchbar-frame row mx-0 p-0 m-0 justify-content-center align-items-start position-fixed"}>
                <input onChange={e => setSearchInput(e.target.value)} className={'col-xl-8 py-3 px-4 mt-4 shadow-sm border-0 background-white'} placeholder={'Zadajte vyhľadávaný výraz'}/>
                <div className={`row col-xl-10 col-lg-11 col-md-11 col-10 | my-4 p-0`}>
                    {
                        allSubpageData["/mobilita"].posts.filter(({done}) => done == 0).map((current) => {
                            return(
                                (current.title.toUpperCase().includes(searchInput.toUpperCase()) || current.description.toUpperCase().includes(searchInput.toUpperCase())) && <div className='col-3 mx-0 row'><NewsOutlook post={current} getPost={id => getPost(id)}/></div>
                            )
                        })
                    }
                    {
                        allSubpageData["/zivotne_prostredie"].posts.filter(({done}) => done == 0).map((current) => {
                            return(
                                (current.title.toUpperCase().includes(searchInput.toUpperCase()) || current.description.toUpperCase().includes(searchInput.toUpperCase())) && <div className='col-3 mx-0 row'><NewsOutlook post={current} getPost={id => getPost(id)}/></div>
                            )
                        })
                    }
                    {
                        allSubpageData["/digitalne_mesto"].posts.filter(({done}) => done == 0).map((current) => {
                            return(
                                (current.title.toUpperCase().includes(searchInput.toUpperCase()) || current.description.toUpperCase().includes(searchInput.toUpperCase())) && <div className='col-3 mx-0 row'><NewsOutlook post={current} getPost={id => getPost(id)}/></div>
                            )
                        })
                    }
                    {
                        allSubpageData["/energia"].posts.filter(({done}) => done == 0).map((current) => {
                            return(
                                (current.title.toUpperCase().includes(searchInput.toUpperCase()) || current.description.toUpperCase().includes(searchInput.toUpperCase())) && <div className='col-3 mx-0 row'><NewsOutlook post={current} getPost={id => getPost(id)}/></div>
                            )
                        })
                    }       
                </div>
                <div className={`row col-xl-10 col-lg-11 col-md-11 col-10 | my-4 p-0`}>
                    {
                        allSubpageData["/mobilita"].posts.filter(({done}) => done == 1).map((current) => {
                            return(
                                (current.title.toUpperCase().includes(searchInput.toUpperCase()) || current.description.toUpperCase().includes(searchInput.toUpperCase())) && <div className='col-3 mx-0 row'><ProjectOutlook post={current} getPost={id => getPost(id)}/></div>
                            )
                        })
                    }
                    {
                        allSubpageData["/zivotne_prostredie"].posts.filter(({done}) => done == 1).map((current) => {
                            return(
                                (current.title.toUpperCase().includes(searchInput.toUpperCase()) || current.description.toUpperCase().includes(searchInput.toUpperCase())) && <div className='col-3 mx-0 row'><ProjectOutlook post={current} getPost={id => getPost(id)}/></div>
                            )
                        })
                    }
                    {
                        allSubpageData["/digitalne_mesto"].posts.filter(({done}) => done == 1).map((current) => {
                            return(
                                (current.title.toUpperCase().includes(searchInput.toUpperCase()) || current.description.toUpperCase().includes(searchInput.toUpperCase())) && <div className='col-3 mx-0 row'><ProjectOutlook post={current} getPost={id => getPost(id)}/></div>
                            )
                        })
                    }
                    {
                        allSubpageData["/energia"].posts.filter(({done}) => done == 1).map((current) => {
                            return(
                                (current.title.toUpperCase().includes(searchInput.toUpperCase()) || current.description.toUpperCase().includes(searchInput.toUpperCase())) && <div className='col-3 mx-0 row'><ProjectOutlook post={current} getPost={id => getPost(id)}/></div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }

};

