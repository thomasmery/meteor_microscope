export default Post = React.createClass({

	propTypes: {

		data: React.PropTypes.object

	},

	render () {

		var { url, domain, title } = this.props.data;

		return ( 

			<div className="post">
			    <div className="post-content">
			      <h3><a href={url}>{title}</a><span>{domain}</span></h3>
			    </div>
			 </div>

		);

	}

})