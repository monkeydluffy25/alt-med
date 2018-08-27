var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var methodOverride = require('method-override')
var cors = require('cors');
var app = express();
//var mongoose = require('mongoose');                     // mongoose for mongodb
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());

app.use(express.static('www'));

app.listen(process.env.PORT || 8095);
//mongoose.connect("mongodb://localhost:27017/");

var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/";
var url = "mongodb://user1:useruser1@ds163781.mlab.com:63781/alternative";

/*MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("alternative");
    var query = { "Name of the Product": "Aceclofenac 100mg and Paracetamol 325 mg Tablet 10's" };
    //var q = dbo.collection("medicine").find(query, { _id: 0, "Therapeutic Group": 1 }).toArray;
    dbo.collection("medicine").find(query, { _id: 0, "Therapeutic Group": 1 }).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        var x = result[0]["Therapeutic Group"];
        console.log(x);
        dbo.collection("medicine").find({ "Therapeutic Group": x }).toArray(function (err, result) {
            if (err) throw err;
            for (var x = 0; x < result.length; x++) {
                console.log(result[x]["Name of the Product"]);
            }
        });
        //db.close();
    });
    /*dbo.collection("medicine").find(result[4]).toArray(function (err, result1) {
        if (err) throw err;
        console.log(result1);
        //db.close();
    });*/

//});
app.post("/meds/searchfull",function(req,res){
  console.log("server-"+req.body.search)
  MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("alternative");
      var query = { "Name of the Product": req.body.search };
      //console.log("aaaaa-"+req.body.search)
      //var q = dbo.collection("meds").find({}, { _id: 0, "Therapeutic Group": 1 }).toArray;
      //console.log("aaaaa-"+q)
      dbo.collection("medicine").find(query, { _id: 0 }).toArray(function (err, result) {
          if (err) throw err;
          console.log("final-"+result[0]["Name of the Product"]);
          var x;
          x=result;
          res.json(x);
        });
  });
})


app.post("/meds/search",function(req,res){
  console.log("server-"+req.body.search)
  MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("alternative");
      var query = { "Name of the Product": req.body.search };
      //console.log("aaaaa-"+req.body.search)
      //var q = dbo.collection("medicine").find({}, { _id: 0, "Therapeutic Group": 1 }).toArray;
      //console.log("aaaaa-"+q)
      dbo.collection("medicine").find(query, { _id: 0, "Therapeutic Group": 1 }).toArray(function (err, result) {
          if (err) throw err;
          //console.log(result);
          var x = result[0]["Therapeutic Group"];
          //console.log(x);
          dbo.collection("medicine").find({ "Therapeutic Group": x }).toArray(function (err, result) {
              if (err) throw err;
              var y = [];
              for (var x = 0; x < result.length; x++) {
                  y[x]=result[x]["Name of the Product"];
                //  console.log(result[x]["Name of the Product"]);
                //  res.json(result[x]["Name of the Product"]);
              }

              res.json(y);

          });
          //db.close();
      });
      /*dbo.collection("medicine").find(result[4]).toArray(function (err, result1) {
          if (err) throw err;
          console.log(result1);
          //db.close();
      });*/

  });

})
