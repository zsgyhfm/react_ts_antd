import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Header from '../componets/Header'
import DocumentTitle from 'react-document-title'
class Whois extends React.Component {
    render() {
        return (
            <DocumentTitle title={"Whois查询"}>
                <Fragment>
                    <Header />
                    <div>Whois</div>
                    <Link to="/">Whois转到home</Link>
                </Fragment>
            </DocumentTitle>
        )
    }
}
export default Whois