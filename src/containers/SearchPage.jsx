import React, { Component } from 'react'
import { getURLParameter } from '../utils'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import Results from '../components/Results'

class SearchPage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const results = window.results
        const searchTerm = getURLParameter('q')

        return (
            <div className="page">
                <Header searchTerm={ searchTerm } />
                <SideBar />
                <Results results={ results } />
            </div>
        )
    }
}

export default SearchPage