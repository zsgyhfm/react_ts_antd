import React from 'react'
import styled from 'styled-components'
import {Row,Col} from 'antd'
const FooterDiv = styled.div`
    height:100%;
    background-color:red;
`;
class Footer extends React.Component{
    render(){
        return(
            <FooterDiv>
                <Row style={{height:"100%"}}>
                    <Col span={16} offset={4} style={{backgroundColor:"green",height:"100%"}}>
                    footer
                    </Col>
                </Row>
            </FooterDiv>
        )
    }
}
export default Footer