import React from 'react'
import styled from 'styled-components'
import {Checkbox, Input, Select,Row,Col,InputNumber,Cascader,Button  } from 'antd'


const FormGroup = styled.div`
height: 203px;
border-top: 2px solid #057ADE;
background-color: #fff;
margin-top: 22px;
padding: 14px 20px;
`;
const stylediv: any = {
    textAlign: "left",
    marginTop:"14px"
};
const options = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [{
            value: 'xihu',
            label: 'West Lake',
        }],
    }],
}, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
        }],
    }],
}];
class SearchInput extends React.PureComponent {
    public state: any;

    constructor(props: any) {
        super(props);
        this.state = {}
    }

    render() {
        const Option = Select.Option;

        return (
            <FormGroup>
                <Row style={stylediv}>
                    <Col span={8} offset={1}>
                        域名:&nbsp;
                        <Input placeholder={"包含关键字"} style={{width: "100px"}}/>
                        &emsp;开头:&nbsp;
                        <Checkbox value={"startwith"}/>
                        结尾:
                        <Checkbox value={"endwith"}/>
                       简介:
                        <Checkbox value={"Detail"}/>
                    </Col>

                    <Col span={8}>
                        类型:&emsp;
                        <Select style={{width: "100px"}}>
                            <Option value={"mprice"}>一口价</Option>
                            <Option value={"nge"}>议价</Option>
                        </Select>
                        &emsp;排序:&emsp;
                        <Select style={{width: "100px"}}>
                            <Option value={"time"}>时间</Option>
                            <Option value={"currentPrice"}>当前价格</Option>
                        </Select>
                    </Col>
                    <Col span={6} >
                        价格:
                        <InputNumber min={1}placeholder={"￥"}name={"minPrice"}style={{width:"100px"}}/>&nbsp;-&nbsp; <InputNumber min={1}placeholder={"￥"}name={"maxPrice"}style={{width:"100px"}}/>

                    </Col>
                                    </Row>

                <Row style={stylediv}>
                    <Col span={8}offset={1}>
                        排除:&nbsp;
                        <Input placeholder={"包含关键字"} style={{width: "100px"}}/>
                        &emsp;开头:&nbsp;
                        <Checkbox value={"startwith"}/>
                        结尾:
                        <Checkbox value={"endwith"}/>
                    </Col>

                    <Col span={8}>
                        类别:&emsp;
                        <Cascader style={{width: "100px"}}defaultValue={['zhejiang', 'hangzhou', 'xihu']} options={options}/>
                        &emsp;后缀:&emsp;
                        <Select style={{width: "100px"}}>
                            <Option value={".com"}>.com</Option>
                            <Option value={".net"}>.net</Option>
                            <Option value={".cn"}>.cn</Option>
                            <Option value={".com.cn"}>.com.cn</Option>
                            <Option value={".cc"}>.cc</Option>
                            <Option value={".org"}>.org</Option>
                            <Option value={".vip"}>.vip</Option>
                        </Select>
                    </Col>
                    <Col span={6} >
                        长度:
                        <InputNumber min={1}placeholder={"￥"}name={"minPrice"}style={{width:"100px"}}/>&nbsp;-&nbsp; <InputNumber min={1}placeholder={"￥"}name={"maxPrice"}style={{width:"100px"}}/>

                    </Col>
                </Row>
                <Row style={{marginTop: "20px"}}>
                    <Col span={8} offset={8}>
                        <Button type={"primary"}>提交</Button>&emsp;&emsp;<Button>重置</Button>
                    </Col>
                </Row>
            </FormGroup>
        )
    }
}

export default SearchInput