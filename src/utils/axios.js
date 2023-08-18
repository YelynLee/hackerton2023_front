import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_HOST
});

//프론트에서 백엔드로 요청을 보낼 때 header에 token을 넣어 보내기 위함
axiosInstance.interceptors.request.use(function (config) {

  config.headers.Authorization = 'Bearer' + localStorage.getItem('accessToken');
  return config;

}, function (error) {
    return Promise.reject(error);
})

//토큰이 만료될 경우 reload하도록
axiosInstance.interceptors.response.use(function (response) {
  return response;

}, function (error) {
    if(error.response.data === 'jwt expired') {
        window.location.reload();
    }
    return Promise.reject(error);
})



export default axiosInstance;