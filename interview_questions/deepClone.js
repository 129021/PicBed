function deepClone(origin, target) {
    let target = target || {}

    for (let key in origin) {
        if (Object.hasOwnProperty(key)) {
            if (Array.isArray(origin[key])) {
                origin[key] = []

                deepClone(origin[key], target[key])
            } else if (typeof origin[key] == 'object' && origin[key] !== null) {
                origin[key] = {}

                deepClone(origin[key], target[key])
            } else {
                target[key] = origin[key]
            }
        }
    }

    return target
}