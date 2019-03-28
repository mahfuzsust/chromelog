const Log = require('../models/log.model');

exports.log_insert = function (req, res) {
    let log = new Log(
        {
            email: req.body.email,
            host: req.body.host,
            time: req.body.time
        }
    );

    log.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Log saved successfully')
    })
};
