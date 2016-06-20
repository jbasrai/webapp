import reducer from './reducer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import React from 'react'

import SearchPage from './containers/SearchPage'
import './styles/index.scss'

const store = createStore(reducer, { results: window.results })

export default () => ( 
    <Provider store={ store }>
        <SearchPage /> 
    </Provider>
)