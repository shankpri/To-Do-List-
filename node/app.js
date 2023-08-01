const express=require('express')
const app=express();
const bodyparser=require('body-parser');
//using middleware to parse request bodies into objects for us automatically:
app.use(bodyparser.urlencoded({extended : true}));
app.use('/xyz',(req,res,next)=>{
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <form action="/message">
            <input type="text" name="nam" id="nae" method="POST">
            <button type><
        </form>
    </body>
    </html>`);
    next();
})
app.use('/message',(req,res,next)=>{
    console.log(req.body.nae); // accessing the value of input field
})

app.listen(3000);