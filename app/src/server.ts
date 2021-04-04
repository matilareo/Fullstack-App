const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const request = require('request');
import * as dotenv from "dotenv";

dotenv.config({ path: __dirname+'/.env' });
const app = express();
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '../build')));

app.post('/api',function(req,res){
  const params = req;
  request({
    url: process.env.GRAPHQL_ENDPOINT,
    body: req.body,
    json: true,
    method: 'POST'
  }, (error, response, dataResult) => {
    if (error) {
      console.log('api/index.js (Proxy graphql)=> Error ', error,'Params =>',params);
      res.serverError();
    } else {
      return res.send(dataResult);
    }
  });
}
);
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(5000,()=>{
  console.log("http://localhost:5000")
});