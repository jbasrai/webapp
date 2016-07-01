// http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
export const getURLParameter = (name, url=window.location.href) => {
    const escaped = name.replace(/[\[\]]/g, "\\$&")

    var regex = new RegExp("[?&]" + escaped + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url)

    if (!results) return null
    if (!results[2]) return ''
    
    return decodeURIComponent(results[2].replace(/\+/g, " "))
}

export const findTarget = (value, arr) => {
    const i = arr.findIndex(e => e.value === value)

    return i > -1 ? arr[i] : null
}

export const joinOptionalClass = (original, condition, join) => {
    if (condition) {
        return original + ' ' + join
    } else {
        return original
    }
}

// http://stackoverflow.com/questions/1145850/how-to-get-height-of-entire-document-with-javascript
export const getDocumentHeight = () => {
    const body = document.body
    const html = document.documentElement

    const height = Math.max(
        body.scrollHeight, 
        body.offsetHeight, 
        html.clientHeight, 
        html.scrollHeight, 
        html.offsetHeight 
    )

    return height
}