import React, { Component } from 'react'
import axios from 'axios'
import Movie from './Movie'
import WatchIcon from '../assets/images/movie.png'
import MovieSlider from './MovieSlider'
import { getMoviesPath, getMoviePath } from '../utils/MovieUtils'

export default class Kids extends Component {

    state = { movies: [], movie: null }


    constructor(props) {
        super(props)
        this.closeHandler = this.closeHandler.bind(this)
        this.startViewingHandler = this.startViewingHandler.bind(this)
    }

    getMovies() {

        return axios.get(getMoviesPath())
    }

    getMovie(id) {

        return axios.get(getMoviePath(id));
    }


    componentWillMount() {

        this.getMovies().then(response => this.setState({ movies: response.data.results }))
    }

    movieClicked(mov) {
        this.getMovie(mov.id).then( movie => this.setState({movie: movie.data}))
    }

    closeHandler() {
        this.setState({movie:null})
    }

    startViewingHandler() {
        alert('start viewing ' + this.state.movie.title + ' by ' + this.props.kid.name)
    }

    render() {

        return (
            <div>

                {/* <p>Hi {this.props.kid.name}, what would you like to watch?</p> */}

                <div style={{width:'30%', margin:'0 auto'}}>
                <img style={{width:'100%'}} src={WatchIcon} alt=""/>
                </div>
                

                <MovieSlider movies={this.state.movies} movieClicked={this.movieClicked.bind(this)} />

                {this.state.movie && <Movie movie={this.state.movie} closeHandler={this.closeHandler} startViewing={this.startViewingHandler} />}

            </div>
        )
    }
}

