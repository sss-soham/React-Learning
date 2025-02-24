import { useEffect, useState } from "react";
import { fetchData } from "../api/Api";

export const FetchOld =() => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const getPostData = async() => {
        try {
            const res = await fetchData();
            //console.log(res);
            res.status === 200 ? setData(res.data) : [];
            setLoading(false);
        } catch (error) {
            console.log(error);
            setError(true);
            return [];
        }
    };

    useEffect(() => {
        getPostData()
    },[])

    if(loading) return <h1>Loading...</h1>
    if(error) return <h1>Something went wrong!</h1>
    
    return(
        <div>
            <ul className="section-accordion">
                {
                    data ?.map((curElem) => {
                        const {id, title, body} = curElem;
                        return (
                            <li key={id}>
                                <p>{title}</p>
                                <p>{body}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};