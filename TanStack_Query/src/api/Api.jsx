import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});

// fetch data
export const fetchData = async(page) => {
    const res = await api.get(`/posts?_start=${page}&_limit=3`);
    return res.status === 200 ? res.data : [];
};

// to fetch individual data
export const fetchInvData = async(id) => {
    try {
        const res = await api.get(`/posts/${id}`);
        return res.status === 200 ? res.data : [];
    } catch(error){
        console.log(error);
    }
};

// delete post
export const deletePost = (id) => {
    return api.delete(`/posts/${id}`);
};

// update post
export const updatePost = (id) => {
    return api.patch(`/posts/${id}`, {title: "updated"});
};

// infinite scrolling
export const fetchUsers = async({pageParam = 1}) => {
    try {
        const res = await axios.get(`https://api.github.com/users?per_page=10&page=${pageParam}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}