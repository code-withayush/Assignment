import axios from "axios";

export const api = axios.create({
  baseURL: "https://assignment-l7zp.onrender.com/api/products"
});
