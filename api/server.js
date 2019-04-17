const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose');
	config = require('./DB');

const officeRoute = require('./routes/office.route');
    mongoose.Promise = global.Promise;
    mongoose.connect(config.DB, { useNewUrlParser: true }).then(
      () => {console.log('Database is connected') },
      err => { console.log('Can not connect to the database'+ err)}
    );

    const app = express();
    app.use(bodyParser.json());
    app.use(cors());
    // app.use(function (req, res, next) {
    //     console.log(req.hostname, req.originalUrl); 
    //     res.redirect(307, "http://localhost:3001" + req.originalUrl)
    // });
    app.use('/office', officeRoute);
    app.use(officeRoute);
    app.get('/',function(req,res){res.send("hello");});
    let port = process.env.PORT || 4000;

    const server = app.listen(port);
    
    module.exports = app;