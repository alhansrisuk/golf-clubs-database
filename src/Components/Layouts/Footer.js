import React from 'react'
import { Paper, Tabs } from 'material-ui'
import { Tab } from 'material-ui/Tabs'

export default ({ clubtype, category, onSelect }) => {
    // Setting the default value for the club types
    const index = category
        ? clubtype.findIndex(type => type === category) + 1
        : 0

    // Function to find the index of each club type and switch accordingly
    const onIndexSelect = (e, index) => 
        onSelect(index === 0 ? '' : clubtype[index - 1])

    return <Paper>
        <Tabs
            value={index}
            onChange={onIndexSelect}
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
}
