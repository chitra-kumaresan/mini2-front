import axios from "axios";
import {getToken } from '../services/AuthService';


//using interceptors to intercept all api request
axios.interceptors.request.use(function (config) {
    config.headers["Authorization"]=getToken();
    return config;
  }, function (error) {
    
    return Promise.reject(error);
  });

const REST_API_BASE_URL='http://localhost:8083/api/bookings';

export const getAllBookings=()=>axios.get(REST_API_BASE_URL);
export const createBookings=(booking)=>axios.post(REST_API_BASE_URL+ "/saveBook", booking);

export const getBooking=(bookId)=>axios.get(REST_API_BASE_URL+ "/"+ bookId);
export const getBookingByPatientId=(patId)=>axios.get(REST_API_BASE_URL+ "/patId"+ "/" + patId);
export const deleteBooking=(bookId)=>axios.delete(REST_API_BASE_URL+ "/"+ bookId);

export const updateBooking=(bookId,booking)=>axios.put(REST_API_BASE_URL+ "/"+ bookId, booking);

export const getBookingByEmail=(email)=> axios.get(REST_API_BASE_URL+ "/email"+ "/" + email);