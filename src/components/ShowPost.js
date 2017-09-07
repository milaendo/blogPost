import React, { Component } from 'react'

class ShowPost extends Component {
	state={
			title:'',
			name:'',
			blog:''
		}
	componentWillMount(){
		const id = this.props.match.params.id 
		fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/' + id)
		.then(response => {
			return response.json()})
		.then(resp => {
			console.log(resp)
			this.setState({
				title:resp.title,
				name:resp.name,
				blog:resp.blog
			})
		})
	}
 
	render () {
		return (
			<div>
			<h1>ShowPost</h1>
			<h3>Title:</h3>
			<p>{this.state.title}</p>
			<h3>Author:</h3>
			<p>{this.state.name}</p>
			<h3>Post:</h3>
			<p>{this.state.blog}</p>
			</div>
		)
	}
}

export default ShowPost

//this is where I will display the blog post I just created