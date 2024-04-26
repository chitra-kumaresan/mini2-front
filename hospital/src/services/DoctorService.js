import axios from "axios";
import {getToken } from '../services/AuthService';


//using interceptors to intercept all api request
axios.interceptors.request.use(function (config) {
    config.headers["Authorization"]=getToken();
    return config;
  }, function (error) {
    
    return Promise.reject(error);
  });

const REST_API_BASE_URL='http://localhost:8083/api/doctors';

export const getAllDoctors=()=>axios.get(REST_API_BASE_URL);
export const createDoctors=(doctor)=>axios.post(REST_API_BASE_URL+ "/saveDoctor", doctor);

export const getDoctor=(docId)=>axios.get(REST_API_BASE_URL+ "/"+ docId);
export const deleteDoctor=(docId)=>axios.delete(REST_API_BASE_URL+ "/"+ docId);

export const updateDoctor=(docId,doctor)=>axios.put(REST_API_BASE_URL+ "/"+ docId, doctor);