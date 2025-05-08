import axios from "axios";

const api_base_url = import.meta.env.VITE_API_BASE_URL;

// console.log(api_base_url);

const sendRequest = axios.create({
  baseURL: api_base_url,
  // 超时时间3分钟
  timeout: 180000,
});

// 添加请求拦截器
sendRequest.interceptors.request.use(
  async (config) => {
    // 发送之前 处理请求头等信息
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // 请求发生错误
    return Promise.reject(error);
  }
);
// 添加响应拦截
sendRequest.interceptors.response.use(
  (response) => {
    const { config } = response;
    if (config?.returnWholeResponse) {
      return response;
    }
    // 结合响应状态处理请求结果。
    const responseData = response.data;
    return [null, responseData];
  },
  (error) => {
    return [error, null];
  }
);

export default sendRequest;
