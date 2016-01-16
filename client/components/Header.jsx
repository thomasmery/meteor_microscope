import React from "react";

export default Header = React.createClass({

	propTypes: {

		user: React.PropTypes.object

	},

	displayUser () {

		if(this.props.user) {
			return (
				<div className="nav navbar navbar-right">{this.props.user.username} <Logout /></div>
			);
		}

	},

	render () {
		return (
			<header className="navbar navbar-default" role="navigation"> 
		      <div className="navbar-header">
		        <a className="navbar-brand" href="/">Microscope - React</a>
		      </div>
		      {this.displayUser()}
		    </header>
		);
	}
});