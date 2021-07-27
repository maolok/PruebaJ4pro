const express = require("express");
const app = express();
const cors = require("cors");
const { query } = require("express");
const cron = require('node-cron');
let fs = require('fs');


let data_api = {}; //objeto con data


//cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(express.urlencoded());
app.use(express.json());

// peticion GET
app.get('/get_data', function (req, res) {
  

    res.status(200).send(data_api);

 
      
});
//cron para ejecutar actualizacion datos cada hora
cron.schedule('* * * * *', function(){
    updatedata();
    console.log('Datos Api Actualizados!');
});

//funcion para conseguir datos
function updatedata(){

    fs.readFile('colombia.min.json', 'utf-8', (err, data) => {
        if(err) {
          console.log('error: ', err);
        } else {
          //console.log(data);
          data_api = data;
        }
      });

}

// inicia servidor
app.listen(5000, () => {
 updatedata();
 console.log("API funcionando en el puerto 5000");
});







