'use strict';

exports.partials = function (req, res) {
  var name = req.originalUrl;
  return res.render('dashboard' + name);
};