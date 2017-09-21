import React from 'react'
import Slider from 'react-slick'
import './MovieSlider.css'
import { getPosterPath } from '../utils/MovieUtils'

const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
};

export default (props) => (
    <Slider {...settings}>
        {props.movies.map(movie => (
            <div key={movie.id} onClick={() => props.movieClicked(movie)}>
                <div className="img-container">
                    <img src={getPosterPath(movie)} alt="" />
                </div>
            </div>
        )
        )}
    </Slider>
)