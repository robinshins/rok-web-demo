import axios from 'axios';

const config = {
    "Content-Type": "application/x-www-form-urlencoded"
    //"Content-Type": "application/json"
  };

export default axios.create({
    baseURL: 'http://35.238.162.67/',
    headers: config,
    withCredentials: true
    // header: {
    // 	Authorization: 'bearer accessKey'
    // }
});