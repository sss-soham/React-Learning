const todoKey = 'react-todo';

export const getLocalStorage = () => {
    const rawData = localStorage.getItem(todoKey);
    if(!rawData) return [];
    return JSON.parse(rawData);
};

export const setLocalStorage = (task) => {
    return localStorage.setItem(todoKey, JSON.stringify(task));
};