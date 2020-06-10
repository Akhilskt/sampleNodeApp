const express = require('express');
const router = express.Router();

router.get('/signin', (req, res) => {
    if (!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1) {
        return res.status(401).json({ message: 'Missing Authorization Header' });
    }
    const base64Credentials = req.headers.authorization.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [mail, password] = credentials.split(':');
    console.log("Mail::: "+mail," Password::: "+password);
    res.sendStatus(200);
});


router.post('/signup', (req, res) => {
    console.log(JSON.stringify(req.body));
    res.sendStatus(200);
});

module.exports = router;