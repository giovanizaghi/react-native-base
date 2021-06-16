import axios from "axios";

export const getHttp = (baseURL: string) => {
    const http = axios.create({
        baseURL: baseURL,
        timeout: 120000
    });

    // http.interceptors.request.use(
    //     async config => {
    //         if (!config.headers.Authorization && !config.auth) {
    //             const token = "sd3434rfesfg2324tgsdf34";
    //             config.headers.Authorization = `${token}`;
    //         }
    //         return config;
    //     },
    //     err => {
    //         return Promise.reject(err);
    //     }
    // );

    http.interceptors.response.use(
        (response) => (response),
        (error) => {
            if (error && error.response && !error.config.noErrorMessage) {

                switch (error.response.status) {
                    case 401:
                        alert("Erro 401");
                        break;
                    case 400:
                        alert("Erro 400");
                    case 404:
                        error.response.data && alert(JSON.stringify(error.response.data));
                        break;
                    default:
                        alert(error.response.data.Message ? JSON.stringify(error.response.data.Message) : JSON.stringify(error.response.data));
                        break;
                }
            } else !error.config.noErrorMessage && alert(error);
            return Promise.reject(error);
        }
    );

    return http;

}