import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Form, FormGroup, Col, ControlLabel, FormControl, Button} from 'react-bootstrap'
import {hashHistory} from 'react-router'

export default class Pay extends React.Component {
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate()

    }

    submitHandler(){
        alert("假装购买成功");
        hashHistory.push('/');
    }
    render(){
        return(
            <Form horizontal onSubmit={this.submitHandler.bind(this)}>
                <FormGroup controlId="formHorizontalAddress">
                    <Col componentClass={ControlLabel} sm={2}>
                        地址
                    </Col>
                    <Col sm={10}>
                        <FormControl type="text" placeholder="请输入地址.." />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalName">
                    <Col componentClass={ControlLabel} sm={2}>
                        姓名
                    </Col>
                    <Col sm={10}>
                        <FormControl type="text" placeholder="请输入姓名.." />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPhone">
                    <Col componentClass={ControlLabel} sm={2}>
                        电话
                    </Col>
                    <Col sm={10}>
                        <FormControl type="text" placeholder="请输入电话.." />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button type="submit" >
                            确认支付
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
}


