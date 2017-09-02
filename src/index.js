import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch,} from 'react-router-dom'
import BaseLayout from './components/BaseLayout'
import CreatePost from './components/CreatePost'
import ShowPost from './components/ShowPost'
import Home from './components/Home'
import PostList from './components/PostList'

ReactDOM.render(
	<Router>
		<BaseLayout>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path="/CreatePost" component={CreatePost}/>
				<Route path='/PostList' component={PostList} />
				<Route path="/ShowPost/:id" component={ShowPost}/>
			</Switch>
		</BaseLayout>
	</Router>


, document.getElementById('root'));
registerServiceWorker();
