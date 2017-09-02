import React, { Component } from 'react'

class ShowPost extends Component {

	render () {
		return (
			<div>
			<h1>ShowPost</h1>
			{this.props.match.params.id}
			</div>
		)
	}
}

export default ShowPost

//this is where I will display the blog post I just created