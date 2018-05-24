import React, { Component ,Fragment } from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Add } from 'material-ui-icons';


export default class extends Component {
    state = {
        open: false,
        club: {
            model: '',
            description: '',
            clubtype: '',
        }
    }

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        })
    }

    handleChange = name => ({ target: { value }}) => {
        this.setState ({
            club: {
                ...this.state.clubtype,
                [name]: model
            }
        }) 
    }

    render() {
        const { open, club: { title, description, clubtype }  } = this.state

        return <Fragment>
        <Button variant="fab" onClick={ this.handleToggle } mini>
            <Add />
        </Button>

         <Dialog
          open={open}
          onClose={this.handleToggle}
        >
          <DialogTitle id="form-dialog-title">
            Add a new golf club
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Fill out the form below.
            </DialogContentText>
            <form>
                <TextField
                    label="Model"
                    value={model}
                    onChange={this.handleChange('model')}
                    margin="normal"
                />
                <br />
                <TextField
                    label="Description"
                    value={description}
                    onChange={this.handleChange('description')}
                    margin="normal"
                />
            </form>
          </DialogContent>
          <DialogActions>
            <Button color="primary" variant="raised">
              Add
            </Button>
          </DialogActions>
        </Dialog>
    </Fragment>
    }
}
