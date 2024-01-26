import axios from "axios";

export async function getUser() {
    let data = await axios.get("https://jsonplaceholder.typicode.com/users").then((res) => res.data)
    return data
} 