import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

export class Success extends Component {
   
  render() {
    //MuiThemeProvider can only return 1 value
    return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title = 'Confirmation'></AppBar>
                <h1>Thanks for the submission!</h1>
                <p>Follow up info will be emailed</p>
            </React.Fragment>
        </MuiThemeProvider>
    )
  }
}

export default Success
