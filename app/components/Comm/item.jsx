import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Glyphicon} from 'react-bootstrap'
import {Link} from 'react-router'

import "./style.less"

export default class Item extends React.Component {
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate()

    }

    render(){
        const data = this.props.data;
        const url = "/detail/"+data.id;
        return(


            <li>
                <Link to={url}>
                    <img src={data.fengmian} alt={data.mingcheng}/>
                    <div>
                        <em>￥{data.jiage}</em>
                        <span><Glyphicon glyph="star" />{data.xiaoliang}{' '}</span>
                        <p>{data.mingcheng}</p>
                    </div>
                </Link>

            </li>
        )
    }
}

