import React, { Component ,Fragment } from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Add } from 'material-ui-icons';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    FormControl: {
        width: 500
    }
})

export default withStyles(styles)(class extends Component {
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

    handleChange = name => ({ target: { model }}) => {
        this.setState ({
            club: {
                ...this.state.clubtype,
                [name]: model
            }
        }) 
    }

    render() {
        const { open, club: { model, description, clubtype }  } = this.state,
              { classes, clubtype: categories } = this.props

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
                    className={classes.FormControl}
                />
                <br />
                    <FormControl>
                        <InputLabel htmlFor="club">
                            Club Type
                        </InputLabel>
                        <Select
                            value={clubtype}
                            onChange={this.handleChange('clubtype')}
                        >
                            {categories.map(category => 
                                <MenuItem value={category}>
                                    {category}
                                </MenuItem>
                            )}

                        </Select>
                    </FormControl>
                <br />
                <TextField
                    multiline
                    rows="4"
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
})
