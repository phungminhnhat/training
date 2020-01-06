var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt')
const User = require('../models/user')
    /* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/index', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/detail', function(req, res, next) {
    res.render('detail', { title: 'Express' });
});
router.get('/sigin', function(req, res, next) {
    res.render('sigin', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
    res.render('login', { title: 'Express' });
});
router.post('/sigin', async function(req, res, next) {
    try {
        const { username, password } = req.body

        // const test1 = await bcrypt.compare('matkhau1', hash)
        // const test2 = await bcrypt.compare('password1', hash)

        let user = await User.findOne({ username })

        if (user) {
            // Thong bao la username da totai
            res.render('sigin_failed', { title: 'Express', username })
        } else {
            user = new User()
            user.username = username
            user.password = await bcrypt.hash(password, 10)
            await user.save()
            res.render('sigin_successful', { title: 'Express', username });
        }
    } catch (error) {
        console.log(error.message)
            // Thong bao la loi server
        res.render('error', { title: 'Express', username });
    }

});
router.post('/login', async function(req, res, next) {
    try {
        const { username, password } = req.body
        console.log(username)

        let user = await User.findOne({ username })

        if (user) {
            console.log(user.password)
            let result = await bcrypt.compare(password, user.password)
            res.render('index', { title: 'Express', username, password })
        } else {
            // TODO: username ko ton tai
            res.render('sigin_failed', { title: 'Express', username, password })
        }
    } catch (error) {
        res.render('error')
    }

})

router.get('/detail/:id', function(req, res, next) {
    product.findById(req.param.id)
        .exec(function(err, video) {
            if (err) {
                console.log("err product");
            } else {
                res.json(product);
            }
        })
});


module.exports = router;