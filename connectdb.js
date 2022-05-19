const express = require('express');
const mongoose = require('mongoose');
const Detail = require('./models/blog');
const Wlancount = require('./models/wlancount');

const app = express();

const dbURI = 'mongodb://localhost/wifikuydb';

// Static
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use('/js', express.static(__dirname + 'public/js'));

//Set
app.set('views', './views');
app.set('view engine', 'ejs');

//MongoDB Connection
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

// details routes

    app.get('', (req, res) => {
        res.redirect('/index');
    });

    app.get('/index', (req, res) => {
        console.log('Open Dashboard');
        res.render('index');
    })

    app.get('/location', (req, res) => {
        console.log('Open Location');
        res.render('location');
    })

    app.get('/wlan', (req, res) => {
        Wlancount.find()
            .then((result) => {
                console.log('Open WLAN');
                res.render('wlan', {wlancounts:result})
            })
            .catch((err) => {
                console.log(err);
            })
    })

    app.get('/details', (req, res) => {
        Detail.find()
            .then((result) => {
                console.log('Open Details');
                res.render('details', {details:result})
            })
            .catch((err) => {
                console.log(err);
            })
    })

// test routes NOT IMPORTANT
    app.get('/add-detail', (req, res) => {
        const detail = new Detail({
            apname:'JKTCKG83617-N/TLK-CI-69886',
            apsn:'FGL1882S7P1',
            apmac:'00:07:F6:16:C2:90',
            aptype:'CISCO',
            witel:'JAKARTA BARAT',
            locid:'JKTCKG83617-N',
            location:'r tamu || CIPONDOH GONDRONG95 153876',
            wac:'10.16.53.110'
        });

        detail.save()
            .then((result) => {
                res.send(result)
            })
            .catch((err) => {
                console.log(err);
            });
        
    });
    
    app.get('/all-detail', (req, res) => {
        Detail.find()
            .then((result) => {
                res.send(result);
            })
            .catch((err) => {
                console.log(err);
            });
    });