const express = require("express");
const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.listen(4000);

app.get("/", function(req, res) {
    res.render("home");
});