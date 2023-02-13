import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

// create task
export const createTask = createAsyncThunk(
    "task/createTask",
    async ({projectId, userEmail, values}, thunkApi) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const response = await axios.post(
                `/api/v1/backlog/${projectId}/${userEmail}`,
                values,
                config
            );
            console.log("Task Response:", response.data);
            if (response.data.statusCode === 400) {
                return thunkApi.rejectWithValue(response.data);
            }
            return response.data;
        } catch (error) {
            const message = error?.message;
            return thunkApi.rejectWithValue(message);
        }
    }
);

// get task by project
export const getProjectTask = createAsyncThunk(
    "task/getProjectTask",
    async ({projectId}, thunkApi) => {
        try {
            const response = await axios.get(
                `/api/v1/backlog/${projectId}`,
            );
            console.log("Task Response:", response.data);
            if (response.data.statusCode === 400) {
                return thunkApi.rejectWithValue(response.data);
            }
            return response.data;
        } catch (error) {
            const message = error?.message;
            return thunkApi.rejectWithValue(message);
        }
    }
);

// get task by project
export const getTaskDetails = createAsyncThunk(
    "task/getTaskDetails",
    async ({ptSequence}, thunkApi) => {
        try {
            const response = await axios.get(
                `/api/v1/backlog/taskDetails/${ptSequence}`,
            );
            console.log("Task Response:", response.data);
            if (response.data.statusCode === 400) {
                return thunkApi.rejectWithValue(response.data);
            }
            return response.data;
        } catch (error) {
            const message = error?.message;
            return thunkApi.rejectWithValue(message);
        }
    }
);

// get all task of user
export const getUserTask = createAsyncThunk(
    "task/getUserTask",
    async (thunkApi) => {
        try {
            const response = await axios.get(
                `/api/v1/backlog/all_task`,
            );
            console.log("Task Response:", response.data);
            if (response.data.statusCode === 400) {
                return thunkApi.rejectWithValue(response.data);
            }
            return response.data;
        } catch (error) {
            const message = error?.message;
            return thunkApi.rejectWithValue(message);
        }
    }
);

// update task status
export const updateTaskStatus = createAsyncThunk(
    "task/updateTaskStatus",
    async ({status, projectSequence}, thunkApi) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const response = await axios.put(
                `/api/v1/backlog/update-status/${projectSequence}`,
                status,
                config
            );
            console.log("Task Response:", response.data);
            if (response.data.statusCode === 400) {
                return thunkApi.rejectWithValue(response.data);
            }
            return response.data;
        } catch (error) {
            const message = error?.message;
            return thunkApi.rejectWithValue(message);
        }
    }
);
