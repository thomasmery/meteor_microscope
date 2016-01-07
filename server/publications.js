Meteor.publish('posts', function(title, url) {

	console.log('Publishing posts');

	// define default values
	title = title?title:'.*';
	url = url?url:'.*';
	
	return Posts.find({title: {$regex: title}, url: {$regex: url}});

});