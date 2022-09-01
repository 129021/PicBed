Function.prototype.myBind = function (objThis, ...params) {
    const thisFn = this //存储原函数以及params

    let funToBind = function (...secondParams) {
        const isNew = this instanceof funToBind //this是否是funToBind的实例，也就是返回的funToBind是否通过new调用

        const context = isNew ? this : Object(objThis)

        return thisFn.call(context, ...params, ...secondParams);
    }

    if (thisFn.prototype) {
        funToBind.prototype = Object.create(thisFn.prototype)
    }

    return funToBind


}