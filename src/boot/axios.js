/* eslint-disable */
import { boot } from "quasar/wrappers";
import axios from "axios";

const baseURL = "http://192.168.18.41:5000";
const api = axios.create({ baseURL: baseURL });

export default boot(({ app, router }) => {
  app.config.globalProperties.$axios = axios;

  app.config.globalProperties.$imgUrl = baseURL;
  app.config.globalProperties.$api = api;
});

export { api, axios };
