import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

// login service
export const login = createAsyncThunk(
    "auth/login",
    async (loginData, thunkApi) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const response = await axios.post(
                `/api/v1/auth/login`,
                loginData,
                config
            );
            console.log("Login Response:", response.data);
            if (response.data.statusCode === 400) {
                return thunkApi.rejectWithValue(response.data);
            }
            localStorage.setItem("userToken", response.data.token);
            return response.data;
        } catch (error) {
            const message = error?.message;
            return thunkApi.rejectWithValue(message);
        }
    }
);

// register service
export const register = createAsyncThunk(
    "auth/register",
    async (registerData, thunkApi) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const response = await axios.post(
                `/api/v1/auth/register`,
                registerData,
                config
            );
            console.log("Register Response:", response.data);
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

// get all user
export const getUsers = createAsyncThunk(
    "auth/getUsers",
    async (thunkApi) => {
        try {
            const response = await axios.get(`/api/v1/user`);
            console.log("Users Response:", response.data);
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

// get user details
export const getUserDetails = createAsyncThunk(
    "auth/getUserDetails",
    async ({email}, thunkApi) => {
        try {
            const response = await axios.get(`/api/v1/user/${email}`);
            console.log("User Details Response:", response.data);
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
