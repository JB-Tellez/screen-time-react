import React from 'react'
import './Family.css'
import FamilyIcon from '../assets/images/family-icon-big.png'
import IconOne from '../assets/images/little-girl-icon.png'
import IconTwo from '../assets/images/teen-boy-icon.png'
import IconThree from '../assets/images/heartlogo.png'
import IconFour from '../assets/images/robot-big.png'

const icons = [IconOne, IconTwo, IconThree, IconFour]

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
                            <img className="responsive-image icons" src={icons[kid.avatar - 1]} alt={"Icon " + kid.avatar}/>
                        </a>
                        <br />
                        <p className="icon-p"> {kid.name}  </p>
                    </div>
                ))}

            </div>
        </div>

    </div>
)