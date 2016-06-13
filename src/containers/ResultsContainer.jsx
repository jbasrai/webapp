import React from 'react'
import { connect } from 'react-redux'
import Results from '../components/Results'

function mapStateToProps({ results }) {
    return {
        results
    }
}

export default connect(mapStateToProps)(Results)