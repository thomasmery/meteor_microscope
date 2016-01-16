import React from "react";
import Paper from 'material-ui/lib/paper';

export default PostsList = React.createClass({

	mixins: [ReactMeteorData],
	propTypes: {

		posts: React.PropTypes.array

	},

	getMeteorData () {

		return {
			posts: Posts.find().fetch()
		};

	},

	render () {	

		var items = this.data.posts.map((item) => { return <Post key={item._id} data={{ post: item }} /> });

		return (
			<div>
				<Paper>
					<div className="posts page">
						{items}
					</div>
					<div className="content">
						{this.props.children}
					</div>
				</Paper>
			</div>
		)

	}

});