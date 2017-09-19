import React from 'react'
import './Family.css'
import FamilyIcon from '../assets/images/family-icon-big.png'
import GirlIcon from '../assets/images/little-girl-icon.png'
import BoyIcon from '../assets/images/robot-big.png'

export default (props) => (
    <div className="Family">

        <div className="row title-row">
            <h1 className="title col-sm-12 col-md-12 col-lg-12"> <span className="color"> {props.family.name}  </span></h1>
        </div>

        <div className="wrapper">
            
            <div className="row icons-row">

                <div className="col-sm-12 col-md-4 col-lg-4 icon-col" onClick={() => props.history.push('/dashboard')} >
                    <a>
                        <img className="responsive-image icons" src={FamilyIcon} alt="family" />
                    </a>
                    <br />
                    <p className="icon-p"> Dashboard </p>

                </div>

                {props.family.children.map(kid => (


                    <div className="col-sm-12 col-md-4 col-lg-4 icon-col" onClick={() => props.kidSelected(kid)} key={kid.id} >
                        <a>
                            <img className="responsive-image icons" src={kid.gender === 'female' ? GirlIcon : BoyIcon} alt="kid icon"/>
                        </a>
                        <br />
                        <p className="icon-p"> {kid.name}  </p>
                    </div>
                ))}

            </div>
        </div>

    </div>
)