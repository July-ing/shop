import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export default class Input extends React.Component{
	constructor(props, context){
		super(props, context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			valuee : ''
		}
	};

	render(){
		return(
			<div>
				<input
					style = {{width:'100%',height:'50px',fontSize:'24px',lineHeight:'50px'}}
					onChange = {this.changeHandler.bind(this)}
					value = {this.state.value}
					onKeyUp = {this.keyUpHandler.bind(this)}
				/>

			</div>

		);
	};

	changeHandler = (e) => {
		this.setState({value : e.target.value});
	};

	keyUpHandler = (e) => {
		const value = this.state.value;
		if(e.keyCode === 13 && value.trim()){
			this.props.addDate(value);
			this.setState({value : ''});
			e.target.value = '';
		}

	};
}