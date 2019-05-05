import React from 'react'
import { Table, Row, Col } from 'antd'
import loadable from 'react-loadable'
import styled from 'styled-components'
import DocumentTitle from 'react-document-title'
import SearchInput from "../componets/SearchInput"
const TheadWraper = styled.div`
  thead{
    border-top: 2px solid #1890FF;
  }
  table{
  margin: 22px 0 0 0;
  }
`;
const Mi = loadable({
    loader: () => { return import("../componets/Mi") },
    loading() {
        return <div>load</div>
    }
});
class Trade extends React.PureComponent {
    public state: any;
    constructor(props: any) {
        super(props);
        this.state = {
            data: [
                { key: 1, name: "b80.com", type: "3杂", price: "议价", agent: "叮当   QQ:79472393", time: "2019-04-29 17:12", detail: "详情" },
                { key: 2, name: "b80.com", type: "3杂", price: "议价", agent: "叮当   QQ:79472393", time: "2019-04-29 17:12", detail: "详情" },
                { key: 3, name: "b80.com", type: "3杂", price: "议价", agent: "叮当   QQ:79472393", time: "2019-04-29 17:12", detail: "详情" },
                { key: 4, name: "b80.com", type: "3杂", price: "议价", agent: "叮当   QQ:79472393", time: "2019-04-29 17:12", detail: "详情" },
                { key: 5, name: "b80.com", type: "3杂", price: "议价", agent: "叮当   QQ:79472393", time: "2019-04-29 17:12", detail: "详情" },
                { key: 6, name: "b80.com", type: "3杂", price: "议价", agent: "叮当   QQ:79472393", time: "2019-04-29 17:12", detail: "详情" },
                { key: 7, name: "b80.com", type: "3杂", price: "议价", agent: "叮当   QQ:79472393", time: "2019-04-29 17:12", detail: "详情" },
                { key: 8, name: "b80.com", type: "3杂", price: "议价", agent: "叮当   QQ:79472393", time: "2019-04-29 17:12", detail: "详情" },
                { key: 9, name: "b80.com", type: "3杂", price: "议价", agent: "叮当   QQ:79472393", time: "2019-04-29 17:12", detail: "详情" },
                { key: 10, name: "b80.com", type: "3杂", price: "议价", agent: "叮当   QQ:79472393", time: "2019-04-29 17:12", detail: "详情" },
                { key: 11, name: "b80.com", type: "3杂", price: "议价", agent: "叮当   QQ:79472393", time: "2019-04-29 17:12", detail: "详情" },
                { key: 12, name: "b80.com", type: "3杂", price: "议价", agent: "叮当   QQ:79472393", time: "2019-04-29 17:12", detail: "详情" },
                { key: 13, name: "b80.com", type: "3杂", price: "议价", agent: "叮当   QQ:79472393", time: "2019-04-29 17:12", detail: "详情" },
                { key: 14, name: "b80.com", type: "3杂", price: "议价", agent: "叮当   QQ:79472393", time: "2019-04-29 17:12", detail: "详情" },
                { key: 15, name: "b80.com", type: "3杂", price: "议价", agent: "叮当   QQ:79472393", time: "2019-04-29 17:12", detail: "详情" },
                { key: 16, name: "b80.com", type: "3杂", price: "议价", agent: "叮当   QQ:79472393", time: "2019-04-29 17:12", detail: "详情" },
                { key: 17, name: "b80.com", type: "3杂", price: "议价", agent: "叮当   QQ:79472393", time: "2019-04-29 17:12", detail: "详情" },
            ],
            column: [
                { title: "域名", dataIndex: 'name', key: "name" },
                { title: "类型", dataIndex: "type", key: "type" },
                { title: "价格", dataIndex: "price", key: 'price' },
                { title: "经纪人", dataIndex: "agent", key: "agent" },
                { title: "出售时间", dataIndex: "time", key: "time" },
                { title: "详情", dataIndex: "detail", key: "detail" },
            ]
        }
    }
    componentWillMount(){
        //ajx
    }
    render() {
        const { data, column } = this.state;
        //定义分页配置
        const pageSize = {
            defaultPageSize:20,
            total:100,
            defaultCurrent:1,
            hideOnSinglePage:true,//只有一页的时候隐藏分页器
        };
        return (
            <DocumentTitle title={"域名交易"}>
                <Mi>
                    <Row>
                        <Col xxl={{span:16,offset:4}} xl={{span:22}} >
                            <SearchInput/>
                            <TheadWraper>
                                <Table dataSource={data} columns={column} size={"middle"} pagination={pageSize}/>
                            </TheadWraper>
                        </Col>
                    </Row>

                </Mi>
            </DocumentTitle>

        )
    }
}
export default Trade