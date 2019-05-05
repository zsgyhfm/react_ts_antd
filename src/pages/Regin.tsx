import React from 'react'
import DocumentTitle from 'react-document-title'
import styled from 'styled-components'
import {Row, Col, Input, Button} from 'antd'
import loadable from 'react-loadable'
import {Link} from "react-router-dom";

const Mi = loadable({
    loader: () => {
        return import("../componets/Mi")
    },
    loading() {
        return <div>load</div>
    }
});
const ReginDiv: any = styled.div`
background-color: #fff;
margin-top: 30px;
padding-bottom: 10px;
border: 4px solid #D5D6D6;
border-top: 4px solid #057ADE;
    .reginTitle{
        height: 87px;
        background-color: #fbfbfb;
        padding: 25px 18px 0 38px;
        text-align: left;
          .p1{
              color: #000;
              font-size: 24px;
              float: left;
              margin: 0;
          }
          .p2{
          color: #acacac;
          float: right;
          }
    }
.reginBody{
height: 332px;
}
.reform{
  width: 694px;
  font-size: 15px;
  text-align: left;
  margin-top: 30px;
  padding: 0 108px;
      input{
          width: 222px;
          height: 40px;
      }
      span{
        color: red;
      }
      p{
        display: inline-block;
        width: 120px;
        height: 15px;
        text-align: right;
      }
      .codeBtn{
          height:31px;
          width:96px;
          span{
            color:#000
          }
      }
      .regbtn{
          width: 100px;
          height: 38px;
          margin-left: 20px;
          span{
            color: #fff;
          }
      }
}
`;

class Regin extends React.Component {
    public state: any;
    public canvas: any;

    constructor(props: any) {
        super(props);
        this.state = {
            userName: "",
            firstPassword: "",
            secondPassword: "",
            phoneNum: "",
            qq: "",
            mailbox: "",
            vcode:""
        };
    }
    changeEmail(e:any){
        this.setState({
            mailbox:e.target.value,
        })
    }
    changeVcode(e:any){
        this.setState({
            vcode:e.target.value,
        })
    }
    changePassword(e:any){
        this.setState({
            firstPassword:e.target.value,
        })
    }
    changeRePassword(e:any){
        this.setState({
            secondPassword:e.target.value,
        })
    }
    changePhone(e:any){
        this.setState({
            phoneNum:e.target.value,
        })
    }
    changeQQ(e:any){
        this.setState({
            qq:e.target.value,
        })
    }
    changeNickname(e:any){
        this.setState({
            userName:e.target.value,
        })
    }
    reginSubmit() {

    }




    render() {

        return (
            <DocumentTitle title={"注册"}>
                <Mi>
                    <Row>
                        <Col span={16} offset={4}>
                            <ReginDiv>
                                <div className="reginTitle">
                                    <p className={"p1"}>会员注册</p>
                                    <p className={"p2"}>已有账户、现在就<Link to={"/login"}>登录</Link></p>
                                </div>
                                <div className={"reform"}>
                                    <p>邮箱地址</p> <span>*</span> <Input value={this.state.mailbox} onChange={this.changeEmail.bind(this)}/><br/><br/>
                                    <p>验证码</p> <span>*</span> <Input value={this.state.vcode} onChange={this.changeVcode.bind(this)}/>
                                    <br/><br/>
                                    <p>密码</p> <span>*</span> <Input value={this.state.firstPassword} onChange={this.changePassword.bind(this)}/><br/><br/>
                                    <p>再次验证密码</p> <span>*</span> <Input value={this.state.secondPassword} onChange={this.changeRePassword.bind(this)}/><br/><br/>
                                    <p>手机</p> <span>*</span> <Input value={this.state.phoneNum} onChange={this.changePhone.bind(this)}/><br/><br/>
                                    <p>QQ</p> <span>*</span> <Input value={this.state.qq} onChange={this.changeQQ.bind(this)}/><br/><br/>
                                    <p>昵称</p> <span>*</span> <Input value={this.state.userName} onChange={this.changeNickname.bind(this)}/><br/><br/>
                                    <p></p> <Button className={"regbtn"} type={"primary"}
                                                    onClick={this.reginSubmit.bind(this)}>立即注册</Button>
                                </div>
                            </ReginDiv>
                        </Col>
                    </Row>
                </Mi>
            </DocumentTitle>
        )
    }
}

export default Regin