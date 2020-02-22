const express = require('express');
const app = express();
const port = 3000;

var cookieParser = require('cookie-parser');
var session = require('express-session');
app.use(cookieParser());
app.use(session({secret: 'Session1'}));

app.get('/', function(req, res){
    if(req.session.page_views){
        req.session.page_views++;
        res.send("Session number: " + req.session.page_views );
    } else {
        req.session.page_views = 1;
        res.send("Welcome for the first time");
    }
});

app.get('/test',
    (req, res) => {
        console.log('test');
        //console.log(req);
        //console.log(res);
        res.send('testowa podstrona');

    }
)

app.get('/test/:id',
    (req, res) => {
        var cookieVal = req.cookies.id === undefined ? 'brak' : req.cookies.id;
        res.cookie('id', req.params.id, {expire: 360000 + Date.now()})
            .send(`Poprzedni parametr: ${cookieVal}, bieżący parametr ${req.params.id}` );
    }
)

app.get('/test/:id/:id2',
    (req, res) => {
        console.log(req.params.id);
        res.cookie('name', req.params.id, {expires: new Date(Date.now() + 900000)}).send(`cookie set: ${req.params.id}` );
        console.log('Cookies: ', req.cookies);
    }
)

app.get('/oautorze',
    (req, res) => {
        res.send('testowa podstrona o autorze');
    }
)

app.get('*',
    (req, res) => {
        res.send('Ups. Brak wskazanego adresu. Na pewno jest taka podstrona?');
    }
)

app.listen(port,
    () => console.log(`Example app listening on port ${port}!`))

