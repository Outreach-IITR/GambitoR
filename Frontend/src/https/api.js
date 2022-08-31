import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/",
  'Content-type': 'application/json',
  Accept: 'application/json',
  withCredentials: true,
})

export default api;