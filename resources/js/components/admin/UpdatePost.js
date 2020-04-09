import React, {useEffect, useState } from "react";
import { navigate } from '@reach/router';

export const UpdatePost = ({id, logged, changeSubpage, post = f => f, getpost = f => f, project}) => {
    const [updatedData, setUpdatedData] = useState({});
    const [images, setImages] = useState([]);

    useEffect(() => {
        if(project===null){
            getpost(id);
        }
        else {
            console.log(project);
            setUpdatedData(project);
            setImages(project.images);
        }
    }, [project]);

    const handleSubmit = () =>{
        post({...updatedData, updated_images: images.map(({id}) => id)});
    };

    const handleImages = index => setImages(images.filter((image) => image.id !== index));

    if(logged.id!==undefined){
        return (
            <form encType="multipart/form-data">
                <input name={`title`} className={"col-10 offset-1"} value={updatedData.title} placeholder={`Zadajte názov`} onChange={e => {setUpdatedData({...updatedData,title : e.target.value})}} required={true}/>
                <textarea name={`description`} className={"col-10 offset-1"} placeholder={`Zadajte text článku`} value={updatedData.description} onChange={e => {setUpdatedData({...updatedData,description : e.target.value})}} required={true}/>
                <input name={`price`} className={"col-10 offset-1"} value={updatedData.price} placeholder={`Zadajte cenu projektu`} type={`number`} onChange={e => {setUpdatedData({...updatedData,price : e.target.value})}} required={true}/>
                <input name={"author"} className={"col-10 offset-1"} value={updatedData.author} placeholder={`Zadajte meno autora`} onChange={e => {setUpdatedData({...updatedData,author : e.target.value})}} required={true}/>
                <div className={"col-10 offset-1"}>
                    {images.map(({path,id}) => {
                        return (
                            <div>
                                <span onClick={() => {handleImages(id)}}>x</span>
                                <img style={{height : "100px", width : "auto"}} src={`../${path.substr(path.indexOf('img'))}`}  className={"m-2"} alt=""/>
                            </div>
                        )
                    })}
                </div>
                <input name={`images[]`} className={"col-10 offset-1"} type={`file`} onChange={e => {setUpdatedData({...updatedData,images : e.target.files})}} multiple/>
                <input name={`subpage_id`} className={"col-10 offset-1"} value={updatedData.subpage_id} placeholder={`Zadajte subpageId`} onChange={e => {setUpdatedData({...updatedData,subpage_id : e.target.value})}} required={true}/>
                <input name={`done`} className={"col-10 offset-1"} value={updatedData.done} placeholder={`Zadajte stav`} onChange={e => {setUpdatedData({...updatedData,done : e.target.value})}} required={true}/>
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