import axios from 'axios';

const config = {
    "Content-Type": "application/x-www-form-urlencoded"
    //"Content-Type": "application/json"
  };

export default axios.create({
    baseURL: 'https://rokserver.bearbear.co.kr/',
    headers: config,
    withCredentials: true
    // header: {
    // 	Authorization: 'bearer accessKey'
    // }
});