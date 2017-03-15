import { Template } from 'meteor/templating';
import { Mongo } from 'meteor/mongo';
import { Accounts } from 'meteor/accounts-base';

import {schedule} from '../imports/schedule.js';
import './main.html';


Template.navigation.events({
	'click .logout': function(event){
		event.preventDefault();
		Meteor.logout();
		Router.go('login');
	},
	'click #loginClick':function(event){
		Meteor.loginWithGoogle(function(err){
			if(err)
				console.log("Error: "+err);
			else
				console.log("No Error: "+Meteor.userID);
		});
	}
});

Template.schedule.events({
	'click #add_event_btn': function(event){
		event.preventDefault();
		var name_of_event = $('#add_event_field').val();
		console.log(name_of_event)
		Meteor.call('createEvent',name_of_event);
		$('#add_event_field').val().text="";
		return false;
	}
});

Template.schedule.helpers({
	schedules: function(){
		return schedule.find();
	}
});


/* Routes for the configuration*/

Router.configure({
	layoutTemplate: 'main'
});

Router.route('/login',{
	name: 'login',
	template: 'login',
});

Router.route('/',{
	name: 'home',
	template: 'home',
});

Router.route('/about',{
	name: 'about',
	template: 'about',
});

Router.route('/schedule',{
	name: 'schedule',
	template: 'schedule',
});  
