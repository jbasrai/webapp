// http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
export const getURLParameter = (name, url=window.location.href) => {
    const escaped = name.replace(/[\[\]]/g, "\\$&")

    var regex = new RegExp("[?&]" + escaped + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url)

    if (!results) return null
    if (!results[2]) return ''
    
    return decodeURIComponent(results[2].replace(/\+/g, " "))
}