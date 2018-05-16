import React from 'react'
import { Grid, Paper } from 'material-ui'

const styles = {
    Paper: { padding: 20, marginTop: 10, marginBottom: 10 }
}

// Business logic
export default props => 
    <Grid container>
        <Grid item sm>
            <Paper style={ styles.Paper }>
                Left Pane
            </Paper>
        </Grid>
        <Grid item sm>
            <Paper style={ styles.Paper }>
                Right Pane
            </Paper>
        </Grid>
    </Grid>