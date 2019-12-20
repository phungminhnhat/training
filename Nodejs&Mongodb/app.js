const express = require('express');
const app = express();

const server = app.listen(8001, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});

app.use(express.static('public'));

app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/images', express.static(__dirname + '/public/images'));


app.get('/index', (req, res) => {
    res.send('Hello guys!');
});

app.get('/', (req, res) => {
    res.send('Hello girl!');
});

app.get('/detail', (req, res) => {
    res.send('Hello everybody!');
});