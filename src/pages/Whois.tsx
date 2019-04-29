import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import DocumentTitle from 'react-document-title'
import loadable from 'react-loadable'
// import Mi from "../componets/Mi"
//懒加载Mi 组件 这种类型不一致导致无法取得children,tsx下不可取， 改用react-loadable 
// const Mi=lazy(()=>import('../componets/Mi'))


// 使用loadeable 来懒加载
const Mi = loadable({
    loader:()=>import("../componets/Mi"),
    loading(){
        return <div>loading</div>
    }
})
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