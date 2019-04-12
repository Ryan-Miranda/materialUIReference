import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export class FormPersonalDetails extends Component {
    //to properly display the next component
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    previous = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

  render() {
    //pulling out values
    const {values, handleChange} = this.props;
   
    //MuiThemeProvider can only return 1 value
    return (
        <MuiThemeProvider>
            <React.Fragment>

                <AppBar title = 'Enter Personal Information'></AppBar>
                <TextField
                    hintText = 'Enter Occupation'
                    floatingLabelText = 'Occupation'
                    onChange = {handleChange('occupation')}
                    defaultValue = {values.occupation}    //to have data saved when navigating back
                ></TextField>
                <br></br>
                <TextField
                    hintText = 'City'
                    floatingLabelText = 'City'
                    onChange = {handleChange('city')}
                    defaultValue = {values.city}    //to have data saved when navigating back
                ></TextField>
                <br></br>
                <TextField
                    hintText = 'Enter Bio'
                    floatingLabelText = 'Bio'
                    onChange = {handleChange('bio')}
                    defaultValue = {values.bio}    //to have data saved when navigating back
                ></TextField>
                <br></br>
                <RaisedButton
                    label = 'Back'
                    primary = {false}
                    style = {styles.button}
                    onClick = {this.previous}
                ></RaisedButton>
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

export default FormPersonalDetails
