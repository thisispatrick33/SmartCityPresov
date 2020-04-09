import React, {useState } from "react";
import { navigate } from '@reach/router';

export const CreatePost = ({logged, changeSubpage, post = f => f}) => {
    const [creationData, setCreationData] = useState({title: null, description: null, price: null, author: null, subpage_id: null, done: null});

    const handleSubmit = () =>{
        post(creationData);
    };

    if(logged.id!==undefined){
        return (
            <form encType="multipart/form-data">
                <input name={`title`} className={"col-10 offset-1"} value={creationData.title} placeholder={`Zadajte názov`} onChange={e => {setCreationData({...creationData,title : e.target.value})}} required={true}/>
                <textarea name={`description`} className={"col-10 offset-1"} placeholder={`Zadajte text článku`} value={creationData.description} onChange={e => {setCreationData({...creationData,description : e.target.value})}} required={true}/>
                <input name={`price`} className={"col-10 offset-1"} value={creationData.price} placeholder={`Zadajte cenu projektu`} type={`number`} onChange={e => {setCreationData({...creationData,price : e.target.value})}} required={true}/>
                <input name={"author"} className={"col-10 offset-1"} value={creationData.author} placeholder={`Zadajte meno autora`} onChange={e => {setCreationData({...creationData,author : e.target.value})}} required={true}/>
                <input name={`images[]`} className={"col-10 offset-1"} type={`file`} onChange={e => {setCreationData({...creationData,images : e.target.files})}} multiple/>
                <input name={`subpage_id`} className={"col-10 offset-1"} value={creationData.subpage_id} placeholder={`Zadajte subpage_id`} onChange={e => {setCreationData({...creationData,subpage_id : e.target.value})}} required={true}/>
                <input name={`done`} className={"col-10 offset-1"} value={creationData.done} placeholder={`Zadajte stav`} onChange={e => {setCreationData({...creationData,done : e.target.value})}} required={true}/>
                <input type="button" value={"potvrdiť"} onClick={() => handleSubmit()}/>
            </form>

        );
    }
    else {
        return (
            <div>
                <h1>Unauthorized</h1>
                <div onClick={()=>{navigate(`/`); changeSubpage()}}>
                    <h1>Go back!</h1>
                </div>
            </div>
        )
    }


};