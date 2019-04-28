import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Header from '../componets/Header'
class Home extends React.Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <div>Home</div>
                <Link to="/whois">home转到whois</Link>
            </Fragment>

        )
    }
}
export default Home