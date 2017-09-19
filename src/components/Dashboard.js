import React, { Component } from 'react'
import Chart from './Chart'
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'
import KidDetails from './KidDetails'




export default class componentName extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modal: false,
            kidModal: false,
            kid: null
        }
        this.toggle = this.toggle.bind(this)
        this.showKid = this.showKid.bind(this)
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        })
    }

    showKid(kid) {
        this.setState({
            kid,
            kidModal : !this.state.kidModal,
            
        })
    }
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <Chart family={this.props.family} />
                <ul>
                    {this.props.family.children.map(kid => <li onClick={ () => this.showKid(kid)} key={kid.id}>{kid.name}</li>)}
                </ul>

                <Modal isOpen={this.state.kidModal} toggle={this.showKid}>
                    <ModalBody>
                        {this.state.kid && this.state.kid.name}
                    </ModalBody>
                </Modal>


                <Button color="danger" onClick={this.toggle}>Add Kid</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Add Kid
                    </ModalHeader>
                    <ModalBody>
                        <KidDetails />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>

                </Modal>
            </div>
        )
    }
}

