Template.addResponsibility.helpers({
	kids: function() {
		var parentId=Meteor.userId();
		return Meteor.users.find({"profile.parentId": parentId}).fetch();
	}
});

Template.addResponsibility.events({
	"submit .form-add-resonsibility": function(event){
		var parentId=Meteor.userId();
		var responsibility = event.target.responsibility.value;
		var kidId=event.target.kid.options[event.target.kid.selectedIndex].value;
		var date = event.target.date.value;
		var points = event.target.points.value;
		var selectedBadgePosition=Session.get('selectedBadge');
		var badgeId=0;
		var badgeResults;

		if (selectedBadgePosition > 0) {
			badgeResults=Badges.find({id: selectedBadgePosition}, {fields: { _id: 1 }}).fetch();
			badgeId=badgeResults[0]._id;
		} else {
			badgeId=0;
		}
		Meteor.call('addResponsibility', parentId, responsibility, kidId, date, points, badgeId);
		Meteor.call('addCalendarItem', parentId, responsibility, kidId, date);

		Bert.alert("Responsibility added", "success", "growl-top-right");

		return false;
	},
	"click #badge-0": function() {
		Session.set({selectedBadge: 0});
		setCellBackground(0);
	},
	"click #badge-1": function() {
		Session.set({selectedBadge: 1});
		setCellBackground(1);
	},
	"click #badge-2": function() {
		Session.set({selectedBadge: 2});
		setCellBackground(2);
	},
	"click #badge-3": function() {
		Session.set({selectedBadge: 3});
		setCellBackground(3);
	},
	"click #badge-4": function() {
		Session.set({selectedBadge: 4});
		setCellBackground(4);
	},
	"click #badge-5": function() {
		Session.set({selectedBadge: 5});
		setCellBackground(5);
	},
	"click #badge-6": function() {
		Session.set({selectedBadge: 6});
		setCellBackground(6);
	},
	"click #badge-7": function() {
		Session.set({selectedBadge: 7});
		setCellBackground(7);
	}
});

Template.addResponsibility.rendered = function() {
	Session.set({selectedBadge: 0});
	setCellBackground(0);
}

function setCellBackground(cellNumber) {
	for(var n=0; n<8; n++) {
		$("#badge-"+n).removeClass('cellSelected');
	}
	$("#badge-"+cellNumber).addClass('cellSelected');
}