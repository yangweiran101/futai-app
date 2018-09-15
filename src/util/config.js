import axios from 'axios'



var instance = axios.create({
  baseURL: 'http://www.futai.com/api',
  timeout: 5000,
  headers: {
    'appid': '18abc33f9a6348aeb27f417e5bdf1ba9',
    'Accept': 'application/json',
    'Authorization': '',
  }
})
export default instance;
