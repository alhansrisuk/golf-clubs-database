import React, { Component, Fragment } from 'react'
import { Header, Footer } from './Layouts'
import Clubs from './Clubs'
import { clubtype, clubs } from '../store.js'

// State information of application
export default class extends Component {
    state = {
        clubs,
        club: {}
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

    // Method to handle the tabs for type of club selected
    handleCategorySelected = category => {
        this.setState({
            category
        })
    }

    handleClubSelected = id => {
        this.setState(({ clubs }) => ({
            club: clubs.find(clb => clb.id === id)
        }))
    }

    render() {
        const clubs = this.getClubsByType(),
            { category, club } = this.state
        return <Fragment>
            <Header />

            <Clubs
                club={club}
                category={category}
                clubs={clubs}
                onSelect={this.handleClubSelected}
            />

            <Footer 
                category={category}
                clubtype={clubtype}
                onSelect={this.handleCategorySelected}               
            />
        </Fragment>
    }
}
