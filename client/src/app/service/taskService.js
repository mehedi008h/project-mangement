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
