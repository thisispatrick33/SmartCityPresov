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
            <form encType="multipart/form-data" onSubmit={(e) => handleSubmit(e)} style={{minHeight : '95vh'}}>
                <div className='col-12 mb-4 d-flex row'>
                    <p onClick={()=>{navigate(`/administration`); changeSubpage()}} className={"offset-1 submit-sl col-auto mt-4 py-2 px-4 rounded"} >Späť do administrácie</p>
                </div>
                <h1 className='text-center col-12'>Momentálne vytvárate nový článok</h1>

                <input name={`title`} className={"col-10 offset-1 my-4"} value={creationData.title} placeholder={`Zadajte názov`} onChange={e => {setCreationData({...creationData,title : e.target.value})}} required={true}/>
                <textarea rows='10' name={`description`} className={"col-10 offset-1 my-4"} placeholder={`Zadajte text článku`} value={creationData.description} onChange={e => {setCreationData({...creationData,description : e.target.value})}} required={true}/>
                <input name={`price`} className={"col-10 offset-1 my-4"} value={creationData.price} placeholder={`Zadajte cenu projektu`} type={`number`} onChange={e => {setCreationData({...creationData,price : e.target.value})}} required={true}/>
                <p>Ak zadáte hodnotu 0, suma sa nezobrazí.</p>
                <input name={"author"} className={"col-10 offset-1 my-4"} value={creationData.author} placeholder={`Zadajte meno autora`} onChange={e => {setCreationData({...creationData,author : e.target.value})}} required={true}/>
                <input name={`images[]`} className={"col-10 offset-1 my-4 p-2"} type={`file`} onChange={e => {setCreationData({...creationData,images : e.target.files})}} multiple/>
                <h3 className={"col-10 offset-1 mt-4"}>Vyberte oblasť</h3>
                <p className={"col-3 d-inline offset-1"}>Mobilita</p>
                <input type="radio" name="subpage_id" value="1" checked={creationData.subpage_id === 1} onClick={e => {setCreationData({...creationData,subpage_id : 1})}}/>
                <p className={"col-3 d-inline offset-1"}>Životné prostredie</p>
                <input type="radio" name="subpage_id" value="2" checked={creationData.subpage_id === 2} onClick={e => {setCreationData({...creationData,subpage_id : 2})}}/>
                <p className={"col-3 d-inline offset-1"}>Digitálne mesto</p>
                <input type="radio" name="subpage_id" value="3" checked={creationData.subpage_id === 3} onClick={e => {setCreationData({...creationData,subpage_id : 3})}}/>
                <p className={"col-3 d-inline offset-1"}>Energia</p>
                <input type="radio" name="subpage_id" value="4" checked={creationData.subpage_id === 4} onClick={e => {setCreationData({...creationData,subpage_id : 4})}}/>

                <h3 className={"col-10 offset-1 mt-4"}>Vyberte stav projektu</h3>
                <p className={"col-3 d-inline offset-1"}>Pripravujeme</p>
                <input type="radio" name="done" value="0" checked={creationData.done === 0} onClick={e => {setCreationData({...creationData,done : 0})}}/>
                <p className={"col-3 d-inline offset-1"}>Ukončené</p>
                <input type="radio" name="done" value="1" checked={creationData.done === 1} onClick={e => {setCreationData({...creationData,done : 1})}}/>
                <div className='col-12 my-4 justify-content-center d-flex row'>
                    <input type="submit" className={"offset-1 submit-sl col-auto mt-4 py-2 px-4 rounded"} value={"Vytvoriť článok"} />
                </div>
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
