var fs = require('fs');
let outage = null;

module.exports.set = function setOutage(event) {
   outage = event;
};

module.exports.check = function (req, res, next) {
  if(outage && outage.State && outage.state !== 'RESOLVED') return res.status(503).json({outage: true});
  return next();
};
