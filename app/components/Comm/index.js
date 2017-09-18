import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Item from './Item'

import "./style.less"

export default class Comm extends React.Component {
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate()
    }

    render(){
        const data=this.props.data;
        return(
            <ul className="container-comm">
                {data.map((item,index) => {
                    return <Item key={index} data={item}/>
                })}
            </ul>
        )
    }
}

