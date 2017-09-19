import React, { Component } from 'react'
import axios from 'axios'
import Movie from './Movie'
import WatchIcon from '../assets/images/movie.png'
import MovieSlider from './MovieSlider'

export default class Kids extends Component {

    API_KEY = '3f3798b4fab8a9e67c465bd2347d06a6';

    state = { movies: [], movie: null }


    constructor(props) {
        super(props)
        this.closeHandler = this.closeHandler.bind(this)
        this.startViewingHandler = this.startViewingHandler.bind(this)
    }

    getMovies() {

        const url = `https://api.themoviedb.org/3/movie/283995/similar?api_key=${this.API_KEY}&language=en-US&page=1`;

        return axios.get(url)
    }

    getMovie(id) {

        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${this.API_KEY}&language=en-US`;
        
        return axios.get(url);
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

