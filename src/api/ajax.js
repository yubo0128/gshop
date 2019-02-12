/**
 * ajax 请求函数
 */
import axios from "axios";
export default function ajax(url, data={}, type= "GET") {
    return new Promise((resolve, reject) => {
        let promise
        if (type === "GET") {
            let dataStr = "" //数据拼接
            Object.keys(data).forEach(key =>{
                dataStr += key + '=' + data[key] + '&'
            })
            if (dataStr !== '') {
                dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
                url = url + '?' + dataStr
            }
            //发送 get 请求
            promise = axios.get(url)
        } else {
            // 发送 post 请求
            promise = axios.post(url, data)
        }
        promise.then(function (response) { 
            resolve(response.data) // 返回成功
        }).catch(function (error) { 
            reject(error) //返回失败
        }) 
    });
}