import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Navbar, Nav,NavItem,Button,FormGroup,FormControl,Row,Col,ButtonGroup,Tabs,Tab} from "react-bootstrap";

export default class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            value: ''
        }
    };
    componentDidMount(){
        this.setState({value: this.props.keyword||this.props.category || ''})
    }
    handleChange(e) {
        this.setState({value: e.target.value});
    };
    onClickHandle(e){
        this.props.submitHandle(this.state.value);
    }
    render() {
        return (
            <div className="container">
                <Row className="show-grid ">
                    <Col xs={6} md={4}><a href="#" className="logo">logo</a></Col>
                    <Col xs={6} md={4}>
                        <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
                            <Tab eventKey={1} title="宝贝"></Tab>
                            <Tab eventKey={2} title="店铺"></Tab>

                        </Tabs>
                        <Navbar.Form pullLeft>
                            <FormGroup>
                                <FormControl type="text" placeholder={this.props.keyword||this.props.category} value={this.state.value}
                                    onChange={this.handleChange.bind(this)}
                                />
                            </FormGroup>
                            {' '}
                            <Button type="submit" onClick={this.onClickHandle.bind(this)}>Submit</Button>
                        </Navbar.Form>
                    </Col>
                    <Col xsHidden md={4}></Col>
                </Row>

            </div>
        );
    };

}