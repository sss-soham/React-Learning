import axios from 'axios';

const api = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
})

// get method
export const getData = async () => {
    return await api.get("/posts");
};

// delete method
export const deleteData = async (id) => {
    return await api.delete(`/posts/${id}`)
};

// post method
export const postData = (data) => {
    return api.post("/posts", data);
};

// put method
export const putData = async (id, data) => {
    return await api.put(`/posts/${id}`, data);
}