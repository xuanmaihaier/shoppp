import axios from 'axios'
export function request(comfig) {
  //  return new Promise((resolve,reject)=>{
  const axioxhome = axios.create({
    baseURL: "http://152.136.185.210:7878/api/m5",
    timeout: 5000
  })
  axioxhome.interceptors.request.use(config => {
    // console.log(config);
    return config
  }, err => {
      console.log(err);
    });
  axioxhome.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })
  return axioxhome(comfig)

}

