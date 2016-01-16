import React from "react";
import { ReactRouter, Link, History } from 'react-router';

import Header from './Header.jsx';	

export default App = React.createClass({

	mixins: [ReactMeteorData, History],

	getMeteorData () {

		return {
			user: Meteor.user(),
			isAuthenticated: Meteor.userId() !== null

		};

	},

	componentWillMount () {

		if (!this.data.isAuthenticated) {
	      this.history.pushState(null, '/login');
	    }

	},

	componentDidUpdate (prevProps, prevState) {
		// Navigate to a sign in page if the user isn't authenticated when data changes
		if (!this.data.isAuthenticated) {
		  this.history.pushState(null, '/login');
		}
	},

	render () {	

		return (
			<div>

				<Header user={this.data.user} />

				<h3>Container</h3>

				<nav>
					<ul>
						<li><Link to="/posts">Posts List</Link></li>
					</ul>
				</nav>

				<div className="content">
					{this.props.children}
				</div>

			</div>
		)

	}

});