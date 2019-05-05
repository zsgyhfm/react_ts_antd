import React, {Fragment} from 'react'
// import { Link } from 'react-router-dom'
import DocumentTitle from 'react-document-title'
import loadable from 'react-loadable'
import {Row, Col, Input} from 'antd'
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
const Cxlist: any = styled.div`
background-color: #fff;
a{
display: inline-block;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    margin: 18px;
    width: 160px;
    height: 40px;
    border: 1px solid #057ade;
    border-radius: 5px;
    background: #fff;
    background-clip: padding-box;
    color: #777;
    text-align: center;
    font-size: 14px;
    line-height: 40px;
}
`;

const Search = Input.Search;

class GRW extends React.Component {


    render() {
        return (
            <DocumentTitle title={"域名被墙查询"}>
                <Fragment>
                    <Mi>
                        <Row>
                            <Col span={16} offset={4}>
                                <HeaderDiv>
                                    <h2> 域名被墙查询</h2>
                                    <p>可实时查询检测域名是否被墙</p>
                                    <Search
                                        placeholder="输入要查询的域名"
                                        enterButton="搜索"
                                        size="large"
                                        onSearch={value => console.log(value)}

                                    />
                                </HeaderDiv>
                            </Col>
                        </Row>

                        <Row>
                            <Col span={16} offset={4}>
                                <div style={{
                                    color:" #666",
                                    fontSize: "24px",backgroundColor:"#fff",padding:"20px 0"}}>
                                    <img src="https://kmw.com/template/pc/rainbow/static/km/images/line_left.png" alt=""/>
                                    <span>部分已经被墙域名</span>
                                    <img src="https://kmw.com/template/pc/rainbow/static/km/images/line_right.png" alt=""/>
                                </div>
                            </Col>
                            <Col span={16}offset={4}>
                                <Cxlist >
                                    <a href="/beiqiang/keyword/dq34.com.html">dq34.com</a>
                                    <a href="/beiqiang/keyword/780778.com.html">780778.com</a>
                                    <a href="/beiqiang/keyword/799087.com.html">799087.com</a>
                                    <a href="/beiqiang/keyword/876083.com.html">876083.com</a>
                                    <a href="/beiqiang/keyword/876085.com.html">876085.com</a>
                                    <a href="/beiqiang/keyword/915905.com.html">915905.com</a>
                                    <a href="/beiqiang/keyword/6360766.com.html">6360766.com</a>
                                    <a href="/beiqiang/keyword/275587.com.html">275587.com</a>
                                    <a href="/beiqiang/keyword/cft.com.html">cft.com</a>
                                    <a href="/beiqiang/keyword/069007.com.html">069007.com</a>
                                    <a href="/beiqiang/keyword/069004.com.html">069004.com</a>
                                    <a href="/beiqiang/keyword/069001.com.html">069001.com</a>
                                    <a href="/beiqiang/keyword/420093.com.html">420093.com</a>
                                    <a href="/beiqiang/keyword/808716.com.html">808716.com</a>
                                    <a href="/beiqiang/keyword/159039.com.html">159039.com</a>
                                    <a href="/beiqiang/keyword/400283.com.html">400283.com</a>
                                    <a href="/beiqiang/keyword/360683.com.html">360683.com</a>
                                    <a href="/beiqiang/keyword/690595.com.html">690595.com</a>
                                    <a href="/beiqiang/keyword/690575.com.html">690575.com</a>
                                    <a href="/beiqiang/keyword/yin116.com.html">yin116.com</a>
                                    <a href="/beiqiang/keyword/a78889.com.html">a78889.com</a>
                                    <a href="/beiqiang/keyword/a68889.com.html">a68889.com</a>
                                    <a href="/beiqiang/keyword/987ff.com.html">987ff.com</a>
                                    <a href="/beiqiang/keyword/332gg.com.html">332gg.com</a>
                                    <a href="/beiqiang/keyword/zc5511.com.html">zc5511.com</a>
                                    <a href="/beiqiang/keyword/yin885.com.html">yin885.com</a>
                                    <a href="/beiqiang/keyword/xx181.com.html">xx181.com</a>
                                    <a href="/beiqiang/keyword/yin500.com.html">yin500.com</a>
                                    <a href="/beiqiang/keyword/p5879.com.html">p5879.com</a>
                                    <a href="/beiqiang/keyword/az29.com.html">az29.com</a>
                                </Cxlist>
                            </Col>
                        </Row>
                    </Mi>
                </Fragment>
            </DocumentTitle>
        )
    }
}

export default GRW