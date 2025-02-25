import { NavLink } from "react-router-dom";
import { deletePost, fetchData, updatePost } from "../api/Api";
import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export const FetchRQ =() => {

    const [page, setPage] = useState(0);

    const { data, isPending, isError, error } = useQuery({
        queryKey:["posts", page], //useState
        queryFn: () => fetchData(page), //useEffect
        placeholderData: keepPreviousData,
    });

    const queryClient = useQueryClient();

    // mutation function to delete the post
    const deleteMutation = useMutation({
        mutationFn: (id) => deletePost(id),
        onSuccess: (data, id) => {
            queryClient.setQueryData(["posts", page], (cur) => {
                return cur ?.filter((post) => post.id !== id);
            })
        }
    });

    const updateMutation = useMutation({
        mutationFn: (id) => updatePost(id),
        onSuccess: (apiData, postId) => {
            queryClient.setQueryData(["posts", page], (postsData) => {
                return postsData ?.map((curPost) => {
                    return curPost.id === postId ? {...curPost, title: apiData.data.title}
                    : curPost;
                }
                );
            })
        }
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
                                <NavLink to={`/rq/${id}`}>
                                    <p>{id}</p>
                                    <p>{title}</p>
                                    <p>{body}</p>
                                </NavLink>
                                <button 
                                onClick={() => deleteMutation.mutate(id)}
                                >Delete
                                </button>
                                <button
                                onClick={() => updateMutation.mutate(id)}>
                                    Update
                                </button>
                            </li>
                        )
                    })
                }
            </ul>

            <div className="pagination-section container">
                <button disabled={page === 0 ? true : false}
                onClick={() => setPage((prev) => prev - 3)}>Prev</button>
                <p>{(page/3)+1}</p>
                <button onClick={() => setPage((prev) => prev + 3)}>Next</button>
            </div>
        </div>
    );
};