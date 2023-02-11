import {createSlice} from "@reduxjs/toolkit";
import {getUserDetails, getUsers} from "../service/userService";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {},
        users: [],
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
            .addCase(getUsers.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.success = true;
                state.users = action.payload;
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.users = null;
                state.error = action.payload;
            })
            .addCase(getUserDetails.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getUserDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.success = true;
                state.user = action.payload;
            })
            .addCase(getUserDetails.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.user = null;
                state.error = action.payload;
            });
    },
});

export const {reset} = userSlice.actions;

export const userReducer = userSlice.reducer;
