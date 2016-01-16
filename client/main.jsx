import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, Link } from 'react-router';
import {history} from 'history';

import App from './components/App.jsx'
import Home from './components/Home.jsx'
import Login from './components/auth/Login.jsx'
import PostsList from './components/posts/PostsList.jsx'
import Post from './components/posts/Post.jsx'
import _404 from './components/_404.jsx'

// make posts collection subset (as defined in the server Publish call) available to the client
postsSubscription = Meteor.subscribe('posts', null, null);

Meteor.startup(() => {

	ReactDOM.render(
		<Router history={history}>
			<Route path="/login" component={Login} />
			<Route path="/" component={App}>
				<IndexRoute component={Home} />
				<Route path="posts" component={PostsList} />
				<Route path="post/:id" component={Post} />
				<Route path="*" component={_404} />
			</Route>
		</Router>, 
		document.getElementById('main')
	);
	
});