Template.kidHome.helpers({
	kidName: function() {
		if (Meteor.user()) {
			return Meteor.user().username;
		}
		return "";
	},
	kidPoints: function() {
		var points=Meteor.user().profile.points
		return points;
	},
	kidRespList: function() {;
		var myName=Meteor.user().username
		// FIXME: responsibilities always have a kid
		var results=Responsibilities.find({$or: [{kidName: ""}, {kidName: myName}]}).fetch();
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
	}
});