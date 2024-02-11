import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    users: []
}

export const NewUserSlice = createSlice({
    name: "NewUserSlice",
    initialState,
    reducers: {
        addUser: (state, action) => {
            // console.log(action.payload);
            const data = {
                name: action.payload
            }
            state.users.push(data)
        }
    }
});
export const { addUser } = NewUserSlice.actions;

export default NewUserSlice.reducer