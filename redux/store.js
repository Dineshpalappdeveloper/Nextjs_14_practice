"use client"
import { configureStore } from '@reduxjs/toolkit'
import NewUserSlice from "../redux/feature/Users/NewUserSlice"
import getUserSlice from "@/redux/feature/Users/getUserSlice"
export const store = configureStore({
    reducer: {
        user: NewUserSlice,
        userData: getUserSlice

    },
})