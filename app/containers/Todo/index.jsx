import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
// Immutable.js   层次结构特别深 如a.b.c.d.e.x = ddd;不deep不用

import Input from '../../components/Input/input';
import List from '../../components/List/list';

export default class Todo extends React.Component{
	constructor(props, context){
		super(props, context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			list : []
		}
	};

	render(){
		return(
			<div>
				<Input addDate={this.addDate.bind(this)} />
				<List list={this.state.list} deleDate={this.deleDate.bind(this)}></List>
			</div>
		);
	};

	addDate = (value) => {
		const id = this.state.list.length;
		this.setState({
			list: this.state.list.concat({
				id: id,
				text: value
			})
		})

	};

	deleDate = (id) => {
		let data = this.state.list;
		this.setState({
			list: data.filter(item => {
				if(item.id !== id)
					return item;
			})
		})
	};
}