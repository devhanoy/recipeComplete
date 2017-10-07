
export function jsonPost (url, data) {

    const options = { 
        method: 'POST',
        headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: serialize(data)
    }
    const request = new Request(url, options)

    return fetch(request)
               
}

function serialize (data) {
    return Object.keys(data).map(function (keyName) {
        return `${encodeURIComponent(keyName)}=${encodeURIComponent(data[keyName])}`
    }).join('&');
};