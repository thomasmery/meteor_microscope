const { Link } = ReactRouter;

export default Post = React.createClass({

	mixins: [ReactMeteorData],

	getMeteorData () {

		var data = {};

		if(this.props.params) {
			data.post = Posts.findOne(this.props.params.id);
		}

		return data;

	},

	propTypes: {

		data: React.PropTypes.object

	},

	domain: function(data) {
	    var a = document.createElement('a');
	    a.href = data.url;
	    return a.hostname;
	},

	render () {

		var data = this.props.data? this.props.data : this.data;
		console.log(this.props);
		// when we access Post with a direct request (not navigating through the app)
		// data has not been loaded yet
		// so we need to check if it's there
		// Component will re-render when data has arrived
		if(!data.post)
			return <p>Loading...</p>;

		var { _id, url, title } = data.post;
		var domain = this.domain(data);

		return ( 

			<div className="post">
			    <div className="post-content">
			      <h3><a href={url}>{title}</a><span>{domain}</span></h3>
			    </div>
			    <div>
			    	<Link to={`/post/${_id}`} className="discuss btn">Discuss</Link>
			    </div>
			 </div>

		);

	}

})