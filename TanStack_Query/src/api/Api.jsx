import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});

// fetch data
export const fetchData = async() => {
    const res = await api.get("/posts?_start=0&_limit=3");
    return res.status === 200 ? res.data : [];
};
