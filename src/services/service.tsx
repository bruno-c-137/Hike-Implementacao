import axios from "axios";
import axiosRetry from "axios-retry";

const Service = (isAuth = false): any => {
    const headers: any = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }

    if (isAuth) {
        try {
            const token: any = localStorage.getItem('token');
            headers.Authorization = `Bearer ${JSON.parse(token)?.accessToken}`;
        } catch (error) { }
    }
    const client = axios.create({
        baseURL: import.meta.env.VITE_APP_API,
        responseType: 'json',
        timeout: 35000,
        headers,
    });
    axiosRetry(client, {
        retries: 1,
        // retryCondition: () => true,
        retryDelay: (retryCount) => {
            return retryCount * 500;
        }
    });
    return client
}
export default Service;