const express = require('express');
const bodyParser = require('body-parser');
const { signup } = require('../Controller/signcontroller');

const router = express.Router();

router.use(bodyParser.json());

router.post('/signup', signup);

module.exports = router;
