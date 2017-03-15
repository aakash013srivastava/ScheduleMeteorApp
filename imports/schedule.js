import {Mongo} from 'meteor/mongo';

/* Create the schedule collection for storing the list of schedules  */

export const schedule = new Mongo.Collection('schedule');