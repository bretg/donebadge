import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
          Meteor.methods({
                // Method for adding jokes
                addEvent: function(eventName, startDate, eventType) {
                                // var username = Meteor.user().username;
                                // var year = new Date().getFullYear();
                                // var month = new Date().getMonth() + 1;
                                // var day = new Date().getDate();
                                // var date = (month + "/" + day + "/" + year).toString();

                                Events.insert({
                                    title: eventName,
        							start: startDate,
        							end: startDate,
        							type: eventType});
                },
                addKidAccount: function(username, email, password, parentId) {
                    Accounts.createUser({
                        username: username,
                        email: email,
                        password: password,
                        profile: {
                            parentId: parentId,
                            type: "kid"
                        }
                    });
                },
                addResponsibility: function(parentId, name, kidId, date, points, badgeId) {
                    var kidName=Meteor.users.findOne({_id: kidId}).username;
                    Responsibilities.insert({
                        parentId: parentId,
                        name: name,
                        kidId: kidId,
                        kidName: kidName,
                        date: date,
                        points: points,
                        badgeId: badgeId
                    });
                },
                addCalendarItem: function(parentId, name, kidId, date) {
                    var kidName=Meteor.users.findOne({_id: kidId}).username;
                    Events.insert({
                        parentId: parentId,
                        title: name,
                        kidId: kidId,
                        kidName: kidName,
                        start: date,
                        end: date
                    });
                }
         });
});
