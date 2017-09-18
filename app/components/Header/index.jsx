import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Nav from './nav.jsx';
import Search from './search.jsx';
import Sec from './sec.jsx';

import './index.css'
export default class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    };

    render() {
        return (
            <div className="Header">
                <Search category = {this.props.category} keyword={this.props.keyword} submitHandle={this.props.submitHandle}/>
                <Sec />
            </div>
        );
    };

}