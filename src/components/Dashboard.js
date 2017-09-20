import React, { Component } from 'react'
import Chart from './Chart'
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'
import KidDetails from './KidDetails'




export default class componentName extends Component {

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
        alert(kid.name)
    }
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <Chart family={this.props.family} />
                <ul>
                    {this.props.family.children.map(kid => <li onClick={ () => this.showKid(kid)} key={kid.id}>{kid.name}</li>)}
                </ul>

                {/* <Button color="danger" onClick={this.toggle}>Add Kid</Button> */}

                <Modal isOpen={!!this.state.kid} toggle={this.toggle}>
                    <ModalBody>
                        <KidDetails kid={this.state.kid} submitHandler={this.kidChangedHandler} />
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

