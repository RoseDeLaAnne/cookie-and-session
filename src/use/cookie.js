export const deleteCookie = (name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`
}

export const getCookie = (name) => {
    var cookie = {}

    document.cookie.split(';').forEach((i) => {
        let [key, value] = i.split('=')

        cookie[key.trim()] = value
    })


    return cookie[name]
}
