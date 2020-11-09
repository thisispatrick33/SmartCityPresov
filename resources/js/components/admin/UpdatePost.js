import React, {useEffect, useState } from "react";
import { navigate } from '@reach/router';

export const UpdatePost = ({id, logged, post = f => f, getpost = f => f, project}) => {
    const [updatedData, setUpdatedData] = useState({});
    const [images, setImages] = useState([]);

    useEffect(() => {
        if(project===null){
            getpost(id);
        }
        else {
            setUpdatedData(project);
            setImages(project.images);
        }
    }, [project]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        post({...updatedData, updated_images: images.map(({id}) => id)});
    };

    const handleImages = index => setImages(images.filter((image) => image.id !== index));

    if(logged.id!==undefined){
        return (
            <form className={'mt-5 row mx-0'} encType="multipart/form-data" onSubmit={(e) => handleSubmit(e)} style={{minHeight : '95vh'}}>
                 <div className='col-12 mb-4 d-flex row'>
                    <p onClick={()=>{navigate(`/administration`); changeSubpage()}} className={"offset-1 submit-sl col-auto mt-4 py-2 px-4 rounded"} >Späť do administrácie</p>
                </div>
                <h1 className='text-center col-12'>Momentálne upravujete článok {id}</h1>
                <input name={`title`} className={"col-10 offset-1 my-4"} value={updatedData.title} placeholder={`Zadajte názov`} onChange={e => {setUpdatedData({...updatedData,title : e.target.value})}} required={true}/>
                <textarea rows='10' name={`description`} className={"col-10 my-4 offset-1"} placeholder={`Zadajte text článku`} value={updatedData.description} onChange={e => {setUpdatedData({...updatedData,description : e.target.value})}} required={true}/>
                <input name={`price`} className={"col-10 offset-1 my-4"} value={updatedData.price} placeholder={`Zadajte cenu projektu`} type={`number`} onChange={e => {setUpdatedData({...updatedData,price : e.target.value})}} required={true}/>
                <p className={"col-10 offset-1 mb-4"}>Ak zadáte hodnotu 0, suma sa nezobrazí.</p>
                <input name={"author"} className={"col-10 offset-1 my-4"} value={updatedData.author} placeholder={`Zadajte meno autora`} onChange={e => {setUpdatedData({...updatedData,author : e.target.value})}} required={true}/>
                <div className={"col-10 offset-1 my-4"}>
                    {images.map(({path,id}) => {
                        return (
                            <div>
                                <span onClick={() => {handleImages(id)}}>x</span>
                                <img style={{height : "100px", width : "auto"}} src={`../${path.substr(path.indexOf('img'))}`}  className={"m-2"} alt=""/>
                            </div>
                        )
                    })}
                </div>
                <input name={`images[]`} className={"col-10 offset-1 p-2"} type={`file`} onChange={e => {setUpdatedData({...updatedData,images : e.target.files})}} multiple placeholder='Vyberte fotografie'/>

                <h3 className={"col-10 offset-1 mt-4"}>Vyberte oblasť</h3>
                <p className={"col-3 d-inline offset-1"}>Mobilita</p>
                <input type="radio" name="subpage_id" value="1" checked={updatedData.subpage_id === 1} onClick={e => {setUpdatedData({...updatedData,subpage_id :1})}}/>
                <p className={"col-3 d-inline offset-1"}>Životné prostredie</p>
                <input type="radio" name="subpage_id" value="2" checked={updatedData.subpage_id === 2} onClick={e => {setUpdatedData({...updatedData,subpage_id : 2})}}/>
                <p className={"col-3 d-inline offset-1"}>Digitálne mesto</p>
                <input type="radio" name="subpage_id" value="3" checked={updatedData.subpage_id === 3} onClick={e => {setUpdatedData({...updatedData,subpage_id : 3})}}/>
                <p className={"col-3 d-inline offset-1"}>Energia</p>
                <input type="radio" name="subpage_id" value="4" checked={updatedData.subpage_id === 4} onClick={e => {setUpdatedData({...updatedData,subpage_id : 4})}}/>

                <h3 className={"col-10 offset-1 mt-4"}>Vyberte stav projektu</h3>
                <p className={"col-3 d-inline offset-1"}>Pripravujeme</p>
                <input type="radio" name="done" value="0" checked={updatedData.done === 0} onClick={e => {setUpdatedData({...updatedData,done : 0})}}/>
                <p className={"col-3 d-inline offset-1"}>Ukončené</p>
                <input type="radio" name="done" value="1" checked={updatedData.done === 1} onClick={e => {setUpdatedData({...updatedData,done : 1})}}/>
                <div className='col-12 my-4 justify-content-center d-flex row'>
                    <input type="submit" className={"offset-1 submit-sl col-4 mt-4 py-2 px-4 rounded"} value={"Upraviť zmeny"} />
                </div>

            </form>

        );
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
