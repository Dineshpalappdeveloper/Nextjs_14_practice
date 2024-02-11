import { configureStore } from '@reduxjs/toolkit'
import NewUserSlice from "../redux/feature/Users/NewUserSlice"
export const store = configureStore({
    reducer: {
        user: NewUserSlice
    },
})