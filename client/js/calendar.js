import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Template.calendar.onCreated( () => {
  let template = Template.instance();
  template.subscribe( 'events' );
});

Template.calendar.onRendered( () => {
   $('#cal').fullCalendar({
  	   eventRender: function(event, eventElement) {
        // eventElement.find("div.fc-content").prepend("<img src='./star.png' width='12' height='12'>");
        //  eventElement.find("div.fc-content").append("<br/><img src='/star.png' class='cal-icon'>");
          // eventElement.find("div.fc-content").html(`
          //   <div onClick='handleEventClick(${event.start})'>
          //   <p class="cal-h4">${ event.title }</p>
          //   <p class="type-${ event.type }">${ event.type }</p>
          //   <br/><img src='/star.png' class='cal-icon'>
          //   </div>
          //   `);
          eventElement.find("div.fc-content").html(`
            <p class="cal-h4">${ event.title }</p>
            <p class="calEvent">${ event.kidName }
            `);

       },
       events( start, end, timezone, callback ) {
      		let data = Events.find().fetch().map( ( event ) => {
        		event.editable = !isPast( event.start );
        		return event;
      		});

      		if ( data ) {
        		callback( data );
      		}
    	},
      eventClick: function(calEvent, jsEvent, view) {

        Modal.show('exampleModal', calEvent);
        //alert('Event: ' + calEvent.title);
        // alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
        // alert('View: ' + view.name);

        // change the border color just for fun
        $(this).css('border-color', 'red');
      }
  	});

  Tracker.autorun( () => {
    Events.find().fetch();
    $( '#cal' ).fullCalendar( 'refetchEvents' );
  });

  var calendar = $('#cal').fullCalendar('getCalendar');

  calendar.on('dayClick', function(date, jsEvent, view) {
    alert('clicked on box' + date.format());
  });

// var handleEventClick = function(date) {
//   alert("clicked on event: "+date.format());
// }

  //  var events=[
  //    {
  //      title  : 'event1',
  //      start  : '2018-06-01'
  //    },
  //    {
  //      title  : 'event2',
  //      start  : '2018-06-05',
  //      end    : '2018-06-07'
  //    },
  //    {
  //      title  : 'event3',
  //      start  : '2018-06-09T12:30:00',
  //      allDay : false
  //    }
  // ];

  // $('#cal').fullCalendar( 'addEventSource', Events.find().fetch() );

});

Template.calendar.helpers({
});

Template.calendar.events({
});

let isPast = ( date ) => {
  let today = moment().format();
  return moment( today ).isAfter( date );
};

