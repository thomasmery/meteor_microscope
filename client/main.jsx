// make posts collection subset (as defined in the server Publish call) available to the client
Meteor.subscribe('posts', null, null);

Meteor.startup(() => {
	
}); 