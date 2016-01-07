export default Post = React.createClass({

	propTypes: {

		data: React.PropTypes.object

	},

	domain: function() {
	    var a = document.createElement('a');
	    a.href = this.props.data.url;
	    return a.hostname;
	},

	render () {

		var { url, title } = this.props.data;
		var domain = this.domain();

		return ( 

			<div className="post">
			    <div className="post-content">
			      <h3><a href={url}>{title}</a><span>{domain}</span></h3>
			    </div>
			 </div>

		);

	}

})