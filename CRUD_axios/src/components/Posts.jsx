import { useEffect, useState } from "react";
import { deleteData, getData } from "../api/PostApi";
import { Card } from "../UI/Card";
import { Form } from "./Form";

export const Posts = () => {
    const [data, setData] = useState([]);
    const [updateData, setUpdateData] = useState({});
    const getPostData = async() => {
        try {
            const res = await getData();
            console.log('API Response:', res.data);
            setData(res.data);
        } catch(error) {
            console.log(error);
        }
    };

    const handleEdit = (curElem) => setUpdateData(curElem);


    const handleDeletePost = async(id) => {
        try {
            const res = await deleteData(id);
            if(res.status === 200) {
                const newUpdatedPost = data.filter((cur) => {
                    return cur.id !== id;
                });
                setData(newUpdatedPost);
            }
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(()=> {
        getPostData();
    }, []);

    return(
        <>
        <section className="section-post bg-slate-200 pt-8">
            <Form 
            data={data} 
            setData={setData}
            updateData={updateData}
            setUpdateData={setUpdateData}/>
        </section>
        <section className="section-post bg-slate-200">
            <ol className="max-w-[80%] mx-auto grid grid-cols-3 gap-3 p-4">
                {
                    data.map((curElem) => {
                        return <Card
                        key={curElem.id}
                        cardData = {curElem}
                        onDelete = {handleDeletePost}
                        onEdit = {handleEdit} />
                    })
                }
            </ol>
        </section>
        </>
    )
}