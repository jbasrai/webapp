import fetch from 'isomorphic-fetch';

//const queryService = process.env.QUERY_SERVICE;

const queryService = 'http://192.168.99.100:3000'

console.log(queryService)

const search = (query, articleType, specialty) => (
    fetch(`${queryService}/query?q=${query}&articleType=${articleType}&specialty=${specialty}`)
)

export default { search };