import axios from 'axios'

// 规范化 响应 的数据
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data.data;
});

// 请求home组件的数据接口 -------------暴露出一个请求数据的接口
// static文件夹一般存放数据，因为它会自动配置路由，当项目启动后，可以访问localhost:8080/static/mork/index.json，就得到对应的数据，因此我们可以直接访问static文件夹即可
export let getHome = () => {
    return axios('static/mock/index.json')
}

export let getCities = () => {
    return axios('static/mock/city.json')
}