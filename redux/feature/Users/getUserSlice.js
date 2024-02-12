"use client"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// import blogApi from "./BlogApi";
import userApi from "./userApi";

export const getUsers = createAsyncThunk(
    "user/getuser",
    async (data, thunkAPI) => {
        try {
            const res = await userApi.getUsers(data);

            if (!res) {
                return thunkAPI.rejectWithValue(error);
            }

            // console.log("Response", res.data);
            return res;
        } catch (err) {
            return thunkAPI.rejectWithValue(err);
        }
    }
)

const state = {
    isLoading: false,
    isError: false,
    userData: null
}


const getUserSlice = createSlice({
    name: "getUser",
    initialState: state,
    reducers: {
        resetStates: (state, action) => {
            state.isLoading = false,
                state.isError = false,
                state.userData = null
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.isLoading = false,
                    state.userData = action.payload
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.isLoading = false,
                    state.isError = true,
                    state.userData = null
            })
    }
});

export const { resetStates } = getUserSlice.actions;
export const getuser = (state) => state.getuser;
export default getUserSlice.reducer;