import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

class BaseLayout extends Component {
	render () {
		return (
			<div className='mainWrap'>
				<div className="nav">
					<NavLink exact activeClassName='active' to="/">MyBlog</NavLink>
					<NavLink  activeClassName='active' to="/CreatePost">Create a Post</NavLink>
					<NavLink  activeClassName='active' to="/PostList">List all Posts</NavLink>
				</div>
				{this.props.children}
			</div>
		)
	}
}

export default BaseLayout