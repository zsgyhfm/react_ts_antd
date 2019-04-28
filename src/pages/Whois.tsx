import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Header from '../componets/Headermi'
import DocumentTitle from 'react-document-title'
import Mi from "../componets/Mi"
class Whois extends React.Component {
    render() {
        return (
            <DocumentTitle title={"Whois查询"}>
                <Fragment>
                    <Mi>
                        <div>Whois</div>
                        <Link to="/">Whois转到home</Link>
                    </Mi>
                </Fragment>
            </DocumentTitle>
        )
    }
}
export default Whois