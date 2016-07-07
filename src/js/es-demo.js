"use strict";

var odds = evens.map(function (v) {
  return v + 1;
});
var nums = evens.map(function (v, i) {
  return v + i;
});
var even = evens.map(function (v) {
  return v + 2;
});