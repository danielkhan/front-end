var async = require("async")
    , express = require("express")
    , request = require("request")
    , config = require("../../config")
    , endpoints = require("../endpoints")
    , helpers = require("../../helpers")
    , outage = require("../../helpers/outage")
    , app = express();

function checkAuth(req, res, next) {
    var token = config.outage.token;
    if(req.headers.auth !== token){
        return res.status(403).end();
    }
    return next();
}


app.post("/outage", checkAuth, function (req, res, next) {
    outage.set(req.body);
    return res.json({status: 'ok'});
});

module.exports = app;