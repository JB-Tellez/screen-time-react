import React, { Component } from 'react'
import './Movie.css'
import Timer from './Timer'
import Rating from './Rating'
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'

export default class Movie extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this)
  }

  getPosterPath(movie) {

    return `https://image.tmdb.org/t/p/w154/${movie.poster_path}`;
  }

  toggle () {
    this.props.closeHandler()
  }

  render() {

    return (
      <Modal isOpen={true} toggle={this.toggle} className="Movie">
        <ModalBody>
          <div className="movie-card">
            <div className="container">
              <img src={this.getPosterPath(this.props.movie)} alt="poster" className="cover" />
              <div className="hero">
                <div className="details">
                  <h2 className="movie-title">{this.props.movie.title}</h2>
                  <Rating />
                </div>
              </div>
              <div className="description">
                <p className="runtime"> {this.props.movie.runtime} minutes</p>
                <p className="overview"> {this.props.movie.overview}</p>
                <Timer startViewing={this.props.startViewing} />

              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>

    );
  }
}


