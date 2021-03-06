import React, { Component } from 'react'
import PropTypes from 'prop-types'

const API_KEY = 'ac27ec42'

export class MovieDetails extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }

    state = {
        movie : {}
    }

    _fetchMovie({id}){
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        .then(res => res.json())
        .then(movie => {
           console.log({ movie })
           this.setState({movie})
        })
    }

    componentDidMount () {
         const { id } = this.props.match.params
         this._fetchMovie( { id })
    }

    _goBack(){
        window.history.back();
    }

    render (){
        const {Title, Poster, Actors, Plot, Metascore} = this.state.movie

        return (
            <div>
                <h1>{Title}</h1>
                <img alt={Title} src={Poster}></img>
                <h3>{Actors}</h3>
                <span>{Metascore}</span>
                <p>{Plot} </p>
                <button onClick={this._goBack}>Volver</button>
            </div>
        )
    }
}