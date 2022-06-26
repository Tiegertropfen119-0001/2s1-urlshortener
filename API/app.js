const express = require('express');
const { appendFile } = require('fs');
const mysql = require('mysql');
var CONFIG = require('./config.json')


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = mysql.createConnection({
    host: CONFIG.myHost,
    user : CONFIG.myUser,
    password : CONFIG.myPassword,
    database: CONFIG.myDatabase
});


db.connect((err) =>{
    if(err){
        throw err;
    }
    console.log('Mysql Connected...')
})

app.post('/urlshort', (req, res) => {

    var ip = req.headers['x-forwarded-for'] ||
    req.socket.remoteAddress ||
    null;
  
var randomString = (Math.random() + 1).toString(36).substring(7);
console.log(randomString);


var url = req.body.shortthisurl;
var sharexnotext = req.body.instanturl;
console.log(ip)
console.log(url)

    if(url.includes('http://')){
        var sql = "INSERT INTO `urls` (`clearurl`, `shortid`) VALUES (?, ?)";
        var values = [url, randomString];
        db.query(sql, values, (err, result) => {
            if(err){
                throw err;
            }
            console.log(result);
        })
        console.log('URL created : ' + randomString)
        res.send(CONFIG.myapplink + randomString)
        console.log("http")
    }else{
    
        if(url.includes('https://')){
            var sql = "INSERT INTO `urls` (`clearurl`, `shortid`) VALUES (?, ?)";
            var values = [url, randomString];
            db.query(sql, values, (err, result) => {
                if(err){
                    throw err;
                }
                console.log(result);
            })
            console.log('URL created : ' + randomString)
            res.send(CONFIG.myapplink + randomString)
            console.log("https")
        }else{
            var httpscode = "https://";
           var newurl = httpscode + url;
        
           var sql = "INSERT INTO `urls` (`clearurl`, `shortid`) VALUES (?, ?)";
           var values = [newurl, randomString];
           db.query(sql, values, (err, result) => {
               if(err){
                   throw err;
               }
               console.log(result);
           })
           console.log('URL created : ' + randomString)
           res.send(CONFIG.myapplink + randomString)
           console.log("need https")
        }
    
    
    



}



   


})
app.post('/getclearurl', (req, res) => {

    var ip = req.headers['x-forwarded-for'] ||
    req.socket.remoteAddress ||
    null;
  



var urlid = req.body.urlid;
console.log(ip)
console.log(urlid)

    var sql = "SELECT * FROM `urls` WHERE `shortid` = (?)";
    var values = [urlid];
   
    db.query(sql, values, (err,rows,fields) => {
        if(err){
            throw err;
        }else{
            var clearurl = JSON.parse(JSON.stringify(rows[0].clearurl))
            console.log(clearurl)
            res.send(clearurl)
    
        }
   
       
    })
 
   // res.send(clearurl)


})

    


app.listen(CONFIG.baPort,()=>{
    console.log(`Server started on port: ${CONFIG.baPort}`);

});


