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

                <h1 className={"col-10 offset-1"}>Subpage Id</h1>
                <p className={"col-3 d-inline offset-1"}>Mobilita</p>
                <input type="radio" name="subpage_id" value="1" checked={updatedData.subpage_id === 1} onClick={e => {setUpdatedData({...updatedData,subpage_id :1})}}/>
                <p className={"col-3 d-inline offset-1"}>Zivotne prostredie</p>
                <input type="radio" name="subpage_id" value="2" checked={updatedData.subpage_id === 2} onClick={e => {setUpdatedData({...updatedData,subpage_id : 2})}}/>
                <p className={"col-3 d-inline offset-1"}>Digitalne mesto</p>
                <input type="radio" name="subpage_id" value="3" checked={updatedData.subpage_id === 3} onClick={e => {setUpdatedData({...updatedData,subpage_id : 3})}}/>
                <p className={"col-3 d-inline offset-1"}>Energia</p>
                <input type="radio" name="subpage_id" value="4" checked={updatedData.subpage_id === 4} onClick={e => {setUpdatedData({...updatedData,subpage_id : 4})}}/>

                <h1 className={"col-10 offset-1"}>Stav</h1>
                <p className={"col-3 d-inline offset-1"}>Pripravujeme</p>
                <input type="radio" name="done" value="0" checked={updatedData.done === 0} onClick={e => {setUpdatedData({...updatedData,done : 0})}}/>
                <p className={"col-3 d-inline offset-1"}>Ukoncene</p>
                <input type="radio" name="done" value="1" checked={updatedData.done === 1} onClick={e => {setUpdatedData({...updatedData,done : 1})}}/>

                <input type="button" className={"offset-1 d-block"} value={"potvrdiť"} onClick={() => handleSubmit()}/>
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