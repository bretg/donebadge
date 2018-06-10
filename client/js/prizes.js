Template.prizes.helpers({
	prizeList: function() {
		var parentId=Meteor.userId();
		var results=Prizes.find({"parentId": parentId}).fetch();
		return results;
	}
});