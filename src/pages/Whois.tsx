import React, {Fragment} from 'react'
// import { Link } from 'react-router-dom'
import DocumentTitle from 'react-document-title'
import loadable from 'react-loadable'
import {Row, Col,Input} from 'antd'
import styled from 'styled-components'
// import Mi from "../componets/Mi"
//懒加载Mi 组件 这种类型不一致导致无法取得children,tsx下不可取， 改用react-loadable
// const Mi=lazy(()=>import('../componets/Mi'))


// 使用loadeable 来懒加载
const Mi = loadable({
    loader: () => import("../componets/Mi"),
    loading() {
        return <div>loading</div>
    }
});

const HeaderDiv: any = styled.div`
 height: 285px;
 background-color:#1c4f79;
 margin-top: 20px;
 text-align: center;
 color: #fff;
 padding-top: 78px;
 h2{
    color: #fff;
    font-weight: 700;
    font-size: 35px;
 }
 .ant-input-search{
 width: 660px;
 }
`;
const Search = Input.Search;
class Whois extends React.Component {


    render() {
        return (
            <DocumentTitle title={"Whois查询"}>
                <Fragment>
                    <Mi>
                        <Row>
                            <Col span={16} offset={4}>
                                <HeaderDiv>
                                    <h2> whois查询</h2>
                                    <p>可实时查询检测域名whois</p>
                                    <Search
                                        placeholder="输入要查询的域名"
                                        enterButton="搜索"
                                        size="large"
                                        onSearch={value => console.log(value)}

                                    />
                                </HeaderDiv>
                            </Col>
                        </Row>
                    </Mi>
                </Fragment>
            </DocumentTitle>
        )
    }
}

export default Whois