import { Layout } from 'antd'
import Footermi from './Footermi'
import Headermi from './Headermi'
import React from 'react'

const { Header, Content, Footer } = Layout;
class Mi extends React.Component {

    render() {
        const { children } = this.props;
        return (
            <div>
                <Layout>
                    <Header className={"header"} style={{height:"197px",padding:0}}>
                        <Headermi />
                    </Header>
                    <Content className={"main"}style={{padding:"0 0 20px 0"}}>
                    {children}
                    </Content>
                    <Footer className={"footer"}style={{padding:0}}>
                        <Footermi />
                    </Footer>
                </Layout>
            </div>
        )
    }
}
export default Mi