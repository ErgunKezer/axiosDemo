import Axios from "axios";

const listen = (store) => {
    Axios.interceptors.request.use(conf => {
        // you can add some information before send it.
        // conf.headers['Auth'] = 'some token'
        return conf;
    }, error => {
        return Promise.reject(error);
    });
    Axios.interceptors.response.use(next => {
        return Promise.resolve(next);
    }, error => {
        // You can handle error here and trigger warning message without get in the code inside
        store.dispatch({ type: 'OPEN_MODAL', message: error.message });
        return Promise.reject(error);
    });
};
export default {
    listen
}


