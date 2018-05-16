import React, { Fragment } from 'react'
import { Grid, Paper, Typography, List } from 'material-ui'
import { ListItem, ListItemText } from 'material-ui/List'

const styles = {
    Paper: { padding: 20, marginTop: 10, marginBottom: 10 }
}

// Business logic
export default ({ clubs }) => 
    <Grid container>
        <Grid item sm>
            <Paper style={ styles.Paper }>
                {clubs.map(([type, clubs]) =>
                    <Fragment>
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
                )}
            </Paper>
        </Grid>
        <Grid item sm>
            <Paper style={ styles.Paper }>
                Right Pane
            </Paper>
        </Grid>
    </Grid>