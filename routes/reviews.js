var express = require('express');
var router = express.Router();

var reviews = {
	name: 'McDo',
	placeType: 'Fastfood',
	stars: 3
};

/* GET reviews listing */
router.get('/:id', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST reviews */
router.post('/:id', function (req, res) {
  res.send('POST request to the homepage')
});

/* DELETE reviews */
router.delete('/:id', function (req, res) {
  res.send('POST request to the homepage')
});