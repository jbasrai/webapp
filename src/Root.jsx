import reducer from './reducer'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import React from 'react'

import SearchPage from './containers/SearchPage'
import './styles/index.scss'

const store = createStore(
    reducer, 
    applyMiddleware(thunk)
)

const Wrap = ({children}) => <div>{children}</div>

export default () => ( 
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Wrap}>
                <IndexRedirect to="/search" />
                <Route path="/search" component={SearchPage} />\
            </Route>
        </Router>
    </Provider>
)