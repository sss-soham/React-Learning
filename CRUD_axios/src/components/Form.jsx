/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { postData, putData } from "../api/PostApi";

export const Form = ({data, setData, updateData, setUpdateData}) => {

    const [addData, setAddData] = useState({
        title: "",
        body: "",
        id: null
    });

    let isEmpty = Object.keys(updateData).length === 0;

    useEffect(()=> {
        updateData && setAddData({
            title: updateData.title || "",
            body: updateData.body || "",
            id: updateData.id,
        })
    },[updateData]);

    const addPostData = async() => {
        const maxId = data.length > 0 ? Math.max(...data.map(post => post.id)) : 0;
        const newId = maxId + 1;
        const postWithId = { ...addData, id: newId };
        
        const res = await postData(postWithId);
        console.log("res", res);
        if((res.status === 201)){
            const newPost = { ...res.data, id: newId };
            setData([...data, newPost]);
            setAddData({title: "", body: "", id: null});
        }
    };

    const updatePostData = async() => {
        const res = await putData(updateData.id, addData);
        console.log(res);
        if (res.status === 200) {
            const updatedPosts = data.map(post => 
                post.id === updateData.id ? { ...addData, id: updateData.id } : post
            );
            setData(updatedPosts);
            setUpdateData({});
            setAddData({title: "", body: "", id: null});
        }
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const action = e.nativeEvent.submitter.value;
        if(action === "Add") {
            addPostData();
        } else if(action === "Edit") {
            updatePostData();
        }
    };

    return(
        <form className="text-center" onSubmit={handleFormSubmit}>
            <div>
                <label htmlFor="title"></label>
                <input 
                type="text"
                autoComplete="off"
                id="title"
                name="title"
                placeholder="Add Title"
                value={addData.title}
                onChange={(e) => setAddData({...addData, title: e.target.value})} />
            </div>

            <div>
                <label htmlFor="body"></label>
                <input 
                type="text"
                autoComplete="off"
                id="body"
                name="body"
                placeholder="Add Post"
                value={addData.body}
                onChange={(e) => setAddData({...addData, body: e.target.value})} />
            </div>

            <button type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
            value={isEmpty ? "Add" : "Edit"}>
                {isEmpty ? "Add" : "Edit"}
            </button>
        </form>
    )
};