export default Login = React.createClass({

	propTypes: {
	},

	getInitialState() {

		return {

			message:  ''

		}

	},

	onClickHandler (e) {

		e.preventDefault();
		
		var user_str = this.refs.user.value;
		var password_str = this.refs.password.value;
		console.log(e.currentTarget);

		var button = e.currentTarget;
		switch(button.name) {
			case 'submitLogin':
				// try to Login with provided credentials
				return Meteor.loginWithPassword(user_str, password_str, (error) => {

					if(error) {
						console.log(error);
						this.setState({message:error.message});
					}
					else {
						window.location = '/';
					}

				});
				break;

			case 'submitCreate': 
				// create User and Login
				Accounts.createUser({username: user_str, password: password_str }, (error) => {

					if(error) {
						console.log(error);
						this.setState({message:error.message});
					}
					else {

						Meteor.loginWithPassword(user_str, password_str, (error) => { 

							if(error) {
								console.log(error);
								this.setState({message:error.message});
							}
							else {
								window.location = '/';
							}

						});

					}


				});
				break;
		}


	},

	displayMessage() {

		return this.state.message? <div className="error">{this.state.message}</div> : '';
	
	},

	render () {

		return (
			<div className="login">

				<form>

					<div className="field-group">
						<input type="text" name="user" ref="user" />
					</div>

					<div className="field-group">
						<input type="password" name="password" ref="password" />
					</div>

					<div className="field-group">
						<input type="submit" value="Login" name="submitLogin" ref="submitLogin" onClick={this.onClickHandler}/>
						<input type="submit" value="Create" name="submitCreate" ref="submitCreate" onClick={this.onClickHandler}/>
					</div>
					
					{this.displayMessage()}

				</form>

			</div>
		);
	}

});
