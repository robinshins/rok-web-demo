import axios from 'axios';

const config = {
    "Content-Type": "application/x-www-form-urlencoded"
    //"Content-Type": "application/json"
  };

export default axios.create({
    baseURL: 'https://35.201.106.119/',
    headers: config,
    withCredentials: true
    // header: {
    // 	Authorization: 'bearer accessKey'
    // }
});