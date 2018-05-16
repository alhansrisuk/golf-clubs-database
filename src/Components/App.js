import React, { Component, Fragment } from 'react'
import { Header, Footer } from './Layouts'
import Clubs from './Clubs'
import { clubtype, clubs } from '../store.js'

// State information of application
export default class extends Component {
    state = {
        clubs
    }

    // Modify the data before passing it to Clubs
    getClubsByType() {
        return Object.entries(
            this.state.clubs.reduce((clubs, club) => {
            const { clubtype } = club
            
            // If we have something stored here, create another array
            clubs[clubtype] = clubs[clubtype]
                ? [...clubs[clubtype], club]
                : [club]

            return clubs
        }, {})
    )
    }

    render() {
        const clubs = this.getClubsByType()
        return <Fragment>
            <Header />

            <Clubs
                clubs={clubs}
            />

            <Footer 
                clubtype={clubtype}               
            />
        </Fragment>
    }
}
