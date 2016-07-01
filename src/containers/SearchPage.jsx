import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { 
    updateSearch,
    selectFilterOption,
    fetchResults,
    querySearch,
    filterSearch
} from '../actions'
import { getURLParameter, findTarget } from '../utils'
import { Q, ARTICLE_TYPE } from '../queryParams'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import Results from '../components/Results'

const mapStateToProps = ({
    search,
    query,
    filters,
    results
}) => ({ 
    search,
    query,
    filters,
    results
})

const mapDispatchToProps = dispatch => ({
    updateSearch: search => dispatch(updateSearch(search)),
    selectFilterOption: (filter, option) => dispatch(selectFilterOption(filter, option)),
    fetchResults: (router, query) => dispatch(fetchResults(router, query)),
    querySearch: router => dispatch(querySearch(router)),
    filterSearch: (router, filter, option) => dispatch(filterSearch(router, filter, option))
})

class SearchPage extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { query, filters, router, fetchResults } = this.props

        if (query) {
            fetchResults(router, query)
        }
    }

    render() {
        const { 
            search,
            query,
            filters,
            results,
            updateSearch,
            selectFilterOption,
            fetchResults,
            querySearch,
            filterSearch,
            router,
            location
        } = this.props

        const enhancedQuerySearch = (e) => {
            e.preventDefault()
            querySearch(router)
        }

        const enhancedFilterSearch = filterSearch.bind(null, router)

        return (
            <div className="page">
                <Header 
                    search={search}
                    query={query}
                    onSearchChange={updateSearch} 
                    onSearchGo={enhancedQuerySearch} />
                <SideBar 
                    filters={filters}
                    onFilterOptionSelect={enhancedFilterSearch} />
                <Results results={results} />
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(SearchPage))