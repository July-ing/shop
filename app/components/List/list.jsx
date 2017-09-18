import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export default class List extends React.Component{
	constructor(props, context){
		super(props, context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	};

	render(){
		const data = this.props.list;

		return(
			<ul style={{marginTop : '10px', fontSize:'20px',lineHeight:'30px'}}>
				{data.map((item, index) => {
					return <li key={index} onClick={this.clickHandler.bind(this, item.id)}>{item.text}</li>
				})}
			</ul>

		);
	};

	clickHandler = (id) => {
		this.props.deleDate(id);
	};

}