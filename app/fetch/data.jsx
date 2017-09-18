import { get } from './get'
import { post } from './post'

export function getData(){
    // '/api/1' 获取字符串
    var result = get('/api/1');
    result.then(res => {
        return res.text()
    }).then(text => {
        console.log(text)
    })

    // 'api/2' 获取json
    var result1 = get('/api/2');

    result1.then(res => {
        return res.json()
    }).then(json => {
        console.log(json)
    })
}
export function postData(url, paramObj){
    // '/api/post' 提交数据
    var result = post(url,paramObj);

    result.then(res => {
        return res.json()
    }).then(json => {
        console.log(json)
    })
}