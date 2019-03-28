const Log = require('../models/log.model');

exports.log_insert = function (req, res) {
    Log.findOneAndUpdate({ email: req.body.email, host: req.body.host }, { $inc: { time: 1 } }, { upsert: true }, function (err, response) {
        if (err) {
            return next(err);
        } else {
            console.log("Log saved successfully");
            res.send('Log saved successfully');
        }
    });
};

exports.get_top_logs = function (req, res) {
    Log.find({ email: req.params.email }).limit( 10 ).sort([['time', 'descending']]).exec(function(err, logs) {
        res.render('index', { logs: logs });
    });
}