Template.prizes.helpers({
	prizeList: function() {
		var parentId=Meteor.userId();
		var results=Prizes.find({$and: [{"parentId": parentId},
										{"status": "active"}]}).fetch();
		return results;
	}
});