import axios from 'axios';

const queryService = process.env.QUERY_SERVICE;

const search = (query) => {
    return axios({
        method: 'get',
        url: queryService + '/query',
        params: query
    });
};

export default { search };