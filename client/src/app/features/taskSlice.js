import {createSlice} from "@reduxjs/toolkit";
import {createTask} from "../service/taskService";


const taskSlice = createSlice({
    name: "task",
    initialState: {
        task: {},
        tasks: [],
        loading: false,
        success: false,
        error: null,
    },

    reducers: {
        reset: (state, action) => {
            state.loading = false;
            state.success = false;
            state.error = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createTask.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(createTask.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.success = true;
                state.task = action.payload;
            })
            .addCase(createTask.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.task = null;
                state.error = action.payload;
            })

    },
});

export const {reset} = taskSlice.actions;

export const taskReducer = taskSlice.reducer;
