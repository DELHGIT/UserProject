// users.route.js

const express = require('express');
const app = express();
const userRoutes = express.Router();

// Require user model in our routes module
let User = require('../models/User');

// Defined store route
userRoutes.route('/add').post(function(req, res) {
    let user = new User(req.body);
    user.save()
        .then(user => {
            res.status(200).json({ 'user': 'user in added successfully' });
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

// Defined get data(index or listing) route
userRoutes.route('/').get(function(req, res) {
    user.find(function(err, users) {
        if (err) {
            console.log(err);
        } else {
            res.json(users);
        }
    });
});

// Defined edit route
userRoutes.route('/edit/:id').get(function(req, res) {
    let id = req.params.id;
    user.findById(id, function(err, user) {
        res.json(user);
    });
});

//  Defined update route
userRoutes.route('/update/:id').post(function(req, res) {
    user.findById(req.params.id, function(err, /*next,*/ user) {
        if (!user)
            return next(new Error('Could not load Document'));
        else {
            user.person_name = req.body.person_name;
            user.business_name = req.body.business_name;
            user.business_gst_number = req.body.business_gst_number;

            user.save().then(business => {
                    res.json('Update complete');
                })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});

// Defined delete | remove | destroy route
userRoutes.route('/delete/:id').get(function(req, res) {
    user.findByIdAndRemove({ _id: req.params.id }, function(err, business) {
        if (err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = userRoutes;