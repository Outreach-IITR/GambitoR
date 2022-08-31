import axios from "axios";
import env from "react-dotenv";

const api = axios.create({
  baseURL: env.REACT_APP_API_URL,
  "Content-type": "application/json",
  Accept: "application/json",
  withCredentials: true,
});

export default api;
