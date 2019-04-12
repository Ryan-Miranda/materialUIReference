import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm'
import Success from './Success'

export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    }

    //Method to move to next step
    nextStep = () => {
        //destructuring, getting step from the state
        const {step} = this.state;
        this.setState({
            step: step + 1
        })
    }

    //go back to prev step
    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        })
    }

    //Handle fields changing
    handleChange = (input) => e => {
        //sets the target field that user wanted to change
        this.setState({[input]: e.target.value});
    }

  render() {
    const {step} = this.state;
    const { firstName, lastName, email, occupation, city, bio} = this.state;
    //to pass values into each component
    const values = { firstName, lastName, email, occupation, city, bio};
    
    switch(step){
        case 1:
            return (
                //pass props to access these methods in the other components and field values
                <FormUserDetails 
                    nextStep = {this.nextStep}
                    handleChange = {this.handleChange}
                    values = {values}
                />
            )
        case 2:
            return (
                //pass props to access these methods in the other components and field values
                <FormPersonalDetails 
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    handleChange = {this.handleChange}
                    values = {values}
                />
            )
        case 3:
            return (
                //pass props to access these methods in the other components and field values
                <Confirm
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    values = {values}
                />
            )
        case 4:
            return <Success></Success>
    }
  }
}

export default UserForm
