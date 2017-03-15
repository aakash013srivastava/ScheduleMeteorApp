import { Meteor } from 'meteor/meteor';
import {schedule} from '../imports/schedule.js';


/* Define the methods for Meteor  */

Meteor.methods({
	'createEvent': function(event_name){
		schedule.insert({
			name: event_name,
			createdBy: this.userId,
		});
		console.log(schedule.findOne({createdBy:this.userId}));
	},
});


Meteor.startup(() => {
  // code to run on server at startup
  
});
