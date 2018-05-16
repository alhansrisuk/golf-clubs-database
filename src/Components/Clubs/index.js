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
export default ({ 
    clubs, 
    category, 
    onSelect, 
    club: {
        id, 
        model = 'Welcome!', 
        description = 'Select a golf club from the list on the left.'
    } 
   }) => 
    <Grid container>
        <Grid item sm>
            <Paper style={ styles.Paper }>
                {clubs.map(([type, clubs]) => // shows the club type selected in the left pane
                  !category || category === type
                    ? <Fragment key={type}>
                        <Typography 
                            variant="headline"
                            style={{textTransform: 'capitalize'}}
                        >
                            {type}
                        </Typography>
                            <List component="ul">
                                {clubs.map(({ id, model }) =>
                                    <ListItem
                                        key={id}
                                        button
                                        onClick={() => onSelect(id)}
                                    >
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
                {model}
                </Typography>
                <Typography
                    variant="subheading"
                    style={{ marginTop: 15 }}
                > 
                {description}
                </Typography>
            </Paper>
        </Grid>
    </Grid>