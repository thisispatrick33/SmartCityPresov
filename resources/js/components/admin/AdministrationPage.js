import React, {useEffect, useState } from "react";
import { navigate } from '@reach/router';

export const AdministrationPage = ({logged, getAllPosts = f => f, allPosts, hide = f => f, clear}) => {
    const [data, setData] = useState(null);
    const [filterPosts, setFilterPosts] = useState(0);

    useEffect(() => {
        if(allPosts===null){
            getAllPosts();
        }
        else {
            setData(allPosts);
        }
    }, [allPosts]);


    if(logged.id!==undefined){
        if(data===null){
            return (
                <div>
                    Loading...
                </div>
            )
        }
        else {
            console.log(data);
            return (
                <div className={"row col-12 mx-0"}>
                     <div className='col-12 mb-4 d-flex row'>
                        <p onClick={()=>{navigate(`/create`); changeSubpage()}} className={"offset-1 submit-sl col-auto mt-4 py-2 px-4 rounded"} >Vytvoriť článok</p>
                     </div>
                    <div className='col-12 mb-4 d-flex row'>
                        <p onClick={()=>setFilterPosts(0)} className={"offset-1 submit-sl col-auto mt-4 py-2 px-4 rounded"}>Všetky</p>
                    </div>
                    <div className='col-12 mb-4 d-flex row'>
                        <p onClick={()=>setFilterPosts(1)} className={"offset-1 submit-sl col-auto mt-4 py-2 px-4 rounded"}>Mobilita</p>
                    </div>
                    <div className='col-12 mb-4 d-flex row'>
                        <p onClick={()=>setFilterPosts(2)} className={"offset-1 submit-sl col-auto mt-4 py-2 px-4 rounded"}>Životné prostredie</p>
                    </div>
                    <div className='col-12 mb-4 d-flex row'>
                        <p onClick={()=>setFilterPosts(3)} className={"offset-1 submit-sl col-auto mt-4 py-2 px-4 rounded"}>Digitálne mesto</p>
                    </div>
                    <div className='col-12 mb-4 d-flex row'>
                        <p onClick={()=>setFilterPosts(4)} className={"offset-1 submit-sl col-auto mt-4 py-2 px-4 rounded"}>Energia</p>
                    </div>

                    <div className="col-12 align-items-center mb-3 mt-5 pt-4 px-0">
                        <div className={`row col-xl-9 col-lg-10 col-md-11 col-12 | align-items-start | justify-content-end | m-0 my-4 p-0`}>
                            <div className={`sub-page-sub-title background-primary | row col-xl-7 col-lg-8 col-md-10 col-12 | mx-0 p-0 py-5`}>
                                <h3 id={`here`} className={`font-bold subpage-title | col-12 | m-0 p-0 | text-center`}>
                                    aktuálne pripravujeme.
                                </h3>
                            </div>
                        </div>
                    </div>
                    {data.filter(item => item.done === 0).filter(item => (item.subpage_id === filterPosts || filterPosts === 0)).map(({id, title, author, description, subpage_id})=>{
                        return(
                            <div className={'project-outlook-frame | col-xl-3 col-lg-3 col-md-6 col-12 | mx-0 my-2 p-0 | justify-content-center rounded'}>
                                <div className={'project-outlook | row col-xl-11 col-lg-11 col-md-11 col-12 | m-0 p-0 rounded'}>
                                    <div className={'project-content | row col-12 | m-0 p-0 | justify-content-center rounded'}>
                                        <div className={'col-10 | p-0 mx-0 mt-3 mb-2 rounded'}>
                                        <p className={'my-2'}><span className={'show-more'}>ID článku : </span> {id}</p>
                                        <p className={'my-2'}><span className={'show-more'}>Oblasť : </span> {subpage_id == 4 && 'energia'} {subpage_id == 1 && 'mobilita'} {subpage_id == 2 && 'živ. prostredie'} {subpage_id == 3 && 'dig. mesto'}</p>
                                            <h4 className={'title | mb-1'}>{title.substring(0, 40)}...</h4>
                                            <p className={'description'}>
                                                {description.substring(0, 120)}...
                                                <br/>
                                                <p className={'my-2'}><span className={'show-more'}>Autor : </span> {author}</p>
                                                <br />
                                                <span className={'show-more'} onClick={() => {clear();navigate(`/update/${id}`);}}>Edit</span>
                                                <span className={'show-more ml-3'} onClick={() => hide(id)}>Delete</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    <div className="col-12 align-items-center mb-3 mt-5 pt-4 px-0">
                        <div className={`row col-xl-9 col-lg-10 col-md-11 col-12 | align-items-start | justify-content-end | m-0 my-4 p-0`}>
                            <div className={`sub-page-sub-title background-secondary | row col-xl-7 col-lg-8 col-md-10 col-12 | mx-0 p-0 py-5`}>
                                <h3 id={`here`} className={`font-bold subpage-title | col-12 | m-0 p-0 | text-center`}>
                                    už sme zrealizovali a vyriešili.
                                </h3>
                            </div>
                        </div>
                    </div>
                    {data.filter(item => item.done === 1).filter(item => (item.subpage_id === filterPosts || filterPosts === 0)).map(({id, title, image, author, description,subpage_id})=>{
                        return(
                            <div className={'project-outlook-frame | col-xl-3 col-lg-3 col-md-6 col-12 | mx-0 my-2 p-0 | justify-content-center'}>
                                <div className={'project-outlook | row col-xl-11 col-lg-11 col-md-11 col-12 | m-0 p-0'}>
                                    <div className={'project-cover-image | col-12 | m-0 p-0 | justify-content-center'}>
                                        <img src={image.substr(image.indexOf('img'))} alt="project-cover-image" className={'col-12 | p-0'}/>
                                    </div>
                                    <div className={'project-content | row col-12 | m-0 p-0 | justify-content-center'}>
                                        <div className={'col-10 | p-0 mx-0 mt-3 mb-2'}>
                                        <p className={'my-2'}><span className={'show-more'}>ID článku : </span> {id}</p>
                                        <p className={'my-2'}><span className={'show-more'}>Oblasť : </span> {subpage_id == 4 && 'energia'} {subpage_id == 1 && 'mobilita'} {subpage_id == 2 && 'živ. prostredie'} {subpage_id == 3 && 'dig. mesto'}</p>
                                            <h4 className={'title | mb-1'}>{title}</h4>
                                            <p className={'description'}>
                                                {description.substring(0, 120)}...
                                                <br/>
                                                <p className={'my-2'}><span className={'show-more'}>Autor : </span> {author}</p>
                                                <br />
                                                <span className={'show-more'} onClick={() => {clear();navigate(`/update/${id}`);}}>Edit</span>
                                                <span className={'show-more ml-3'} onClick={() => hide(id)}>Delete</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            );
        }
    }
    else {
        return (
            <div>
                <h1>Unauthorized</h1>
                <div onClick={()=>navigate(`/`)}>
                    <h1>Go back!</h1>
                </div>
            </div>
        )
    }
};