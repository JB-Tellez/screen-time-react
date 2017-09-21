import React from 'react'
import './Movie.css'
import Timer from './Timer'
import Rating from './Rating'
import { Modal, ModalBody } from 'reactstrap'
import { getPosterPath } from '../utils/MovieUtils'

export default (props) => (

  <Modal isOpen={true} toggle={props.closeHandler} className="Movie">
    <ModalBody>
      <div className="movie-card">
        <div className="container">
          <img src={getPosterPath(props.movie)} alt="poster" className="cover" />
          <div className="hero">
            <div className="details">
              <h2 className="movie-title">{props.movie.title}</h2>
              <Rating />
            </div>
          </div>
          <div className="description">
            <p className="runtime"> {props.movie.runtime} minutes</p>
            <p className="overview"> {props.movie.overview}</p>
            <Timer startViewing={props.startViewing} />
          </div>
        </div>
      </div>
    </ModalBody>
  </Modal>
)


