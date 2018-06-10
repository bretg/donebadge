Template.parentHome.helpers({
	kids: function() {
		var parentId=Meteor.userId();
		return Meteor.users.find({"profile.parentId": parentId}).fetch();
	},
	respList: function() {
		var parentId=Meteor.userId();
		var results=Responsibilities.find({"parentId": parentId}).fetch();
		return results;
	}
});