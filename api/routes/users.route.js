// users.route.js

const express = require('express');
const app = express();
const userRoutes = express.Router();

// Require user model in our routes module
let User = require('../models/User');


// Defined get data(index or listing) route
userRoutes.route('/').get(function(req, res) {
    User.find(function(err, users) {
        if (err) {
            console.log("GET with Error");
            console.log(err);
        } else {
            console.log("GET users OK!");
            res.json(users);
        }
    });
});

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


// Defined edit route
userRoutes.route('/edit/:id').get(function(req, res) {
    let id = req.params.id;
    User.findById(id, function(err, user) {
        res.json(user);
    });
});


/*id: { type: Number },
  firstName: { type: String },
  lastName: { type: String },
  gender: { type: String },
  email: { type: String },
  annualSalary: { type: Number },
  dataOfBirth: { type: String },
  isActive: { type: Boolean }*/

//  Defined update route
userRoutes.route('/update/:id').post(function(req, res) {
    User.findById(req.params.id, function(err, /*next,*/ user) {
        if (!user)
            return next(new Error('Could not load Document'));
        else {
            user.firstName = req.body.firstName;
            user.lastName = req.body.lastName;
            user.gender = req.body.gender;
            user.email = req.body.email;
            user.annualSalary = req.body.annualSalary;
            user.dataOfBirth = req.body.dataOfBirth;
            user.isActive = req.body.isActive;

            user.save().then(user => {
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
    User.findByIdAndRemove({ _id: req.params.id }, function(err, user) {
        if (err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = userRoutes;