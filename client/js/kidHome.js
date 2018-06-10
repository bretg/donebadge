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
	},
	kidPrizeList: function() {
		var myName=Meteor.user().username
		var myPoints=Meteor.user().profile.points;
		var results=Prizes.find({$or: [{kidName: ""}, {kidName: myName}]}).fetch();
		var percentDone=0;
		// calculate percent done
		for (var n=0; n< results.length; n++) {
			percentDone=0;
			if (myPoints > 0) {
				var prizePoints=results[n].points;
				if (myPoints > prizePoints) {
					percentDone=100;
				} else {
					percentDone=Math.round((myPoints/prizePoints)*100);
				}
			}
			results[n].percentDone=percentDone;
		}
		return results;
	},
});