import React, { Fragment } from 'react'
import { Grid, Paper, Typography, List } from 'material-ui'
import { ListItem, ListItemText } from 'material-ui/List'

const styles = {
    Paper: { 
        padding: 20, 
        marginTop: 10, 
        marginBottom: 10, 
        height: 500, 
        overflowY: 'auto'
    }
}

// Business logic
export default ({ clubs, category }) => 
    <Grid container>
        <Grid item sm>
            <Paper style={ styles.Paper }>
                {clubs.map(([type, clubs]) =>
                  !category || category === type
                    ? <Fragment>
                        <Typography 
                            variant="headline"
                            style={{textTransform: 'capitalize'}}
                        >
                            {type}
                        </Typography>
                            <List component="ul">
                                {clubs.map(({ model }) =>
                                    <ListItem button>
                                        <ListItemText primary={model} />
                                    </ListItem>
                            )}
                        </List>
                    </Fragment>
                    : null
                )}
            </Paper>
        </Grid>
        <Grid item sm>
            <Paper style={ styles.Paper }>
                <Typography
                    variant="display1"
                > 
                Welcome!
                </Typography>
                <Typography
                    variant="subheading"
                    style={{ marginTop: 15 }}
                > 
                Select a golf club from the list on the left.
                </Typography>
            </Paper>
        </Grid>
    </Grid>