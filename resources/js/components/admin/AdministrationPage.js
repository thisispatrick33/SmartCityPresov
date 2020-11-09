import React, {useEffect, useState } from "react";
import { navigate } from '@reach/router';

export const AdministrationPage = ({logged, getAllPosts = f => f, allPosts, show = f => f, clear}) => {
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
            return (
                <div className={"row col-12 justify-content-around mx-0 position-relative px-0"}>
                    <div className="col-12 row mx-0 px-0 administration-bar position-fixed background-secondary">
                        <div className="col-2 row mx-0 align-items-center">
                            <div className="col-auto px-2 row mx-0">
                                <button onClick={()=>navigate(`/create`)} className={`create-button border-0 col-12 px-0 row mx-0 align-items-center shadow-sm`}>
                                    <p className={'mb-0 px-4 py-2 font-semibold color-white'}>+ Vytvoriť článok</p>
                                </button>
                            </div>
                        </div>
                        <div className="col-10 row mx-0 my-2 justify-content-end switch">
                            <div className="col-auto px-2 row mx-0">
                                <p className={'mb-0 px-4 py-2 color-secondary font-semibold'}>Zobrazenie príspevkov :</p>
                            </div>
                            <div className="col-auto px-2 row mx-0">
                                <button onClick={()=>setFilterPosts(0)} className={`${filterPosts == 0 && 'on'} col-auto row mx-0 align-items-center shadow-sm`}>
                                    <p className={'mb-0 px-4 py-2 font-semibold'}>Všetky</p>
                                </button>
                            </div>
                            <div className="col-auto px-2 row mx-0">
                                <button onClick={()=>setFilterPosts(1)} className={`${filterPosts == 1 && 'on'} col-auto row mx-0 align-items-center shadow-sm`}>
                                    <p className={'mb-0 px-4 py-2 font-semibold'}>Mobilita</p>
                                </button>
                            </div>
                            <div className="col-auto px-2 row mx-0">
                                <button onClick={()=>setFilterPosts(2)} className={`${filterPosts == 2 && 'on'} col-auto row mx-0 align-items-center shadow-sm`}>
                                    <p className={'mb-0 px-4 py-2 font-semibold'}>Životné prostredie</p>
                                </button>
                            </div>
                            <div className="col-auto px-2 row mx-0">
                                <button onClick={()=>setFilterPosts(3)} className={`${filterPosts == 3 && 'on'} col-auto row mx-0 align-items-center shadow-sm`}>
                                    <p className={'mb-0 px-4 py-2 font-semibold'}>Digitálne mesto</p>
                                </button>
                            </div>
                            <div className="col-auto px-2 row mx-0">
                                <button onClick={()=>setFilterPosts(4)} className={`${filterPosts == 4 && 'on'} col-auto row mx-0 align-items-center shadow-sm`}>
                                    <p className={'mb-0 px-4 py-2 font-semibold'}>Energia</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 align-items-center mb-3 background-primary py-5">
                        <h3 className={`font-bold subpage-title | col-12 | m-0 p-0 | text-center py-5`}>
                            aktuálne pripravujeme.
                        </h3>
                    </div>
                    <div className="col-12 row mx-0 justify-content-center">
                        <div className="col-11 row mx-0 my-3">
                            {data.filter(item => item.done === 0).filter(item => (item.subpage_id === filterPosts || filterPosts === 0)).map(({id, title, author, description, subpage_id, active})=>{
                            return(
                                <div className={'project-outlook-frame | col-xl-3 col-lg-3 col-md-6 col-12 | mx-0 my-2 p-0 | justify-content-center rounded'}>
                                    <div className={'project-outlook | row col-xl-11 col-lg-11 col-md-11 col-12 | m-0 p-0 rounded'}>
                                        <div className={'project-content | row col-12 | m-0 p-0 | justify-content-center rounded'}>
                                        <div className="col-12 px-0 row mx-0 headline justify-content-center">
                                            <div className="col-10 row mx-0 my-2 justify-content-between">
                                                <div className="col-auto px-0">
                                                    <p className={'mb-0 px-4 py-2 font-semibold color-primary'}>
                                                        {subpage_id == 1 && 'Mobilita'}
                                                        {subpage_id == 2 && 'Životné prostredie'}
                                                        {subpage_id == 3 && 'Digitálne mesto'}
                                                        {subpage_id == 4 && 'Energia'}
                                                    </p>
                                                </div>
                                                <div className="background-secondary tag col-auto px-0">
                                                    <p className={'mb-0 px-4 py-2 font-semibold'}>
                                                        {id}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                            <div className={'project-content | row col-12 | m-0 p-0 | justify-content-center border-0'}>
                                                <div className={'col-12 | p-0 mx-0'}>
                                                    <div className="col-12 my-3 mx-0">
                                                        <h4 className={'title | mb-1'}>{title}</h4>
                                                        <p className={'description'}>
                                                            {description.substring(0, 120)}...
                                                            <br/>
                                                        </p>
                                                        <p className={'mt-2'}> <span className={'show-more'}>Autor : </span> {author}</p>
                                                    </div>
                                                </div>


                                                <div className="col-12 px-0 py-3 row mx-0 align-items-center background-secondary rounded justify-content-center">
                                                    <div className="col-10 row mx-0 justify-content-between align-items-center">
                                                        <div className="col-auto row mx-0 px-0">
                                                            <button onClick={() => {clear();navigate(`/update/${id}`);}} className={`create-button edit-button border-0 col-12 px-3 py-2 row mx-0 align-items-center shadow-sm`}>
                                                                <p className={'mb-0 font-semibold color-white'}>Upravit článok</p>
                                                            </button>
                                                        </div>
                                                        <div className="col-auto row mx-0 edit-button" onClick={() => show(id, active == 1 ? 0 : 1)}>
                                                            <p className={'mb-0 font-regular color-primary'}>{active == 1 ? "Skryť" : "Zobraziť"}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        </div>
                    </div>
                    <div className="col-12 align-items-center mb-3 background-secondary py-5">
                        <h3 className={`font-bold subpage-title | col-12 | m-0 p-0 | text-center py-5`}>
                            už sme zrealizovali a vyriešili.
                        </h3>
                    </div>
                    <div className="col-12 row mx-0 justify-content-center">
                        <div className="col-11 row mx-0 my-3">
                            {data.filter(item => item.done === 1).filter(item => (item.subpage_id === filterPosts || filterPosts === 0)).map(({id, title, image, author, description,subpage_id, active})=>{
                                return(
                                    <div className={'project-outlook-frame | col-xl-3 col-lg-3 col-md-6 col-12 | mx-0 my-2 p-0 | justify-content-center'}>
                                        <div className={'project-outlook | row col-xl-11 col-lg-11 col-md-11 col-12 | m-0 p-0'}>
                                            <div className={'project-cover-image | col-12 | m-0 p-0 | justify-content-center'}>
                                                <img src={image.substr(image.indexOf('img'))} alt="project-cover-image" className={'col-12 | p-0'}/>
                                            </div>
                                            <div className="col-12 px-0 row mx-0 headline justify-content-center">
                                                <div className="col-10 row mx-0 my-2 justify-content-between">
                                                    <div className="background-primary tag col-auto px-0">
                                                        <p className={'mb-0 px-4 py-2 font-semibold'}>
                                                            {subpage_id == 1 && 'Mobilita'}
                                                            {subpage_id == 2 && 'Životné prostredie'}
                                                            {subpage_id == 3 && 'Digitálne mesto'}
                                                            {subpage_id == 4 && 'Energia'}
                                                        </p>
                                                    </div>
                                                    <div className="background-secondary tag col-auto px-0">
                                                        <p className={'mb-0 px-4 py-2 font-semibold'}>
                                                            {id}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={'project-content | row col-12 | m-0 p-0 | justify-content-center border-0'}>
                                                <div className={'col-12 | p-0 mx-0'}>
                                                    <div className="col-12 my-3 mx-0">
                                                        <h4 className={'title | mb-1'}>{title}</h4>
                                                        <p className={'description'}>
                                                            {description.substring(0, 120)}...
                                                            <br/>
                                                        </p>
                                                        <p className={'mt-2'}><span className={'show-more'}>Autor : </span> {author}</p>
                                                    </div>
                                                </div>
                                                <div className="col-12 px-0 py-3 row mx-0 align-items-center background-secondary rounded justify-content-center">
                                                    <div className="col-10 row mx-0 justify-content-between align-items-center">
                                                        <div className="col-auto row mx-0 px-0">
                                                            <button onClick={() => {clear();navigate(`/update/${id}`);}} className={`create-button edit-button border-0 col-12 px-3 py-2 row mx-0 align-items-center shadow-sm`}>
                                                                <p className={'mb-0 font-semibold color-white'}>Upravit článok</p>
                                                            </button>
                                                        </div>
                                                        <div className="col-auto row mx-0 edit-button" onClick={() => show(id, active == 1 ? 0 : 1)}>
                                                            <p className={'mb-0 font-regular color-primary'}>{active == 1 ? "Skryť" : "Zobraziť"}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
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
