import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { 
    updateSearch,
    selectFilterOption,
    fetchResults,
    querySearch,
    filterSearch,
    sampleSearch
} from '../actions'
import { footerLinks } from '../values'
import { getURLParameter, findTarget } from '../utils'
import { Q, ARTICLE_TYPE } from '../queryParams'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import Results from '../components/Results'
import Footer from '../components/Footer'
import Landing from '../components/Landing'

const mapStateToProps = ({
    search,
    query,
    filters,
    results,
    isOnLandingPage,
}) => ({ 
    search,
    query,
    filters,
    results,
    isOnLandingPage,
})

const mapDispatchToProps = dispatch => ({
    updateSearch: search => dispatch(updateSearch(search)),
    selectFilterOption: (filter, option) => dispatch(selectFilterOption(filter, option)),
    fetchResults: (router, query) => dispatch(fetchResults(router, query)),
    querySearch: router => dispatch(querySearch(router)),
    filterSearch: (router, filter, option) => dispatch(filterSearch(router, filter, option)),
    sampleSearch: router => dispatch(sampleSearch(router))
})

class SearchPage extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { 
            query, 
            filters, 
            router, 
            fetchResults,
            updateSearch 
        } = this.props

        if (query) {
            fetchResults(router, query)
            updateSearch(query)
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
            sampleSearch,
            router,
            location,
            isOnLandingPage
        } = this.props

        console.log('isOnLandingPage', isOnLandingPage)

        const enhancedQuerySearch = (e) => {
            e.preventDefault()
            querySearch(router)
        }

        const enhancedFilterSearch = filterSearch.bind(null, router)

        const enhancedSampleSearch = sampleSearch.bind(null, router)

        console.log('search', search)

        if (isOnLandingPage) {
          return (<Landing 
                    search={search}
                    onSearchChange={updateSearch} 
                    onSearchGo={enhancedQuerySearch} />)
        }

        return (
            <div className="page">
                <Header 
                    search={search}
                    onSearchChange={updateSearch} 
                    onSearchGo={enhancedQuerySearch} />
                <div className="content">
                    <SideBar 
                        filters={filters}                        
                        onFilterOptionSelect={enhancedFilterSearch} />
                    <Results 
                        results={results}
                        filters={filters}
                        onSampleSearch={enhancedSampleSearch} />
                </div>
                <Footer links={footerLinks} />
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(SearchPage))