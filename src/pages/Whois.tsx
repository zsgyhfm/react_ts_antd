import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Header from '../componets/Header'
class Whois extends React.Component{
    render(){
        return(
            <Fragment>
                <Header/>
                <div>Whois</div>
                <Link to="/">Whois转到home</Link>
            </Fragment>
        )
    }
}
export default Whois