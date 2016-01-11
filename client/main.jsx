// make posts collection subset (as defined in the server Publish call) available to the client
postsSubscription = Meteor.subscribe('posts', null, null);

const { Router, Route, IndexRoute, Link } = ReactRouter;

 //Link = ReactRouter.Link;

// create history from rackt/history library : https://github.com/rackt/history
// the useQueries usage is a way to create a history that knows how to handle URL queries 
// https://github.com/rackt/history/blob/master/modules/useQueries.js#L26
const history = ReactRouter.history.useQueries(ReactRouter.history.createHistory)();

Meteor.startup(() => {

	ReactDOM.render(
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={Home} />
				<Route path="posts" component={PostsList} />
				<Route path="post/:id" component={Post} />
				<Route path="*" component={_404} />
			</Route>
		</Router>, 
		document.getElementById('main')
	);
	
});