import React, { Component } from 'react'
import Chart from './Chart'
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'
import KidDetails from './KidDetails'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom'
import * as familyActions from '../actions/familyActions';
import IconOne from '../assets/images/little-girl-icon.png'
import IconTwo from '../assets/images/teen-boy-icon.png'
import IconThree from '../assets/images/heartlogo.png'
import IconFour from '../assets/images/robot-big.png'

const icons = [IconOne, IconTwo, IconThree, IconFour]

// TODO centralize Icons

const KidBadge = ({kid, clickHandler}) => (
    
    <li onClick={clickHandler}>
        <div style={{width:'100px'}}>
            <img style={{width:'100%'}} src={icons[kid.avatar - 1]} alt={"Icon " + kid.avatar}  />
            <p style={{textAlign:'center'}}>{kid.name}</p>
        </div>
    </li>
)
class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            kid: null
        }
        this.toggle = this.toggle.bind(this)
        this.showKid = this.showKid.bind(this)
        this.kidChangedHandler = this.kidChangedHandler.bind(this)
    }

    toggle() {
        this.setState({
            kid: null
        })
    }

    showKid(kid) {
        this.setState({
            kid
        })
    }

    kidChangedHandler(kid) {
        this.props.familyActions.updateKid(kid)
    }
    render() {
        return (
            <div>
                
                <ul style={{float:'right'}}>
                    
                    {this.props.family.children.map(kid => <KidBadge key={kid.id} kid={kid} clickHandler={ () => this.showKid(kid)} />)}
                    
                    {this.props.family.children.length < 2 &&
                        <Button color="danger" onClick={this.toggle}>Add Kid</Button>
                    }
                </ul>

                <Chart family={this.props.family} />

                <Modal isOpen={!!this.state.kid} toggle={this.toggle}>
                    <ModalBody>
                        <KidDetails kid={this.state.kid} submitHandler={this.kidChangedHandler} />
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      family: state.family
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      familyActions: bindActionCreators(familyActions, dispatch),
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Dashboard);



