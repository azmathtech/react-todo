var moment = require('moment');

console.log(moment().format());

// January 1st 1970 @ 12:00am -> 0
// January 1st 1970 @ 12:01am -> 60 (there is 60 seconds that has past)
// -60 would represent 11:59pm in the above example
// This computes the number of seconds that have past since January 1st 1970 @ 12:00am
// It will compute either a positive or negitive number starting at that point in time

var now = moment();

console.log('Current timestamp', now.unix());  //this will output the number of seconds since 1970

var timestamp = 1500404519;

var currentMoment = moment.unix(timestamp);

// 2017-07-18T12:01:59-07:00
console.log('currentMoment', currentMoment.format());

// Jul 18, 17 @ 12:01 pm
console.log('currentMoment', currentMoment.format('MMM D, YY @ h:mm a'));

// July 18th, 2017 @ 12:01 PM
console.log('currentMoment', currentMoment.format('MMMM Do, YYYY @ h:mm A'));
