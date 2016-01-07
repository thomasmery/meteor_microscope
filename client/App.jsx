export default App = React.createClass({

	render () {	

		return (
			
			<div className="container">
				<header className="navbar navbar-default" role="navigation"> 
					<div className="navbar-header">
						<a className="navbar-brand" href="/">Microscope - React</a>
					</div>
				</header>
				<div id="main">
					{this.props.content}
				</div>
				<div id="footer">
					<Footer />
				</div>
			</div>

		)

	}

});