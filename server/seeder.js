Meteor.startup(function() {
  if (Meteor.users.find().count() === 0) {
    // create a date string
    var year = new Date().getFullYear();
    var month = new Date().getMonth() + 1;
    var day = new Date().getDate();
    var date = (month + "/" + day + "/" + year).toString();

    	// Super User
      Accounts.createUser({
        username: 'Parent User',
        email: 'parent_account@parent.com',
        password: 'password',
        profile: {
          	type: 'parent'
        }
      });

      var parentId = Meteor.users.findOne({username: 'Parent User'})._id;

      Accounts.createUser({
        username: 'Sally',
        email: 'sally_smith@kid.com',
        password: '111111',
        profile: {
            type: 'kid',
            parentId: parentId,
            points: 500
        }
      });
      var sallyId = Meteor.users.findOne({username: 'Sally'})._id;

      Accounts.createUser({
        username: 'John',
        email: 'john_smith@kid.com',
        password: '222222',
        profile: {
            type: 'kid',
            parentId: parentId,
            points: 550
        }
      });
      var johnId = Meteor.users.findOne({username: 'John'})._id;

      Badges.insert({
        id: 1,
        name: "laundry",
        filename: "badges/laundry.png"
      });
      Badges.insert({
        id: 2,
        name: "reading",
        filename: "badges/reading.png"
      });

      Badges.insert({id: 3, name: "homework_makebadges-1528581626",
        "filename": "badges/homework_makebadges-1528581626.png"});

      Badges.insert({id: 4, name: "homework_makebadges-1528581681",
        "filename": "badges/homework_makebadges-1528581681.png"});

      Badges.insert({id: 5, name: "homework_makebadges-1528581758",
        "filename": "badges/homework_makebadges-1528581758.png"});

      Badges.insert({id: 6, name: "homework_makebadges-1528581804",
        "filename": "badges/homework_makebadges-1528581804.png"});

      Badges.insert({id: 7, name: "homework_makebadges-1528581838",
        "filename": "badges/homework_makebadges-1528581838.png"});

      Responsibilities.insert({
        parentId: parentId,
        name: "15 mins piano",
        kidId: sallyId,
        kidName: "Sally",
        date: "2018-06-12",
        points: 50,
        badgeId: 0
      });

      var respId = Responsibilities.findOne({name: '15 mins piano'})._id;

      Events.insert({
        parentId: parentId,
        title: "15 mins piano",
        start: "2018-06-12",
        end: "2018-06-12",
        kidId: sallyId,
        kidName: "Sally",
        respId: respId
      });

      Responsibilities.insert({
        parentId: parentId,
        name: "study for math test",
        kidId: johnId,
        kidName: "John",
        date: "2018-06-12",
        points: 100,
        badgeId: 0
      });

      var respId = Responsibilities.findOne({name: 'study for math test'})._id;
      Events.insert({
        parentId: parentId,
        title: "study for math test",
        start: "2018-06-12",
        end: "2018-06-12",
        kidId: johnId,
        kidName: "John",
        respId: respId
      });


      Responsibilities.insert({
        parentId: parentId,
        name: "clean room",
        kidId: sallyId,
        kidName: "Sally",
        date: "2018-06-30",
        points: 75,
        badgeId: 0
      });
      var respId = Responsibilities.findOne({name: 'clean room'})._id;
      Events.insert({
        parentId: parentId,
        title: "clean room",
        start: "2018-06-30",
        end: "2018-06-30",
        kidId: sallyId,
        kidName: "Sally",
        respId: respId
      });



      Prizes.insert({
        parentId: parentId,
        name: "Trip to Joe's pizza for a slice",
        kidId: 0,
        kidName: "",
        points: 300,
        category: "ongoing",
        status: "active"
      });

      Prizes.insert({
        parentId: parentId,
        name: "Don't have to attend sister's recital",
        kidId: johnId,
        kidName: "John",
        points: 500,
        category: "one-time",
        status: "active"
      });

      Prizes.insert({
        parentId: parentId,
        name: "Character lunchbox",
        kidId: sallyId,
        kidName: "Sally",
        points: 1000,
        category: "one-time",
        status: "active"
      });

      console.log("Initial User Created");
      console.log("Event Created");

      // console.log("  ");
      // console.log("User Database Seeded");
      // console.log("Events Database Seeded");
  }

});
