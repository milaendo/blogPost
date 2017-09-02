import React, { Component } from 'react'

class CreatePost extends Component {
	state={
		name:'',
		title:'',
		blog: ''
	}

	handleChange = (e) => {
		this.setState ({
			[e.target.name]:e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.setState({
			[e.target.name]:e.target.value
		})
		let listitem =JSON.stringify(this.state)

		fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/',{
			method:'POST',
			body: listitem,
			headers:{
				'Accept': 'application/json',
				'Content-Type':'application/json'
			}
		})
		.then(response => {
			console.log(response, "yay")
			return response.json()

		}).then(rs => {
			console.log(rs, 'json')
			this.props.history.push('/ShowPost/' + rs._id)
		}).catch(err => {
		    console.log(err, "boo!")
		})
		
		this.setState({name:'', title: '', blog: ''})
	}


	render() {
		return (
			<div className='postWrap'>
			<form onSubmit={this.handleSubmit}>
				<label>Author's Name</label><br/>
				<input value={this.state.name}onChange={this.handleChange} name='name' type='text' placeholder='Enter name or Email'/><br/>
				<label>Title</label><br/>
				<input value={this.state.title}onChange={this.handleChange} name='title' type='text' placeholder='Title'/><br/>
				<label>Write your blog...</label><br/>
				<textarea value={this.state.blog}onChange={this.handleChange} name='blog'rows='4' cols='5'/>
				<button type='submit'>Submit</button>
			</form>
			</div>
		)
	}
}

export default CreatePost