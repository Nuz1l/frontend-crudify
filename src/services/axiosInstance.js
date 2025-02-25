import axios from "axios";

export const a = axios.create({
    baseURL: "https://nuzil.pythonanywhere.com/api/v1/",
    headers: { "Content-Type": "application/json" }
});
