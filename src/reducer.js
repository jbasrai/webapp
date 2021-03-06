import { 
    UPDATE_SEARCH,
    UPDATE_QUERY,
    SELECT_FILTER_OPTION,
    REQUEST_RESULTS,
    RECEIVE_RESULTS
} from './actions'
import { 
    query as queryValue,
    filters as filterValues 
} from './values' 
import { INITIAL, LOADING, NOT_FOUND, READY } from './values/results'
import { combineReducers } from 'redux'

const search = (state='', action) => {
    switch (action.type) {
        case UPDATE_SEARCH:
            return action.search
        default:
            return state
    }
}

const query = (state=queryValue, action) => {
    switch (action.type) {
        case UPDATE_QUERY:
            return action.query
        default:
            return state
    }
}

const filters = (state=filterValues, action) => {
    switch (action.type) {
        case SELECT_FILTER_OPTION:
            return state.map(f => {
                if (f.value !== action.filter) {
                    return f
                }

                return {
                    ...f,
                    selected: action.option
                }
            })
        default:
            return state
    }
}

const results = (state={ status: INITIAL }, action) => {
    switch (action.type) {
        case REQUEST_RESULTS:
            return { status: LOADING }
        case RECEIVE_RESULTS:
            return {
                status: READY,
                body: action.results
            }
        default:
            return state
    }
}

const isOnLandingPage = (state=true, action) => {
    if (state === false) return false
    switch(action.type) {
        case UPDATE_QUERY:
            return false
    }
    return true
}

const selectedImage = (state=-1, action) => {
        console.log(action.type, action.index)
    if (action.type === 'SELECT_IMAGE') {
        return action.index
    } else if (action.type === 'NEXT_IMAGE') {
        return state + 1
    } else if (action.type === 'PREV_IMAGE') {
        return state -1
    } else if (action.type = 'CLOSE_GALLERY') {
        return -1
    }
    return state
}

export default combineReducers({
    search,
    query,
    filters,
    results,
    isOnLandingPage,
    selectedImage,
})