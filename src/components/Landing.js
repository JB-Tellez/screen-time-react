import React from 'react'
import LandingSectionOne from './LandingSectionOne'
import LandingSectionTwo from './LandingSectionTwo'
import Logo from '../assets/images/screentime_final.gif'
import ArrowImage from '../assets/images/arrow.png'
import IconImage from '../assets/images/family-icon.png'
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    landing: {
      textAlign: 'center',
      maxWidth: '100%',
      overflowX: 'hidden'
    },
    logoStyle: {
      margin: '11% auto',
      height: '550px'
    },
    familyAnchorStyles: {
      color: '#337ab7',
      opacity: '.5',
      position: 'absolute',
      left: '47%',
      bottom: '3%',
      textDecoration: 'none',
      height: '100px',
      width: '100px',
      textAlign: 'center'
    },
    arrowStyles: {
      borderRadius: '50% !important',
      backgroundColor: '#fff',
      position: 'absolute',
      left: '31px',
      top: '65px',
      height: '40px',
      width: '40px'
    },
    arrowImageStyles: {
      position: 'absolute',
      right: '12px',
      top: '10px',
    },
    hover: {
      ':hover': {
        opacity: '1',
        backgroundImage: 'none'
      }
    }
  }
)


export default (props) => ( 
      <div className="container-fluid">
      <div className={css(styles.landing)}>
        <img src={Logo} alt="screen time logo" className={css(styles.logoStyle)} />
        <a className={css(styles.familyAnchorStyles, styles.hover)} href="#section-one">
          <img src={IconImage} alt="family icon" />
          <div className={css(styles.arrowStyles)}  >
            <img className={css(styles.arrowImageStyles)} src={ArrowImage} alt="arrow icon" />
          </div>
        </a>
        <LandingSectionOne />
        <LandingSectionTwo gotoRegisterHandler={props.gotoRegisterHandler} />
      </div>
      </div>
    )

