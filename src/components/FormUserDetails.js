import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export class FormUserDetails extends Component {
    //to properly display the next component
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

  render() {
    //pulling out values
    const {values, handleChange} = this.props;
   
    //MuiThemeProvider can only return 1 value
    return (
        <MuiThemeProvider>
            <React.Fragment>

                <AppBar title = 'Enter User Information'></AppBar>
                <TextField
                    hintText = 'Enter First Name'
                    floatingLabelText = 'First Name'
                    onChange = {handleChange('firstName')}
                    defaultValue = {values.firstName}    //to have data saved when navigating back
                ></TextField>
                <br></br>
                <TextField
                    hintText = 'Enter Last Name'
                    floatingLabelText = 'Last Name'
                    onChange = {handleChange('lastName')}
                    defaultValue = {values.lastName}    //to have data saved when navigating back
                ></TextField>
                <br></br>
                <TextField
                    hintText = 'Enter Email'
                    floatingLabelText = 'Email Address'
                    onChange = {handleChange('email')}
                    defaultValue = {values.email}    //to have data saved when navigating back
                ></TextField>
                <br></br>
                <RaisedButton
                    label = 'Continue'
                    primary = {true}
                    style = {styles.button}
                    onClick = {this.continue}
                ></RaisedButton>

            </React.Fragment>
        </MuiThemeProvider>
    )
  }
}

//styles to be used on invdividual components
const styles = {
    button: {
        margin: 15
    }
}

export default FormUserDetails
