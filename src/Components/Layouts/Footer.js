import React from 'react'
import { Paper, Tabs } from 'material-ui'
import { Tab } from 'material-ui/Tabs'

export default ({ clubtype, category, onSelect }) => {
    const index = category
        ? clubtype.findIndex(type => type === category) + 1
        : 0

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
