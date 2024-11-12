import axios from "axios";

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.common["Access-Control-Allow-Methods"] = "GET,POST,PUT,DELETE,OPTIONS";
axios.defaults.headers.common["Access-Control-Allow-Headers"] = "Content-Type, Authorization";

export const AxiosInterceptor = () => {
  axios.interceptors.request.use(
    (request) => {
      console.log("Request:", request);
      return request;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};