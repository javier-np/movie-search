import React, { Component } from 'react'
import { Title } from '../components/Title'
import { SearchForm } from '../components/SearchForm'
import { MoviesList } from '../components/MoviesList'

export class Home extends Component {

    state = {
        results: [],
        usedSearch: false
    }

    _handleResults = (results) => {
        this.setState({ results, usedSearch: true })
    }

    _renderResults() {
        return this.state.results.length === 0
            ? <p>Sorry! We couldn't find any movie with that title</p>
            : <MoviesList movies={this.state.results} />
    }

    render() {
        return (
            <div>
                <Title>Search Movies</Title>
                <div className="SearchForm-wrapper">
                    <SearchForm
                        onResults={this._handleResults} />
                </div>
                {
                    this.state.usedSearch
                        ? this._renderResults()
                        : <small>Enter a movie title to search</small>
                }
            </div>
        )
    }
}