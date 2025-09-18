import axios from "axios"
const baseURL="https://68c50771a712aaca2b67ad21.mockapi.io/api"
export const api=axios.create({
    baseURL
})