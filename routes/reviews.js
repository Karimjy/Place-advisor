var express = require('express');
var router = express.Router();

var reviews = [
	{
		id: 1,
		name: 'McDo',
		placeType: 'Fastfood',
		stars: 3
	},
	{
		id: 2,
		name: 'KFC',
		placeType: 'Fastfood',
		stars: 3
	},
	{
		id: 3,
		name: 'Chinois',
		placeType: 'Fastfood',
		stars: 3
	}
];

/* GET reviews listing */
router.get('/', function(req, res, next) {
  res.render('reviews', { reviews: reviews });
});

/* GET a reviews listing */
router.get('/:id', function(req, res, next) {
  	
	reviews.forEach(function(review) 
	{ 
		if(req.param('id') == review.id){
			val=[review];
			res.status(200).send('OK');
  			res.render('review', { review: val });
  		}
	});

});

/* POST reviews */
router.post('/', function (req, res) {
  var newReview = {
  	id: reviews.length+1,
  	name: req.body.name,
  	placeType: req.body.placeType,
  	stars: req.body.stars
   };

   reviews.push(newReview);
   res.status(201).send('Created');
   res.send(reviews);
});

/* DELETE reviews */
router.delete('/:id', function (req, res) {
  reviews.forEach(function(review) 
	{ 
		if(req.param('id') == review.id){
			var index = reviews.indexOf(review);
			reviews.splice(index, 1);
			res.status(204).send('No content');
			res.send(reviews);
  		}
	});
  res.status(404).send('Not found');
});

/* PUT reviews */
router.put('/:id', function (req, res) {
  reviews.forEach(function(review) 
	{ 
		if(req.param('id') == review.id){

		  	review.name= req.body.name,
		  	review.placeType= req.body.placeType,
		  	review.stars= req.body.stars

		  	var index = reviews.indexOf(review);
		  	res.status(200).send('OK');

  		}
	});
  res.send(reviews);
});

module.exports = router;