import fetch from 'isomorphic-fetch';

const queryService = process.env.QUERY_SERVICE;

const search = (query, articleType, specialty) => (
    fetch(`${queryService}/query?q=${query}&articleType=${articleType}&specialty=${specialty}`)
)

export default { search };