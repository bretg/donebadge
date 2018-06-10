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
                addPrize: function(parentId, name, kidId, points, category) {
                    var kidName;
                    if (kidId == "0") {
                        kidName="";
                    } else {
                     kidName=Meteor.users.findOne({_id: kidId}).username;
                    }
                    Prizes.insert({
                        parentId: parentId,
                        name: name,
                        kidId: kidId,
                        kidName: kidName,
                        points: points,
                        category: category,
                        status: "active"
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
                },
                "redeemPrize": function(userId, newPointTotal, prizeId) {
                    var prizeObj=Prizes.findOne({_id: prizeId});
                    Meteor.users.update({_id: userId}, {$set: {"profile.points": newPointTotal}});
                    if (prizeObj.category=="one-time") {
                        Prizes.update({_id_: prizeId},{$set: {status: "claimed"}});
                    }
                }
         });
});
