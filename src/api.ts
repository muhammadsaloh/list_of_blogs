import axios, { AxiosError } from "axios";

const request = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

request.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => Promise.reject(error)
);

export { request };
