'use strict';

module.exports = function (date) {
  return date.toLocaleTimeString('en-GB', {timeZone: 'Europe/London'}).substr(0, 5);
};
