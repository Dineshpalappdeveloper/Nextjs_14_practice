import { createSlice, nanoid } from "@reduxjs/toolkit";

const getInitialUsers = () => {
    if (typeof window !== "undefined") {
        // Check if window is defined (browser environment)
        const users = localStorage.getItem("users");
        return users ? JSON.parse(users) : [];
    } else {
        return [];
    }
};

const initialState = {
    users: getInitialUsers(),
};

export const NewUserSlice = createSlice({
    name: "NewUserSlice",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const data = {
                name: action.payload,
                id: nanoid(),
            };
            state.users.push(data);
            if (typeof window !== "undefined") {
                // Check if window is defined (browser environment)
                let userData = JSON.stringify(state.users);
                localStorage.setItem("users", userData);
            }
            console.log(state.users);
        },
        removeUsers: (state, action) => {
            state.users = state.users.filter((item) => item.id !== action.payload);
            if (typeof window !== "undefined") {
                // Check if window is defined (browser environment)
                let userData = JSON.stringify(state.users);
                localStorage.setItem("users", userData);
            }
            console.log(state.users);
        },
    },
});

export const { addUser, removeUsers } = NewUserSlice.actions;

export default NewUserSlice.reducer;
