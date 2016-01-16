Meteor.publish('posts', function(title, url) {
	
	// define default values
	title = title?title:'.*';
	url = url?url:'.*';
	
	return Posts.find({title: {$regex: title}, url: {$regex: url}});

});