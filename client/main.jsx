Meteor.startup(() => {
	ReactDOM.render(<App posts={Posts.find().fetch()}/>,document.getElementById('main'))
}); 