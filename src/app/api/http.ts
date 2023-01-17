import axios, { AxiosInstance } from "axios";

const httpReq: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
  },
});

httpReq.interceptors.request.use(
  (config: any) => {
    const access_token = localStorage.getItem("access_token");
    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: access_token ? `Bearer ${access_token}` : "",
      },
    };
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default httpReq;
