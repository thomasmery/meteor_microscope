import React from "react";
import ReactRouter from 'react-router';

const { Link } = ReactRouter;

export default Logout = React.createClass({

	onClickHandler() {

		Meteor.logout();

	},


	render() {
		return (
			<span><a href="#" onClick={this.onClickHandler}>Logout</a></span>
		);
	}

});
