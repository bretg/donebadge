Template.add.helpers({
	eventTypes: function() {
		return [ 'Birthday', 'Deadline', 'Class', 'Other' ]	}
});

Template.add.events({
        "submit .add-event": function() {
                var eventName = event.target.eventName.value;
                var startDate = event.target.startDate.value;
                var eventType= event.target.eventType.options[event.target.eventType.selectedIndex].value;


                 Meteor.call('addEvent', eventName, startDate, eventType);

                 // reset field values

                 Bert.alert("Your Event Was Posted!", "success", "growl-top-right");
                 
                 return false;
         }
 });