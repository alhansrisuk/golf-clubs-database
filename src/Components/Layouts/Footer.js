import React from 'react'
import { Paper, Tabs } from 'material-ui'
import { Tab } from 'material-ui/Tabs'

export default ({ clubtype }) =>
    <Paper>
        <Tabs
            value={0}
            indicatorColor="primary"
            textColor="primary"
            centered
        >
            <Tab label="All" />
            { clubtype.map(type =>
                <Tab label={type} />
            )}
        </Tabs>
    </Paper>