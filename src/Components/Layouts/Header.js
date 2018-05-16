import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, Toolbar } from 'material-ui'


export default props =>
    <MuiThemeProvider>
    <AppBar position="static">
        <Toolbar>

        </Toolbar>
      </AppBar>
    </MuiThemeProvider>
