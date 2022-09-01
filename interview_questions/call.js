Function.prototype.myCall=function(context,...args){
    context= (typeof context=== 'object' ? context : window)

    args= args? args : []

    const key = Symbol()

    context[key]=this

    const result =context[key](...args)

    delete context[key]

    return result
}