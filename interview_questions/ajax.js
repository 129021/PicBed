var xhr = new XMLHttpRequest()

xhr.open('GET', 'xxx.api', true)

xhr.send(null)

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200 || xhr.status == 304) {
        console.log(xhr.response);
    }
}