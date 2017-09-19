import React, { Component } from 'react'
import Slider from 'react-slick'
import './MovieSlider.css'

export default class MovieSlider extends Component {
    getPath(movie) {
        const path = `https://image.tmdb.org/t/p/w780${movie.poster_path}`;
        return path
    }

    render() {
        var settings = {
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
        };



        return (
            <Slider {...settings}>
                {this.props.movies.map(movie => (
                    <div key={movie.id} onClick={ () => this.props.movieClicked(movie)}>
                        <div className="img-container">
                            <img src={this.getPath(movie)} alt="" />
                        </div>
                    </div>
                )
                )}
            </Slider>
        );
    }
}
