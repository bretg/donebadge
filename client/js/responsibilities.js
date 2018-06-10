Template.responsibilities.helpers({
	respList: function() {
		var parentId=Meteor.userId();
		var results=Responsibilities.find({"parentId": parentId}).fetch();
		// add path to badge file
		for (var n=0; n< results.length; n++) {
			var badgeId=results[n].badgeId;
			var badgePath;
			if (typeof badgeId === 'string') {
				badgePath=Badges.findOne({_id: badgeId}).filename;
				results[n].badgeImg=badgePath;
			}
		}
		return results;
	},
	badge: function() {

	}
});