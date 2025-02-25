import { useQuery } from "@tanstack/react-query";
import { fetchInvData } from "../../api/Api";
import { NavLink, useParams } from "react-router-dom";

export const FetchIND = () => {
    const {id} = useParams();

    const { data, isPending, isError, error } = useQuery({
        queryKey:["post", id], //useState
        queryFn: () => fetchInvData(id), //useEffect
    });

    console.log(data);

    if(isPending) return <h1>Loading...</h1>
    if(isError) return <h1>Error: {error.message || "Something went wrong!"}</h1>

    return(
        <div>
            <p>ID: {data.id}</p>
            <p>Title: {data.title}</p>
            <p>Body: {data.body}</p>
            <NavLink to="/rq">
                <button>Go Back</button>
            </NavLink>
        </div>
    );
};