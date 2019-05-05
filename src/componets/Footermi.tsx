import React from 'react'
import styled from 'styled-components'
import {Row,Col} from 'antd'
const FooterDiv = styled.div`
    height:100%;
  border-top: 2px solid #057ADE;
  background-color: #fff;
  padding-top: 20px;
`;
class Footer extends React.Component{
    render(){
        return(
            <FooterDiv>
                <Row style={{height:"100%"}}>
                    <Col  xxl={{span:16,offset:4}} xl={{span:18,offset:2}}  md={{span:24}} style={{backgroundColor:"#fff",height:"100%"}}>
                       <Row style={{marginBottom:"30px"}}>
                           <Col span={3}><a href="https://google.com">服务协议</a>&emsp;&emsp;|</Col>
                           <Col span={3}><a href="https://google.com">关于我们</a>&emsp;&emsp;|</Col>
                           <Col span={3}><a href="https://google.com">隐私声明</a>&emsp;&emsp;|</Col>
                           <Col span={3}><a href="https://google.com">联系我们</a>&emsp;&emsp;|</Col>
                           <Col span={3}><a href="https://google.com">交易费率</a>&emsp;&emsp;|</Col>
                           <Col span={3}><a href="https://google.com">付款方式</a>&emsp;&emsp;|</Col>
                           <Col span={3}><a href="https://google.com">联系经纪人</a>&emsp;&emsp;|</Col>
                           <Col span={3}><a href="https://google.com">帮助中心</a>&emsp;&emsp;</Col>
                       </Row>
                        <Row style={{height:"24px",lineHeight:"24px"}}>
                            <Col xxl={{span:16,offset:4}} xl={{span:18,offset:2}}  md={{span:24}}>工作时间：周一至周五 09:00-12:00 13:00-17:30 客服邮箱：mi@kmw.com</Col>
                        </Row>
                        <Row style={{height:"24px",lineHeight:"24px"}}>
                            <Col xxl={{span:16,offset:4}} xl={{span:18,offset:2}}  md={{span:24}}>投诉建议:qq:964000(逆风) qq:7665999(喃喃) 电话：0411-88255560 Copyright 2016-2018</Col>
                        </Row>
                        <Row style={{height:"24px",lineHeight:"24px"}}>
                            <Col xxl={{span:16,offset:4}} xl={{span:18,offset:2}}  md={{span:24}}>大连筋斗云科技有限公司 地址:辽宁省大连市甘井子区红星国际广场5栋314-315</Col>
                        </Row>
                        <Row style={{height:"24px",lineHeight:"24px",marginBottom:"30px"}}>
                            <Col xxl={{span:16,offset:4}} xl={{span:18,offset:2}}  md={{span:24}}>辽ICP备17009310号-5 增值电信业务经营许可证：辽B2-20190012 在线数据处理与交易许可证：辽B2-20190012</Col>
                        </Row>
                    </Col>
                </Row>
            </FooterDiv>
        )
    }
}
export default Footer