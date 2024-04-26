import axios from "axios";
import {getToken } from '../services/AuthService';


//using interceptors to intercept all api request
axios.interceptors.request.use(function (config) {
    config.headers["Authorization"]=getToken();
    return config;
  }, function (error) {
    
    return Promise.reject(error);
  });

const REST_API_BASE_URL='http://localhost:8083/api/appointments';

export const getAllAppointments=()=>axios.get(REST_API_BASE_URL);
export const createAppointments=(appointment)=>axios.post(REST_API_BASE_URL+ "/saveApp",appointment );

export const getAppointment=(appId)=>axios.get(REST_API_BASE_URL+ "/"+ appId);
export const deleteAppointment=(appId)=>axios.delete(REST_API_BASE_URL+ "/"+ appId);

export const updateAppointment=(appId,appointment)=>axios.put(REST_API_BASE_URL+ "/"+ appId, appointment);