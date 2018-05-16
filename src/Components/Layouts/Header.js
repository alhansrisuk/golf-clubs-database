import React from 'react'
import { AppBar, Toolbar, Typography } from 'material-ui'
import green from '@material-ui/core/colors/green';


export default props =>
    <AppBar position="static" style={{ backgroundColor: green[700] }}>
        <Toolbar>
            <Typography variant="headline" color="inherit">
                Golf Clubs Database
            </Typography>
        </Toolbar>
      </AppBar>

