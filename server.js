/*
import express from "express";
import config from './config';*/
const express = require('express');
const server=express();
const config= require('./config')();
console.log(config);
server.get('/',(req,res)=>{
   res.send("Hello Express");
});
server.get('/about.html',(req,res)=>
{
   res.send("The about page");
});

server.listen(config, () => {
    console.log(config);
    console.info('Express listening on port', config);
});
/*
const server = http.createServer();
server.listen(8080);
server.on('request',(req,res)=>{
    res.write("Hello HTTP!\n");
    setTimeout(()=>{
        res.write('I can stream!\n');
        res.end();
    },3000);
});*/
