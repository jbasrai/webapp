import { REQUEST_RESULTS, RECEIVE_RESULTS } from './actions'
import { combineReducers } from 'redux'

function results(state='pending', action) {
    switch (action.type) {
        case REQUEST_RESULTS:
            return 'pending'
        case RECEIVE_RESULTS:
            return action.results
        default:
            return state
    }
}

export default combineReducers({
    results
})