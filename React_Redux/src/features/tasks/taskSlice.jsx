import {  createSlice } from "@reduxjs/toolkit";
//import axios from "axios";

// // ✅ Define an async thunk to fetch tasks from API
// export const fetchTasks = createAsyncThunk("task/fetchTasks", async (_, { rejectWithValue }) => {
//     try {
//         const response = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5");
//         return response.data; // ✅ Redux will automatically dispatch fulfilled action with this data
//     } catch (error) {
//         return rejectWithValue(error.response.data); // ✅ Handles API errors
//     }
// });
const initialState = {
    task: [],
    // loading: false,
    // error: null,
};

export const taskReducer = createSlice({
    name: "task",
    initialState,
    reducers:{
        addTask(state, action) {
            state.task.push(action.payload);
            //state.task = [...state.task, action.payload];
        },
        deleteTask(state, action) {
            state.task = state.task.filter((curTask, index) => index !== action.payload);
        },
        clearTask(state) {
            state.task = [];
        },
    },
    // ✅ Handle API states inside `extraReducers`
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchTasks.pending, (state) => {
    //             state.loading = true;
    //             state.error = null;
    //         })
    //         .addCase(fetchTasks.fulfilled, (state, action) => {
    //             state.loading = false;
    //             state.task = action.payload; // ✅ Store fetched data in Redux
    //         })
    //         .addCase(fetchTasks.rejected, (state, action) => {
    //             state.loading = false;
    //             state.error = action.payload || "Something went wrong!";
    //         });
    // }
});

export const { addTask, deleteTask, clearTask } = taskReducer.actions;
export default taskReducer.reducer;