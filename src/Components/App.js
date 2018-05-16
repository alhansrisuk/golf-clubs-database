import React, { Component, Fragment } from 'react'
import { Header, Footer } from './Layouts'
import Clubs from './Clubs'

// State information of application
export default class extends Component {
    render() {
        return <Fragment>
            <Header />

            <Clubs />
            
            <Footer />
        </Fragment>
    }
}
