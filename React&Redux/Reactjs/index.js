const express = require("express");
const app = express();
app.use(express.static("public"));
const bodyParser =require('body-parser');
const parser = bodyParser.urlencoded({extended: false});

app.set("view engine", "ejs");
app.set("views", "./views");
app.listen(4000);

app.get("/", function(req, res) {
    res.render("home");
});

    
    app.listen(port);
    
    var mang=["Phần tử 1","Phần tử 2","Phần tử 3","Phần tử 4"];
    app.post('/getNote',function(req,res){
        res.send(mang);
    });
    
    app.post('/add',parser,function(req,res){
    var newNote= req.body.note ;
    mang.push(newNote);
    res.send(mang);
    });
    
    app.post('/delete',parser,function(req,res){
        var id= req.body.idXoa;
        mang.splice(id,1);
        res.send(mang);
    });
    app.post('/update',parser,function(req,res){
        var id= req.body.idSua;
        mang[id]=req.body.noidung;
        res.send(mang);
    });