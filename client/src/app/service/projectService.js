import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const createProject = createAsyncThunk(
    "project/createProject",
    async (projectData, thunkApi) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const response = await axios.post(
                "/api/v1/project",
                projectData,
                config
            );
            console.log("Project Response:", response.data);
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

// get all project
export const getProject = createAsyncThunk(
    "project/getProject",
    async (thunkApi) => {
        try {
            const response = await axios.get("/api/v1/project");
            console.log("Project Response:", response.data);
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

// get project details
export const getProjectDetails = createAsyncThunk(
    "project/getProjectDetails",
    async ({id}, thunkApi) => {
        try {
            const response = await axios.get(`/api/v1/project/${id}`);
            console.log("Project Details Response:", response.data);
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
