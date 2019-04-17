const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Office = new Schema({
  client_name: {
    type: String
  },
  port: {
    type: Number
  },
  DB:{
    type: String
  },
  certpath:{
    type: String
  },
    keypath:{
    type: String
  },
    staticURL : {
    type: String
  },
    staticpath: {
    type: String
  },
    hbspath:{
	    type: String
	  },
  apiProject:{
        type: Object
        },
   oAppSecurityProtocols:{
        type: Object
        },
   mail :{
        type: Object
        },
    currentTimeZone : {
	    type: String
	  },
    timeZones:{
        type: Object
        },
    http:{
	    type: String
	  },
    envurl:{
	    type: String
	  },
    host:{
	    type: String
	  },
    basePath:{
	    type: String
	  },
    linkExpiresInHours: {
	    type: Number
	  },
    database: {
        type: Object
        },
    mq: {
        type: Object
        },
    log: {
        type: Object
        },
    deploy:{
        type: Object
        },
    fileServer:{
        type: Object
        },
     rabbitmqPluginConnectionUrl : {
	    type: String
	  },
     tokenTimeOut:{
	    type: Number
	  } 


},{
    collection: 'clients'
});
 

module.exports = mongoose.model('Office', Office);
