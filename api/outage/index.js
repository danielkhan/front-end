var async = require("async")
    , express = require("express")
    , request = require("request")
    , endpoints = require("../endpoints")
    , helpers = require("../../helpers")
    , outage = require("../../helpers/outage")
    , app = express();


app.post("/outage", function (req, res, next) {
    outage.set(req.body);
    return res.json({status: 'ok'});
});

module.exports = app;