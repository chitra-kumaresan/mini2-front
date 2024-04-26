import axios from "axios";
import {getToken } from '../services/AuthService';


//using interceptors to intercept all api request
axios.interceptors.request.use(function (config) {
    config.headers["Authorization"]=getToken();
    return config;
  }, function (error) {
    
    return Promise.reject(error);
  });

const REST_API_BASE_URL='http://localhost:8083/api/patients';

export const getAllPatients=()=>axios.get(REST_API_BASE_URL);
export const getPatient=(patId)=>axios.get(REST_API_BASE_URL+ "/"+ patId);