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

const isOnLandingPage = (state=false, action) => {
    if (state === false) return false
    switch(action.type) {
        case UPDATE_SEARCH:
            return false
    }
    return true
}

export default combineReducers({
    search,
    query,
    filters,
    results,
    isOnLandingPage,
})