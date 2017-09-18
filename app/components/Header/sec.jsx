import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link} from "react-router";



export default class Sec extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    };



    render() {
        //console.log(this);
        return (
            <ul  className="Sec" >
                <li title="home"><Link to="/">首页</Link></li>
                <li title="shangyi"><Link to="/search/:shangyi">上衣</Link></li>
                <li title="kuzi"><Link to="/search/:kuzi">裤子</Link></li>
                <li title="nvxie"><Link to="/search/:nvxie">女鞋</Link></li>
                <li title="baobao"><Link to="/search/:baobao">包包</Link></li>
                <li title="peishi"><Link to="/search/:peishi">配饰</Link></li>
                <li title="meizhuang"><Link to="/search/:meizhuang">美妆</Link></li>
                <li title="nanyou"><Link to="/search/:nanyou">男友</Link></li>
                <li title="tongzhuang"><Link to="/search/:tongzhuang">童装</Link></li>
                <li title="jiaju"><Link to="/search/:jiaju">家居</Link></li>

            </ul>

        );

    };



}