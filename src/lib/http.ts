import axios from "axios";
import { API_URL, API_KEY } from "@env";

const http = axios.create({
  baseURL: API_URL,
  params: {
    q: "tesla",
    apiKey: API_KEY,
  },
});

export default http;
