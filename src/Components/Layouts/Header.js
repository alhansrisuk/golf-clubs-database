import React from 'react'
import { AppBar, Toolbar, Typography } from 'material-ui'
import CreateDialog from '../Clubs/Dialogs/Create'
import green from '@material-ui/core/colors/green';


export default ({ clubtype }) =>
    <AppBar position="static" style={{ backgroundColor: green[700] }}>
        <Toolbar>
            <Typography variant="headline" color="inherit" style={{flex: 1}}>
                Golf Clubs Database
            </Typography>

            <CreateDialog clubtype={clubtype}/>
        </Toolbar>
      </AppBar>

