import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import DocumentTitle from 'react-document-title'
import Header from '../componets/Header'
import {connect} from 'react-redux'
class Home extends React.Component {
    render() {
        return (
            <DocumentTitle title={"首页"}>
                <Fragment>
                    <Header />
                    <div>Home</div>
                    <Link to="/whois">home转到whois</Link>
                </Fragment>

            </DocumentTitle>

        )
    }
}
const stateToProps=(state:any)=>{
    return{
        login:state.Login
    }
}
export default connect(stateToProps)(Home)