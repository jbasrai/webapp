import reducer from './reducer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import React from 'react'

import Search from './components/Search'
import './styles/search'

const store = createStore(reducer, { results: window.results })

export default () => ( 
    <Provider store={ store }>
        <Search /> 
    </Provider>
)