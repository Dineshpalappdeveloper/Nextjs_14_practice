"use client"
import axios from "axios";

// import BASE_URl from "../../../api/BaseUrl";
const url = "https://jsonplaceholder.typicode.com/users"
const getUsers = async (body) => {
    try {
        // const res = await axios.post(`${BASE_URl.AUTH}/core/api/token`, cred);
        const res = await axios.get(url);
        // console.log(res);

        return res;
    } catch (err) {

        return err?.response;
    }
}


const createUser = async (cred) => {
    try {
        // const res = await axios.post(`${BASE_URl.AUTH}/core/api/token`, cred);
        const res = await axios.post(`${BASE_URl.AUTH}/core/api/token`, cred);
        // console.log(res);

        return res;
    } catch (err) {

        return err?.response;
    }
}

const userApi = {
    getUsers, createUser
}

export default userApi;