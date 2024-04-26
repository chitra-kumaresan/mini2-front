import axios from "axios";
import {getToken } from '../services/AuthService';


//using interceptors to intercept all api request
axios.interceptors.request.use(function (config) {
    config.headers["Authorization"]=getToken();
    return config;
  }, function (error) {
    
    return Promise.reject(error);
  });

const REST_API_BASE_URL='http://localhost:8083/api/medications';

export const getAllMedications=()=>axios.get(REST_API_BASE_URL);
export const createMedications=(medication)=>axios.post(REST_API_BASE_URL+ "/saveMed", medication);

export const getMedication=(medId)=>axios.get(REST_API_BASE_URL+ "/"+ medId);
export const deleteMedication=(medId)=>axios.delete(REST_API_BASE_URL+ "/"+ medId);

export const updateMedication=(medId,medication)=>axios.put(REST_API_BASE_URL+ "/"+ medId, medication);

export const getMedicationByEmail=(email)=> axios.get(REST_API_BASE_URL+ "/email"+ "/" + email);