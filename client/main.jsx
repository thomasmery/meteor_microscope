// make posts collection subset (as defined in the server Publish call) available to the client
Meteor.subscribe('posts','post');

Meteor.startup(() => {
	ReactDOM.render(<App />,document.getElementById('main'))
}); 