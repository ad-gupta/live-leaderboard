import axios from "axios";
// axios.defaults.withCredentials = true;

export const axiosInstance = async () => {
  const baseURL = process.env.NEXT_PUBLIC_API_URL;
  const axiosClient = axios.create({
    baseURL: baseURL,
    timeout: 10000,
  });

  return axiosClient;
};
