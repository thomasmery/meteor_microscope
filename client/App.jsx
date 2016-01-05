export default App = React.createClass({

	propTypes: {

		posts: React.PropTypes.array

	},


	render () {	

		var items = this.props.posts.map((item) => { return <Post data={item} /> }); 
		return (
			<div className="posts page">
				{items}
			</div>
		)

	}

});