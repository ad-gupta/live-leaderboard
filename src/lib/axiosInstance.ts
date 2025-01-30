import axios from "axios";
axios.defaults.withCredentials = true;

export const axiosInstance = async () => {
  // You need to be careful in next.js for adding cookies.
  // You could be on the server or a client. This code will work for the client assuming you will use it on the client side.
  // I believe you are using `parser` to get cookies. get the token.
  const yourToken = "whatever";
  const axiosClient = axios.create({
      baseURL: 'https://lead-stream-node-1.onrender.com',
      timeout: 10000
   });

   return axiosClient;
}