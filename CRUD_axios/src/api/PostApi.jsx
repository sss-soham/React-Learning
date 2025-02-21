import axios from 'axios';

const api = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
})

// get method
export const getPost = async () => {
    return await api.get("/posts");
};

// delete method
export const deletePost = async (id) => {
    return await api.delete(`/posts/${id}`)
}