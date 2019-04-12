import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import {List, ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

export class Confirm extends Component {
    //to properly display the next component
    continue = (e) => {
        e.preventDefault();
        //Send form data to API (Express, Flask, etc)
        this.props.nextStep();
    }

    previous = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

  render() {
    //pulling out values
    const {values: { firstName, lastName, email, occupation, city, bio }} = this.props;
   
    //MuiThemeProvider can only return 1 value
    return (
        <MuiThemeProvider>
            <React.Fragment>

                <AppBar title = 'Confirmation'></AppBar>
                <List>
                    <ListItem
                        primaryText = "First Name"
                        secondaryText = { firstName }
                    ></ListItem>
                    <ListItem
                        primaryText = "Last Name"
                        secondaryText = { lastName }
                    ></ListItem>
                    <ListItem
                        primaryText = "Email"
                        secondaryText = { email }
                    ></ListItem>
                    <ListItem
                        primaryText = "Occupation"
                        secondaryText = { occupation }
                    ></ListItem>
                    <ListItem
                        primaryText = "City"
                        secondaryText = { city }
                    ></ListItem>
                    <ListItem
                        primaryText = "Bio"
                        secondaryText = { bio }
                    ></ListItem>
                </List>
                <br></br>
                <RaisedButton
                    label = 'Back'
                    primary = {false}
                    style = {styles.button}
                    onClick = {this.previous}
                ></RaisedButton>
                <RaisedButton
                    label = 'Confirm'
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

export default Confirm
