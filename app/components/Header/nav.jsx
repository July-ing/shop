import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Navbar, Nav,NavItem,NavDropdown,MenuItem} from "react-bootstrap";
import {Link} from "react-router";
import { logout } from "../../actions/AppActions";

export default class MyNav extends React.Component{
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    };

    render(){
        var storage = window.sessionStorage;
        const Login =
            <div>
                <Link to="/user/login">登录</Link>
                <Link to="/user/register">注册</Link>
            </div>
        const user =
            <Nav pullRight>
            <NavDropdown eventKey={8} title={storage.getItem('username')||''} id="help-nav-dropdown">
                <MenuItem eventKey={8.1} onClick={::this._logout}>登出</MenuItem>
            </NavDropdown>
            </Nav>

        return(

            <Navbar >
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">react-bootstrap</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavDropdown eventKey={3} title="我的收藏" id="collect-nav-dropdown">
                            <MenuItem eventKey={3.1}>收藏店铺</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.2}>收藏宝贝</MenuItem>
                        </NavDropdown>
                        <NavItem eventKey={4} href="#">我的购物车</NavItem>
                        <NavItem eventKey={5} href="#">我的订单</NavItem>
                        <NavDropdown eventKey={6} title="帮助中心" id="help-nav-dropdown">
                            <MenuItem eventKey={6.1}>卖家服务</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={6.2}>商家服务</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={6.3}>规则中心</MenuItem>
                        </NavDropdown>
                        <NavItem eventKey={7} href="#">商家后台</NavItem>
                    </Nav>

                    {storage.getItem('username') ? user : Login}


                </Navbar.Collapse>
            </Navbar>
        );
    };
    _logout() {
        this.props.dispatch(logout());
    }

}