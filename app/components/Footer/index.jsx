import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Navbar, Nav,NavItem,Col,Row} from "react-bootstrap";


export default class Footer extends React.Component {


    render() {


        return (
            <div>
                <Col md={6} >
                    <Row className="show-grid">
                        <Col xs={6} md={1}>
                        </Col>
                        <Col xs={6} md={3}>
                            <h2>买家帮助</h2>
                            <p><a href="">新手指南</a></p>
                            <p><a href="">服务保障</a></p>
                            <p><a href="">常见问题</a></p>
                            <p><a href="">风险监测</a></p>
                        </Col>
                        <Col xs={6} md={3}>
                            <h2>商家帮助</h2>
                            <p><a href="">供货商招募</a></p>
                            <p><a href="">商家后台</a></p>

                        </Col>
                        <Col xs={6} md={3}>
                            <h2>关于我们</h2>
                            <p><a href="">关于美丽说</a></p>
                            <p><a href="">联系我们</a></p>

                        </Col>

                    </Row>
                </Col>
                <Col md={6} >
                    <Col sm={6} md={2}></Col>

                    <Col sm={6} md={3}>二维码下载</Col>
                    <Col sm={6} md={2}></Col>

                    <Col sm={6} md={3}>二维码关注</Col>

                </Col>
            </div>

        );
    };

}