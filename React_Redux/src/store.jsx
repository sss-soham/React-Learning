/* eslint-disable no-case-declarations */

import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from 'redux-thunk'

const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";
const FETCH_TASK = "task/fetch";

const initialState = {
    task: [],
    isLoading: false,
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state, 
                task: [...state.task, action.payload],
            };
        case DELETE_TASK:
            const updatedTask = state.task.filter((curTask, index) => {
                return index !== action.payload;
            });
            return {
                ...state, 
                task: updatedTask,
            };  
        case FETCH_TASK:
            return {
                ...state, 
                task:[...state.task, ...action.payload],
            } 
        default:
            return state;
    }
};

// create the Redux store using the reducer
export const store = createStore(
    taskReducer, 
    composeWithDevTools(applyMiddleware(thunk)));
console.log(store);

// Log the initial state
console.log("initial State: ", store.getState());

// create action creator
export const addTask = (data) => {
    return {type: ADD_TASK, payload: data}
};

export const deleteTask = (id) => {
    return {type: DELETE_TASK, payload: id}
};

export const fetchTask = () => {
    return async (dispatch) => {
        try {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/todos?_limit=3"
            );
            const task = await res.json();
            dispatch({type: FETCH_TASK, payload: task.map((curTask)=> curTask.title)});
        } catch(error) {
            console.log(error)
        }
    }
};

// Dispatch an action to add a task
store.dispatch(addTask("Buy drugs"));
store.dispatch(addTask("Buy a"));
store.dispatch(addTask("Buy b"));
console.log("Updated State: ", store.getState());

// Deletion
store.dispatch(deleteTask(0));
console.log("Deleted State: ", store.getState());