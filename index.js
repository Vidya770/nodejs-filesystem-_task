const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

//Select Path
const dirPath = path.join(__dirname, "timestamps");

app.get("/",(req,res)=>{

    const utc = new Date();

    //Current Date
    const date = utc.getDate();
    //Current Month
    const month = utc.getMonth()+1;
    //Current Year
    const year = utc.getFullYear();
    //Current Hours
    const hours = utc.getHours();
    //Current Minutes
    const min = utc.getMinutes();
    //Current Seconds
    const seconds = utc.getSeconds();

    const data = `The Current timestamp is Date(${year}-${month}-${date}), Indian Standard Time(${hours}:${min}:${seconds})`;

    fs.writeFile(`${dirPath}/date-time.text`,data,(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("file created");
        }
    })
    res.send(data)
    });

app.listen(9000);