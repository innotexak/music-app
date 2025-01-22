import axios from 'axios';
import { SERVER_BASE_URL } from '../constant/links';

import AsyncStorage from '@react-native-async-storage/async-storage';


const axiosInstance = axios.create({
  baseURL: SERVER_BASE_URL,
  timeout: 10000, // Request timeout in milliseconds
  headers: {
    'Content-Type': 'application/json',
  },
});

export const API_CALL= (token?:string)=>{
    axiosInstance.interceptors.request.use(
        (config) => {
          if (token) {
            config.headers.Authorization = `Bearer ${token}`;
          }
          return config;
        },
        (error) => Promise.reject(error)
      );
      
      axiosInstance.interceptors.response.use(
        (response) => response,
        (error) => {
          if (error.response?.status === 401) {
            console.error('Unauthorized, please log in again.');
          }
          return Promise.reject(error);
        }
      );
      
      return axiosInstance
}




export const getAuthToken = async () => {
    try {
      const token = await AsyncStorage.getItem('authToken');
      return token;
    } catch (error) {
      console.error('Error retrieving token:', error);
      return null;
    }
  };