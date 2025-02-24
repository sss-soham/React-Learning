import { fetchData } from "../api/Api";
import { useQuery } from "@tanstack/react-query";

export const FetchRQ =() => {

    const { data, isPending, isError, error } = useQuery({
        queryKey:["posts"], //useState
        queryFn: fetchData, //useEffect
        gcTime: 1000,
    });

    if(isPending) return <h1>Loading...</h1>
    if(isError) return <h1>Error: {error.message || "Something went wrong!"}</h1>

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