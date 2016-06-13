import fetch from 'isomorphic-fetch'

export const REQUEST_RESULTS = 'REQUEST_RESULTS'
export const RECEIVE_RESULTS = 'RECEIVE_RESULTS'

function requestResults() {
    return {
        type: REQUEST_RESULTS
    }
}

function receiveResults(results) {
    return {
        type: RECEIVE_RESULTS,
        results
    }
}

export function fetchResults(query) {
    return dispatch => {
        dispatch(requestResults())
        return fetch(`/query?q=${query}`)
            .then(response => response.json())
            .then(results => dispatch(receiveResults(results)))
    }
}
