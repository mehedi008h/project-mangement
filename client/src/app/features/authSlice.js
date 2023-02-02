import {createSlice} from "@reduxjs/toolkit";
import {login, register} from "../service/authService";
import axios from "axios";

// initialize userToken from local storage
const token = localStorage.getItem('userToken')
    ? localStorage.getItem('userToken')
    : null

if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
} else {
    delete axios.defaults.headers.common["Authorization"];
}

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token,
        user: {},
        loading: false,
        success: false,
        error: null,
    },

    reducers: {
        reset: (state, action) => {
            state.user = null;
            state.token = null;
            state.loading = false;
            state.success = false;
            state.error = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.success = true;
                state.user = action.payload;
            })
            .addCase(register.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.user = null;
                state.error = action.payload;
            })
            .addCase(login.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.success = true;
                state.token = action.payload.token;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.token = null;
                state.error = action.payload;
            });
    },
});

export const {reset} = authSlice.actions;

export const authReducer = authSlice.reducer;
