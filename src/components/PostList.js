import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class PostList extends Component {
	state = {
		
		posts:[]
		
	}
	componentWillMount(){
		fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/')
		.then(response => 
			{return response.json()})
		.then(data =>{
		    console.log (data)
		    this.setState({
		      posts: data
		    })
		  })
	}
	render () {
		return (
			<div className='postWrap'>
			<h1>Blog Titles</h1>
			{this.state.posts.map(function(post){
				return (
				<div key={post._id}>
				<Link to = {'/ShowPost/' + post._id}>
					<p>{post.title}</p>
				</Link>
				</div>

			)})}
		
			</div>
		)
	}
}

export default PostList

//this is where i will display all of the blogs as links to their own unqiue page