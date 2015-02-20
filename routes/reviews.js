var express = require('express');
var router = express.Router();
var Reviews = require('../database/Reviews');

/* GET reviews listing */
router.get('/', function(req, res, next) {
    Reviews.find({}, function(err, reviews) {
        if (err) {
            res.status(500).send({
                'error': err
            });
        } else {

            var accept = req.get('Accept');
            if (accept.indexOf("html")) {
                res.render('reviews', {
                    reviews: reviews
                });
            } else {
                res.send(reviews);
            }
        }
    });
});

/* GET a review listing */
router.get('/:id', function(req, res, next) {
    Reviews.findById(req.params.id, function(err, review) {
        if (err) {
            res.status(500).send({
                'error': err
            });

        } else {
            var accept = req.get('Accept');
            if (accept.indexOf("html")) {
                res.render('review', {
                    review: review
                });
            } else {
                res.send(review);
            }

        }
    });
});

/* POST reviews */
router.post('/', function(req, res) {
    var newReview = new Reviews({
        name: req.body.name,
        placeType: req.body.placeType,
        stars: req.body.stars
    });

    newReview.save(function(err) {
        if (err) return handleError(err);
    })
    res.send(newReview);

});

/* DELETE reviews */
router.delete('/:id', function(req, res) {
    Reviews.remove({
        _id: req.params.id
    }, function(err) {
        if (err) return handleError(err);
        res.status(204).send('No Content');
    });
});

/* PUT reviews */
router.put('/:id', function(req, res) {

    Reviews.findOne({
        _id: req.params.id
    }, function(err, doc) {
        console.log(doc._id);
        if (err) return handleError(err);

        doc.name = req.body.name,
            doc.placeType = req.body.placeType,
            doc.stars = req.body.stars

        doc.save(function(err) {
            if (err) return handleError(err);
        })

        res.status(200).send('OK');
    })
});

/* GET A TOP REVIEWS */

router.get('/top/places', function(req, res, next) {
    Reviews.find().where("stars", 3).limit(3).exec(
        function(err, reviews) {
            if (err) {
                res.status(500).send({
                    'error': err
                });
            } else {

                var accept = req.get('Accept');
                if (accept.indexOf("html")) {
                    res.render('topPlaces', {
                        reviews: reviews
                    });
                } else {
                    res.send(reviews);
                }
            }
        });
});

/* SEARCH */

router.get('/s/search?name=:name', function(req, res, next) {
    Reviews.find({"name": req.params.name}, function(err, reviews) {
        if (err) {
            res.status(500).send({
                'error': err
            });
        } else {

            res.send(reviews);
        }
    });
});

module.exports = router;
