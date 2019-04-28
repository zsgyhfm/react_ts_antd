import { Layout } from 'antd'
import Footermi from './Footermi'
import Headermi from './Headermi'
import React from 'react'

const { Header, Content, Footer } = Layout
class Mi extends React.Component {

    render() {
        const { children } = this.props
        return (
            <div>
                <Layout>
                    <Header className={"header"} style={{height:"197px",padding:0}}>
                        <Headermi />
                    </Header>
                    <Content className={"main"}style={{height:"197px",padding:0}}>
                    {children}
                    </Content>
                    <Footer className={"footer"}style={{height:"203px",padding:0,position:"absolute",bottom:0,left:0,right:0}}>
                        <Footermi />
                    </Footer>
                </Layout>
            </div>
        )
    }
}
export default Mi