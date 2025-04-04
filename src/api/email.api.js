import axios from "axios";

const BASE_URL = import.meta.env.VITE_SERVER_IP;

const emailAxios = axios.create({
  baseURL: BASE_URL,
});

export default emailAxios;
