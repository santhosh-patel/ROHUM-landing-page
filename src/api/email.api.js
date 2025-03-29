import axios from "axios";
const BASE_URL = "http://localhost:3943";

const emailAxios = axios.create({
  baseURL: BASE_URL,
});

export default emailAxios;
