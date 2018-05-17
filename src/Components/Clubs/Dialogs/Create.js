import React, { Fragment } from 'react'
import Button from 'material-ui'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';


export default props =>
    <Fragment>
         <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Add a new golf club
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Fill out the form below.
            </DialogContentText>
            <form>
            </form>
          </DialogContent>
          <DialogActions>
            <Button color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
    </Fragment>