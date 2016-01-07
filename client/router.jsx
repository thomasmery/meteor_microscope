FlowRouter.route('/', {
	name: 'home',
	action(params) {
		ReactLayout.render(App , { content: <PostsList /> });
	}
}); 

FlowRouter.route('/post/:_id', {
	name: 'post',
	action(params) {
		ReactLayout.render(App , { content: <Post data={ Posts.findOne(params._id) } /> });
	}
}); 


/* HELPERS */
let pathFor = ( path, params ) => {
  let query = params && params.query ? FlowRouter._qs.parse( params.query ) : {};
  return FlowRouter.path( path, params, query );
};

let urlFor = ( path, params ) => {
  return Meteor.absoluteUrl( pathFor( path, params ) );
};

let currentRoute = ( route ) => {
  FlowRouter.watchPathChange();
  return FlowRouter.current().route.name === route ? 'active' : '';
};

FlowHelpers = {
  pathFor: pathFor,
  urlFor: urlFor,
  currentRoute: currentRoute
};
