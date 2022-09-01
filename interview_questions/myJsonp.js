// function myJsonp(options) {
// 	return new Promise((resolve, reject) => {
//                 //判断是否是第一次jsonp请求
// 		if (!window.jsonpNum) {
// 			window.jsonpNum = 1
// 		} else {
// 			window.jsonpNum++
// 		}

// 		let {					
// 			url,
// 			data,
// 			timeout = 5000,
// 			cbkey = 'callback',
// 		} = options

// 		//保证每次请求接收的方法都不会重复
// 		let funName = 'jsonpReceive' + window.jsonpNum

// 		//清除本次jsonp请求产生的一些无用东西
// 		function clear() { 							
// 			window[funName] = null
// 			script.parentNode.removeChild(script);
// 			clearTimeout(timer)
// 		}

//                 //定义jsonp接收函数
// 		window[funName] = function(res) {
//                         //一旦函数执行了，就等于说请求成功了
// 			resolve(res) 							
// 			clear()
// 		}

//                 //请求超时计时器
// 		let timer = setTimeout(() => {				
// 			reject('超时了')
// 			clear()
// 		}, timeout)

//                 //定义请求的参数
// 		let params = '' 								

//                 //如果有参数
// 		if (Object.keys(data).length) { 			
// 			for (let key in data) {
// 				params += `&${key}=${encodeURIComponent(data[key])}`;
// 			}

// 			params = params.substr(1)
// 		}

//                 //拼接最终的请求路径，结尾拼接回调的方法名
// 		url = url + '?' + params + `&${cbkey}=${funName}`  	

// 		let script = document.createElement('script');
// 		script.src = url;
// 		document.body.appendChild(script);
// 	})
// }



// function myJsonp(options) {
//     return new Promise((resove, reject) => {

//         // 判断是不是第一次jsonp请求
//         if (!window.jsonpNum) {
//             window.jsonpNum = 1
//         } else {
//             window.jsonpNum++
//         }

//         let {
//             url,
//             timeout = 5000,
//             data,
//             callbackKey = callback
//         } = options

//         // 保证每次的jsonp请求都不会重复
//         let funName = 'jsonpReceive' + window.jsonpNum

//         // 定义JSONP接收函数
//         window[funName] = fuction(res) {
//             resove(res)
//             clear

//         }

//         let timer = setTimeout(() => {
//             console.error('请求超时')
//             clear()
//         }, 5000)

//         // 清除方法，用来清除每次jsonp结束后的一些值
//         function clear() {
//             window[funName] = null
//             script.parentNode.removeChild(script)
//             clearTimeout(timer)
//         }


//         // 定义请求参数
//         let params = ''


//         // 判断是否有参数要拼接到URL后面
//         if (Object.keys(data).length) {
//             for (let key in data) {
//                 params += `${key}=${encodeURIComponent(data[key])}`
//             }

//             params = params.substr(1)
//         }


//         // 拼接最后的请求路径
//         url = url + '?' + params + `${callbackKey}=${funName}`

//         let script = document.createElement('script')
//         script.src = url

//         document.body.appendChild(script)



//     })
// }



function myJsonp(options) {
    return new Promise((resolve, reject) => {

        // 判断是不是第一次jsonp请求
        if (!window.jsonpNum) {
            window.jsonpNum = 1
        } else {
            window.jsonpNum++
        }

        let {
            data,
            timeout = 5000,
            url,
            callbacKey = 'callback',

        } = options


        // 接受jsonp数据方法的名字
        let funName = 'jsonpReceive' + window.jsonpNum

        window[funName] = function (res) {
            console.log(res);
            clear()
        }

        timer = setTimeout(() => {
            console.error('请求超时！')
        }, timeout)

        function clear() {
            window[funName] = null
            clearTimeout(timer)
            script.parentNode.removeChild(script)
        }

        let params = ''


        if (Object.keys(data).length) {
            for (key in data) {
                params += `${key}=${encodeURIComponent(data[key])}`
            }

            params = params.substr(1)
        }


        url = url + '?' + params + `${callbacKey}=${funName}`

        let script = document.createElement('script')

        script.src = url

        document.body.appendChild(script)
    })
}