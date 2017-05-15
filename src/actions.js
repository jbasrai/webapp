import fetch from 'isomorphic-fetch'
import { findTarget } from './utils'

export const UPDATE_SEARCH = 'UPDATE_SEARCH'
export const UPDATE_QUERY = 'UPDATE_QUERY'
export const SELECT_FILTER_OPTION = 'SELECT_FILTER_OPTION'
export const REQUEST_RESULTS = 'REQUEST_RESULTS'
export const RECEIVE_RESULTS = 'RECEIVE_RESULTS'

export const updateSearch = search => ({
    type: UPDATE_SEARCH,
    search
})

export const updateQuery = query => ({
    type: UPDATE_QUERY,
    query
})

export const selectFilterOption = (filter, option) => ({
    type: SELECT_FILTER_OPTION,
    filter,
    option
})

export const requestResults = () => ({
    type: REQUEST_RESULTS 
})

export const receiveResults = results => ({
    type: RECEIVE_RESULTS,
    results
})

export const fetchResults = (router, query) => (dispatch, getStore) => {
    const { filters } = getStore()
    const articleType = findTarget('articleType', filters).selected
    const specialty = findTarget('specialty', filters).selected

    router.push({
        query: {
            q: query,
            articleType,
            specialty
        }
    })

    dispatch(requestResults())
    
    return fetch(`/query?q=${query}&articleType=${articleType}&specialty=${specialty}`)
        .then(response => response.json())
        .then(results => dispatch(receiveResults(results)))
}

export const querySearch = router => (dispatch, getStore) => {
    const { search } = getStore()

    dispatch(updateQuery(search))
    dispatch(fetchResults(router, search))
}

export const filterSearch = (router, filter, option) => (dispatch, getStore) => {
    dispatch(selectFilterOption(filter, option))

    const { query } = getStore()

    dispatch(fetchResults(router, query))
}