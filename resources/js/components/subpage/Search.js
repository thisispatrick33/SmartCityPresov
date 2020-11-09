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
        $('body,html').css('overflowY', 'hidden');
        if(firstTime){
            searchFetchData();
            setFirstTime(false);
        }
    }, []);

    if(allSubpageData == null || allSubpageData["/mobilita"] == undefined || allSubpageData["/zivotne_prostredie"] == undefined || allSubpageData["/digitalne_mesto"] == undefined || allSubpageData["/energia"] == undefined){
        searchFetchData();
        return <Loader/>
    }
    else {
        return (
            <div className={"searchbar-frame row mx-0 p-0 m-0 justify-content-center align-items-start position-fixed"}>
                <div className="col-xl-10 col-lg-12 row mx-0 justify-content-around align-items-center">
                    <input onChange={e => setSearchInput(e.target.value)} className={'col-xl-8 py-3 px-4 mt-4 shadow-sm border-0 background-white'} placeholder={'Zadajte vyhľadávaný výraz'}/>
                    <div onClick={close} className={"col-auto order-xl-2 order-lg-2 order-md-2 order-1 p-0"}>
                        <svg className={"col-12 p-0 close-button"} width={24} height={24} enableBackground="new 0 0 357 357" version="1.1" viewBox="0 0 357 357" space="preserve" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="357 35.7 321.3 0 178.5 142.8 35.7 0 0 35.7 142.8 178.5 0 321.3 35.7 357 178.5 214.2 321.3 357 357 321.3 214.2 178.5"/>
                        </svg>
                    </div>
                </div>
                <div className={`row col-xl-10 col-lg-11 col-md-11 col-10 | my-4 p-0`}>
                    {
                        allSubpageData["/mobilita"].posts.filter(({done}) => done == 0).map((current) => {
                            return(
                                (current.title.toUpperCase().includes(searchInput.toUpperCase()) || current.description.toUpperCase().includes(searchInput.toUpperCase())) && <div key={current.id} className='col-3 mx-0 row'><NewsOutlook post={current} getPost={id => getPost(id)}/></div>
                            )
                        })
                    }
                    {
                        allSubpageData["/zivotne_prostredie"].posts.filter(({done}) => done == 0).map((current) => {
                            return(
                                (current.title.toUpperCase().includes(searchInput.toUpperCase()) || current.description.toUpperCase().includes(searchInput.toUpperCase())) && <div key={current.id} className='col-3 mx-0 row'><NewsOutlook post={current} getPost={id => getPost(id)}/></div>
                            )
                        })
                    }
                    {
                        allSubpageData["/digitalne_mesto"].posts.filter(({done}) => done == 0).map((current) => {
                            return(
                                (current.title.toUpperCase().includes(searchInput.toUpperCase()) || current.description.toUpperCase().includes(searchInput.toUpperCase())) && <div key={current.id} className='col-3 mx-0 row'><NewsOutlook post={current} getPost={id => getPost(id)}/></div>
                            )
                        })
                    }
                    {
                        allSubpageData["/energia"].posts.filter(({done}) => done == 0).map((current) => {
                            return(
                                (current.title.toUpperCase().includes(searchInput.toUpperCase()) || current.description.toUpperCase().includes(searchInput.toUpperCase())) && <div key={current.id} className='col-3 mx-0 row'><NewsOutlook post={current} getPost={id => getPost(id)}/></div>
                            )
                        })
                    }
                </div>
                <div className={`row col-xl-10 col-lg-11 col-md-11 col-10 | my-4 p-0`}>
                    {
                        allSubpageData["/mobilita"].posts.filter(({done}) => done == 1).map((current) => {
                            return(
                                (current.title.toUpperCase().includes(searchInput.toUpperCase()) || current.description.toUpperCase().includes(searchInput.toUpperCase())) && <div key={current.id} className='col-3 mx-0 row'><ProjectOutlook post={current} getPost={id => getPost(id)}/></div>
                            )
                        })
                    }
                    {
                        allSubpageData["/zivotne_prostredie"].posts.filter(({done}) => done == 1).map((current) => {
                            return(
                                (current.title.toUpperCase().includes(searchInput.toUpperCase()) || current.description.toUpperCase().includes(searchInput.toUpperCase())) && <div key={current.id} className='col-3 mx-0 row'><ProjectOutlook post={current} getPost={id => getPost(id)}/></div>
                            )
                        })
                    }
                    {
                        allSubpageData["/digitalne_mesto"].posts.filter(({done}) => done == 1).map((current) => {
                            return(
                                (current.title.toUpperCase().includes(searchInput.toUpperCase()) || current.description.toUpperCase().includes(searchInput.toUpperCase())) && <div key={current.id} className='col-3 mx-0 row'><ProjectOutlook post={current} getPost={id => getPost(id)}/></div>
                            )
                        })
                    }
                    {
                        allSubpageData["/energia"].posts.filter(({done}) => done == 1).map((current) => {
                            return(
                                (current.title.toUpperCase().includes(searchInput.toUpperCase()) || current.description.toUpperCase().includes(searchInput.toUpperCase())) && <div key={current.id} className='col-3 mx-0 row'><ProjectOutlook post={current} getPost={id => getPost(id)}/></div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }

};

