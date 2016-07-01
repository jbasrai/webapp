import fetch from 'isomorphic-fetch';

const queryService = process.env.QUERY_SERVICE;

const search = (query, articleType) => (
    fetch(`${queryService}/query?q=${query}&articleType=${articleType}`)
)

export default { search };