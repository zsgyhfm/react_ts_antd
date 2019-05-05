import React from 'react'
import DocumentTitle from 'react-document-title'
import styled from 'styled-components'
import {Row, Col, Input, Button, Tooltip, Icon,message} from 'antd'
import loadable from 'react-loadable'
import {Link} from 'react-router-dom'
import Axios from 'axios'
import {LOGIN} from "../Api"
import {connect}from'react-redux'

const Mi = loadable({
    loader: () => {
        return import("../componets/Mi")
    },
    loading() {
        return <div>load</div>
    }
});
const LoginDiv: any = styled.div`
background-color: #fff;
margin-top: 30px;
height: 428px;
border: 4px solid #D5D6D6;
border-top: 4px solid #057ADE;
    .loginTitle{
        height: 87px;
        background-color: #fbfbfb;
        padding: 11px 18px 0 38px;
        text-align: left;
          .p1{
              color: #000;
              font-size: 24px;
             
              margin: 0;
          }
          .p2{
          color: #acacac;
          }
    }
.loginBody{
height: 332px;
}
.lgform{
  width: 694px;
  font-size: 15px;
  text-align: left;
  border-right: 1px solid #ccc;
  margin-top: 62px;
  padding: 0 108px;
      .ant-input-affix-wrapper{
          width: 257px;
          height: 40px;
      }
}
`;

class Login extends React.Component {
    public state: any;

    constructor(props: any) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }
    componentWillMount(): void {
         // const {}
    }

    //login
    handleLogin() {

        const {history,dispatch}: any = this.props;

        if (this.state.username.length < 5 || this.state.password.length < 5) {
            message.info("请输入正确的用户名密码",3);
            return
        }
        let formd = new FormData();
        formd.append("username", this.state.username);
        formd.append("password", this.state.password);
        Axios.post(LOGIN, formd).then((res:any) => {
            // console.log("登陆成功===", res)
            if(res.data.result==="00"){
                localStorage.setItem("user",this.state.username);
                dispatch({type:"LOGIN"});
                history.push("/");

            }else {
                history.push("/login");
                message.info("登陆失败",3);
                this.setState({
                    username:"",
                    password:""
                })
            }

        }).catch(err => {
            message.info("登陆失败",3,()=>{console.log("登陆失败err===", err)});

        })
    }

    changeAccount(e: any) {
        if (!e.target.value) {
            return
        }
        this.setState({
            username: e.target.value
        })
    }

    changePassword(e: any) {
        if (!e.target.value) {
            return
        }
        this.setState({
            password: e.target.value
        })
    }

    render() {
        return (
            <DocumentTitle title={"登陆"}>
                <Mi>
                    <Row>
                        <Col span={16} offset={4}>
                            <LoginDiv>
                                <div className="loginTitle">
                                    <p className={"p1"}>会员登陆</p>
                                    <p className={"p2"}>立即登录开始购买、出售域名、管理您的账户！</p>
                                </div>
                                <div className={"lgform"}>
                                    <div>
                                        <div>账户:&emsp;
                                            <Input
                                                placeholder={"请输入你的登陆手机号"}
                                                value={this.state.username}
                                                onChange={this.changeAccount.bind(this)}
                                                suffix={
                                                    <Tooltip title="手机号">
                                                        <Icon type="user" style={{color: 'rgba(0,0,0,.45)'}}/>
                                                    </Tooltip>
                                                }/>
                                        </div>
                                        <br/>
                                        <div>密码:&emsp;
                                            <Input
                                                type={"password"}
                                                placeholder={"请输入密码"}
                                                value={this.state.password}
                                                onChange={this.changePassword.bind(this)}
                                                suffix={
                                                    <Tooltip title="密码">
                                                        <Icon type="lock"
                                                              style={{color: 'rgba(0,0,0,.45)'}}/>
                                                    </Tooltip>
                                                }
                                            /> <a
                                                href={"https://google.com"}>忘记密码？</a></div>
                                        <br/>
                                        <div style={{paddingLeft: "50px"}}>
                                            <Button
                                                type={"primary"}
                                                onClick={this.handleLogin.bind(this)}
                                                style={{width: "110px", height: "38px"}}
                                            >登陆</Button>
                                            <br/><br/>
                                            <p>还不是会员？ <Link to={"/regin"}>新用户注册</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </LoginDiv>
                        </Col>
                    </Row>
                </Mi>
            </DocumentTitle>
        )
    }
}
const stateToProps=(state:any)=>{
 return{
     Login:state.Login
 }
};
export default connect(stateToProps)(Login)