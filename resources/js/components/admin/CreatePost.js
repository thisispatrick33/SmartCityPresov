import React, {useState } from "react";
import { navigate } from '@reach/router';

export const CreatePost = ({logged, post = f => f}) => {
    const [creationData, setCreationData] = useState({title: null, description: null, price: null, author: null, subpage_id: 1, done: 0});

    const handleSubmit = (e) =>{
        e.preventDefault();
        post(creationData);
    };

    if(logged.id!==undefined){
        return (
            <form encType="multipart/form-data" onSubmit={(e) => handleSubmit(e)}>
                <input name={`title`} className={"col-10 offset-1"} value={creationData.title} placeholder={`Zadajte názov`} onChange={e => {setCreationData({...creationData,title : e.target.value})}} required={true}/>
                <textarea name={`description`} className={"col-10 offset-1"} placeholder={`Zadajte text článku`} value={creationData.description} onChange={e => {setCreationData({...creationData,description : e.target.value})}} required={true}/>
                <input name={`price`} className={"col-10 offset-1"} value={creationData.price} placeholder={`Zadajte cenu projektu`} type={`number`} onChange={e => {setCreationData({...creationData,price : e.target.value})}} required={true}/>
                <input name={"author"} className={"col-10 offset-1"} value={creationData.author} placeholder={`Zadajte meno autora`} onChange={e => {setCreationData({...creationData,author : e.target.value})}} required={true}/>
                <input name={`images[]`} className={"col-10 offset-1"} type={`file`} onChange={e => {setCreationData({...creationData,images : e.target.files})}} multiple/>
                <h1 className={"col-10 offset-1"}>Subpage Id</h1>
                <p className={"col-3 d-inline offset-1"}>Mobilita</p>
                <input type="radio" name="subpage_id" value="1" checked={creationData.subpage_id === 1} onClick={e => {setCreationData({...creationData,subpage_id : 1})}}/>
                <p className={"col-3 d-inline offset-1"}>Zivotne prostredie</p>
                <input type="radio" name="subpage_id" value="2" checked={creationData.subpage_id === 2} onClick={e => {setCreationData({...creationData,subpage_id : 2})}}/>
                <p className={"col-3 d-inline offset-1"}>Digitalne mesto</p>
                <input type="radio" name="subpage_id" value="3" checked={creationData.subpage_id === 3} onClick={e => {setCreationData({...creationData,subpage_id : 3})}}/>
                <p className={"col-3 d-inline offset-1"}>Energia</p>
                <input type="radio" name="subpage_id" value="4" checked={creationData.subpage_id === 4} onClick={e => {setCreationData({...creationData,subpage_id : 4})}}/>

                <h1 className={"col-10 offset-1"}>Stav</h1>
                <p className={"col-3 d-inline offset-1"}>Pripravujeme</p>
                <input type="radio" name="done" value="0" checked={creationData.done === 0} onClick={e => {setCreationData({...creationData,done : 0})}}/>
                <p className={"col-3 d-inline offset-1"}>Ukoncene</p>
                <input type="radio" name="done" value="1" checked={creationData.done === 1} onClick={e => {setCreationData({...creationData,done : 1})}}/>
                <input type="submit" className={"offset-1 d-block"} value={"potvrdiť"}/>
            </form>

        );
    }
    else {
        return (
            <div>
                <h1>Unauthorized</h1>
                <div onClick={()=> navigate(`/`)}>
                    <h1>Go back!</h1>
                </div>
            </div>
        )
    }


};