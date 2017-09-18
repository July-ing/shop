import React from 'react'

export default class Input extends React.Component{
	render(){
		return(
			<div>
				<p>header</p>
				{this.props.children}
				<p>footer</p>
			</div>
		)
	}
}