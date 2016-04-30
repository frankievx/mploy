var Applications = require('../models/Applications.js');
var Stats = require('../models/Stats.js');
var Users = require('../models/Users.js');
var express = require('express');
var bodyParser = require('body-parser');

module.exports = function(router) {
  var app = express();
  app.use(bodyParser.json()); // support json encoded bodies

  // router.use(function(req,res,next) {
  //   if (req.user !== undefined){
  //     var linkedin_id = req.user.linkedin_id
  //     return Users.verifyEmployer(linkedin_id)
  //     .catch(function(err) {
  //       console.log('Failed to verify user as applicant:', err)
  //       res.redirect('/employer/dashboard')
  //     })
  //     .then(function(resp) {
  //       console.log('Resp from Users.verifyEmployer:', resp)
  //       if (resp){
  //         console.log('User is not an applicant.')
  //         res.redirect('/employer/dashboard')
  //       } else {
  //         return next()
  //       }
  //     })
  //     .catch(function(err) {
  //       console.log('Applicant authentication failed: ', err)
  //       res.redirect('/employer/dashboard')
  //     }) 
  //   } else {
  //     console.log('User not logged in')
  //     res.redirect('/')
  //   }
  // });

  router.get('/appsbyuser', function(req, res){
    console.log('---appsbyuser:received GET, query='+JSON.stringify(req.query));
    var rq = req.query;
    if (rq && rq.userID) {
      console.log("request for userId = ",rq.userID);
      Applications.getAppsByUser(rq.userID)
      .then(function(data){
        console.log("returning application data", data);
        res.status(200).send(JSON.stringify(data));
      })
      .catch(function(err){
        console.log("could not get application data for userID "+rq.userID+", err:", err);
        res.status(400).send(err);
      })
    } else {
      console.log("must supply userID in query string");
      res.status(400).send("must supply userID in query string");       
    }
  }); 

  router.get('/currentuserapps', function(req, res){
    console.log('---currentuserapps:received GET');
    var linkedin_id = req.user.linkedin_id
    return Users.verifyId(linkedin_id)
    .then(function(data){
    console.log("User data: ", data);
    return Applications.getAppsByUser(data.userID)
    })
    .then(function(apps) {
    console.log('Responding with applications for current user: ', apps)
    res.status(200).send(apps);
    })
    .catch(function(err){
    console.log("No applications retrieved for current user: ", err);
    res.status(400).send(err);
    })
  }) 

  router.post('/submitapp', function(req, res) {
    console.log('received submit application POST, body:',req.body);
    if(! req || !req.body) {
      console.log("error: submitapp POST with no body");
      res.status(400).send("/submitapp expected a body object");
    } else {
      var linkedin_id = req.user.linkedin_id
      return Users.verifyId(linkedin_id)
      .then(function(userInfo) {
        console.log("body:",req.body);
        req.body.user_id = userInfo.userID
        Applications.submit(req.body)
        .then(function(data){
          res.status(200).send("success!");
          console.log("Application successfully submitted")
          Stats.incrementTotalApps(req.body.user_id)
          .then(function() {
            console.log("Total apps increment successful")  
          })
          .catch(function() {
            console.log("Total apps increment failed")
          })  
        })
        .catch(function(err){
          console.log("application submission failed, err:", err);
          res.status(400).send("Application submission and/or increment failed");  
        }) 
      })
    }
  });

	//router.use(function(req,res,next) {
		//check to see if applicant
		//if applicant res.next()
		// }
    //next();
		// res.redirect('/job')
	//});

	//routes:
  //router.get('/appsbyuser', function(req, res) {
  //  console.log("applicant:appsbyuser:responding with appsbyuser data");
  //  res.status(200).send("applicant:appsbyuser");
    /*
    console.log('---received appsbyuser GET, query='+JSON.stringify(req.query));
    var rq = req.query;

    */
  //});


	//catch all
	router.get('/*', function(req, res) { 
		res.redirect('/job')
	});
  router.post('/*', function(req, res) {
    res.redirect('/job')
  });
}