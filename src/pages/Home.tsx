import React, { Fragment } from 'react'
import DocumentTitle from 'react-document-title'
import { connect } from 'react-redux'
import loadable from 'react-loadable'
const Mi = loadable({
    loader:()=>{return import("../componets/Mi")},
    loading(){
        return <div>load</div>
    }
});

class Home extends React.Component {
    public state:any;
    constructor(props: any) {
        super(props);
        this.handlePromis();

    }
    handlePromis(): void {
        let p = new Promise((resolve, reject) => {
            console.log("promis");
            setTimeout(() => {
                resolve("zaks")
            }, 1000);
        });
        p.then(res => {
            console.log("Res=", res)
        })
    }
    render() {
        return (
            <DocumentTitle title={"首页"}>
                <Fragment>
                    <Mi>
                        <div>home</div>
                    </Mi>
                </Fragment>

            </DocumentTitle>

        )
    }
}
const stateToProps = (state: any): object => {
    return {
        login: state.Login
    }
}
export default connect(stateToProps)(Home)