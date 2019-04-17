const express = require('express');
const app = express();
const officeRoutes = express.Router();
const mongoose = require('mongoose'); 
cors = require('cors');
// Require Business model in our routes module
let Business = require('../models/Office');
var data=[];
var alldata=[];
var index1=-1,path1;
var finalurl;
function reqdata(data){
    
  console.log("Im here");
  
     Business.find({}, function (err, docs) {
      
      docs.forEach(function(value){ 
      data.push(value["port"]);console.log(data);
      alldata.push(value["client_name"]);console.log(alldata);
    });
    //console.log(data['port']);
    });
     console.log(data);
     console.log(alldata);
     return data;
}

data=[];
data=reqdata(data);

   var crypto = require('crypto'),
    format = require('biguint-format');

function randomC (qty) {
    var x= crypto.randomBytes(qty);
    return format(x, 'dec');
}
function random (low, high) {
    return randomC(4)/Math.pow(2,4*8-1) * (high - low) + low;
} 
// Defined store route
//console.log(data);console.log("data");
 











officeRoutes.route('/add').post(function (req, res) {

var x=req.body.client_name;
var get;
// Define collection and schema for Business
const getPort = require('get-port');



console.log("begin");
var check=false;

  
get = Math.trunc( random(3000,4000) );

   while(!check){ 


console.log(data);
if (data.indexOf(get) <= -1&& get<4000) { 

    check=true;
    console.log(check);
}else{
  get = Math.trunc( random(3000,4000) );
   console.log(get);
}
}

data.push(get); 

  let business = new Business({ 
    client_name:x,
      port:get,
      DB : 'mongodb://'+x+':O1dM0nk@localhost:'+get+'/'+x,
    certpath:'/etc/apache2/ssl/perfeqta/cert.cer',
    keypath:'/etc/apache2/ssl/perfeqta/key.pem',
    staticURL : 'erro.msg@mailinator.com',
    staticpath: '/var/www/perfeqta/latest/api/api/tmp/',
    hbspath: '/var/www/perfeqta/latest/api/api/lib/mailer/templates/',
    apiProject:{
        version:"v1",
        secretKey:"KuchhBhi",
        options:{
            pageSize : 10,
            page : 1
        }
    },
    oAppSecurityProtocols:{
        encryptDecryptOptions: {
          algorithm:"aes-256-cbc",
          secret:"qaenv",
        },
        tokenOptions:{
          algorithm: 'RS256'
        }
    },
    mail : {
        user : "protsystems123",
        pass : "Prot@123",
        host : 'smtp.gmail.com',
        port : '587',
        from : 'team@e.beperfeqta.com'
    },
    currentTimeZone : 'IST',
    timeZones: {
        'IST': -330,
        'CST': 300
    },
    http:'https',
    envurl:'https://test3.beperfeqta.com/latest',
    host:'dev.beperfeqta.com',
    basePath:'/dev/api/',
    linkExpiresInHours: 72,
    database: {
        host: "127.0.0.1",
        port: 3306,
        db: "qc3devlogs",
        dbtable:"loginfo",
        username: "root",
        password: "root@123",
        dbType : "mysql",
        fileServer:{
             url:{
                 get:'http://192.168.1.188:3000/file/',
                 post:'http://192.168.1.188:3000/file/'
             },
             enabled:false,
         }
    },
    mq: {
        accountMq: {
            host: "localhost",
            queue: "qc3dev"
        },
        keys : [
            "perfeqta.logging"
        ]
    },
    log: {
      level: "debug",
      mode: {
        console: true,
        disk: true,
        mq: true
      }
    },
    deploy: {
        port : 4901
    },
    fileServer:{
         url:{
             get:'http://192.168.1.188:3000/file/',
             post:'http://192.168.1.188:3000/file/'
         },
         enabled:false,
     },
     rabbitmqPluginConnectionUrl : 'amqp://localhost',
     tokenTimeOut:20
     
  }); 
 

  business.save()
    .then(business => {
      res.status(200).json({'business': 'business in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
    
});

// Defined get data(index or listing) route
officeRoutes.route('/').get(function (req, res) {
    Business.find(function (err, businesses){
    if(err){
      console.log(err);
    }
    else {
      res.json(businesses);
    }
  });
});







 


// Defined edit route
officeRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Business.findById(id, function (err, business){
      res.json(business);
  });
});

//  Defined update route
officeRoutes.route('/update/:id').post(function (req,  res,next) {
    Business.findById(req.params.id, function(err, business) {
    if (!business)
      return next(new Error('Could not load Document'));
    else {
        business.client_name = req.body.client_name; 
        business.save().then(business => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
officeRoutes.route('/delete/:id').get(function (req, res) {
    Business.findByIdAndRemove({_id: req.params.id}, function(err, business){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});




officeRoutes.use(function(req, res, next){ 
var x= req.originalUrl;
for(var i=0; i<alldata.length;i++){ 
  var y=alldata[i]+'/'; 
  if(x.indexOf(y)==1){
      index1=i; 
      break;
  }
}
var ret = x.replace(alldata[index1],'');
ret=ret.replace('/',''); 
if(index1==-1){
  finalurl= 'Are you sleeping or what! client_name does not exists!';
}else{finalurl= 'http://localhost:'+ data[index1]+ret;} 
  res.send(finalurl);
  index1=-1;

});


module.exports = officeRoutes;