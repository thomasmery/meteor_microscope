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

		var items = this.data.posts.map((item) => { return <Post data={{ post: item }} /> });

		return (
			<div>
				<div className="posts page">
					{items}
				</div>
				<div className="content">
					{this.props.children}
				</div>
			</div>
		)

	}

});