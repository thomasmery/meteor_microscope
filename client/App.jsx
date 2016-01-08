export default App = React.createClass({

	render () {	

		return (
			<div>

				<h3>Container</h3>

				<nav>
					<ul>
						<li><Link to="/list">Posts List</Link></li>
					</ul>
				</nav>

				<div className="content">
					{this.props.children}
				</div>

			</div>
		)

	}

});