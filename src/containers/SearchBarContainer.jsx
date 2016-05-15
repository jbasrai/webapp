import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';

export default class SearchBarContainer extends Component {
    constructor() {
        super();
        this.state = { query: '' };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ query: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        window.location = '/search?q=' + this.state.query;
    }

    render() {
        return (
            <SearchBar
                onChange={ this.onChange }
                onSubmit={ this.onSubmit } />
        );
    }
};