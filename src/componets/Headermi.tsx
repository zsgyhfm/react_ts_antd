import React from 'react'
import styled from 'styled-components'
import { Row, Col, Input, Button } from 'antd'
import { Link } from "react-router-dom"
const HeaderDiv = styled.div`

background-color:#f5f5f5;
border-bottom: 1px #e3e3e3 solid;
    .header-title{
        height:30px;
        line-height:30px;
    }
    a{
        color:#333;
    }
    span{
        color:#7B7B7B;
    }
    .wechat{
        color:#333;
        cursor:pointer;
    }
    .wechat:hover{
        color:#1890FF;
    }
    .header-search{
        height:120px;
        background-color:#f8f8f8;
    }
    .header-search-input{
        width:388px;
        height:47px;
        margin-right:30px;
        margin-top:30px;
    }
    .header-search span{
        color:#fff;
    }
`;
const NavStyle = styled.div`
a{
    width:132px;
    height:45px;
    display:inline-block;
    float:left;
    color:#fff;
}
a:hover{
    background-color:#034e8e
}
`;

const Search = Input.Search;

class Header extends React.Component {
    public state:any;
    constructor(props:any){
        super(props);
        this.state={
            username:""
        }
    }
    componentWillMount(): void {
        const user = localStorage.getItem("user");
        this.setState({
            username:user?user:""
        });
    }

    public render() {
        return (
            <HeaderDiv>
                <Row style={{ borderBottom: "1px #e3e3e3 solid" }}>
                    <Col className={"header-title clear"}xxl={{span:16,offset:4}} lg={{span:24}}>
                        <div className={"float-left"}>
                            <span className={""}>酷米网专注服务于</span>
                            <a href="https://google.com">域名交易,</a>
                            <a href="https://google.com">域名买卖,</a>
                            <a href="https://google.com">公众号交易,</a>
                            <a href="https://google.com">新媒体交易,</a>
                            <a href="https://google.com">自媒体交易！</a>
                        </div>
                        <div className={"float-right"}>
                            <span>您好{this.state.username},&emsp;</span>

                            <Link to={"/login"}>登陆&emsp;</Link>
                            <Link to={"/regin"}>注册&emsp;</Link>

                            {/*<span className={"wechat"}><Icon type="wechat" />微信公众号</span>*/}
                        </div>
                    </Col>
                </Row>
                <Row style={{ backgroundColor: "#f8f8f8" }}>
                    <Col className="header-search clear"span={16} offset={4}>
                        <div className={"float-right"}>
                            <Button type={"primary"} style={{ height: "40px", marginTop: "30px" }}>发布交易</Button>
                        </div>
                        <div className={" header-search-input clear float-right"}>
                            <Search
                                placeholder="请输入域名关键字"
                                enterButton="搜索"
                                size="large"
                                onSearch={value => console.log(value)}
                            />
                        </div>
                    </Col>
                </Row>
                <Row style={{ backgroundColor: "#1890FF", height: "45px", color: "#fff", lineHeight: "45px", fontSize: "16px" }}>
                    <Col xxl={{span:16,offset:4}} xl={{span:16,offset:4}}  md={{span:24}}>
                        <NavStyle>
                            <Link to="/">首页</Link>
                            <Link to="/trade">域名代售</Link>
                            <Link to="/grw">域名查墙</Link>
                            <Link to="/Whois">whois查询</Link>
                            <Link to="http://google.com">域名污染查询</Link>
                            <Link to="http://google.com">行业资讯</Link>
                            <Link to="http://google.com">米表展示</Link>
                        </NavStyle>
                    </Col>
                </Row>
            </HeaderDiv>
        )
    }
}
export default Header