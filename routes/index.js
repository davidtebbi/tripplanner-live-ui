var router = require('express').Router();
var async = require('async');

var models = require('../models');

router.get('/', function (req, res, next) {
	async.parallel({
		all_hotels: function (callback) {
			models.Hotel.find({}).exec(function (err, hotels) {
				callback(null, hotels);
			});
		},
		all_restaurants: function (callback) {
			models.Restaurant.find({}).exec(function (err, restaurants) {
				callback(null, restaurants);
			});
		},
		all_things_to_do: function (callback) {
			models.ThingToDo.find({}).exec(function (err, thingsToDo) {
				callback(null, thingsToDo);
			});
		}
	}, function (err, results) { 
		res.render('index', results);
	});
});


// router.get('/', function (req, res, next) {
// 	models.Hotel.find({}).exec(function (err, hotels) {
// 		models.Restaurant.find({}).exec(function (err, restaurants) {
// 			models.ThingToDo.find({}).exec(function (err, thingsToDo) {
// 				res.render('index', {
// 					all_hotels: hotels,
// 					all_restaurants: restaurants,
// 					all_things_to_do: thingsToDo
// 				});
// 			});
// 		});
// 	});
// });

module.exports = router;