Template.sidebar.rendered = function(){

}

Template.sidebar.events({
	"click .logout": function(event){
		Meteor.logout(function(err){
			if(err) {
				Bert.alert(err.reason, "danger", "growl-top-right");
			} else {
				Router.go('/');
				Bert.alert("you Are Now Logged Out", "success", "growl-top-right");
			}
		});
	},
});

Template.sidebar.helpers({
	isParent: function(){
		if (!Meteor.user()) {
			return false;
		}
		if (Meteor.user().profile.type == "parent") {
			return true;
		}
		return false;
	},
	isKid: function(){
		if (!Meteor.user()) {
			return false;
		}
		if (Meteor.user().profile.type == "kid") {
			return true;
		}
		return false;
	}
});