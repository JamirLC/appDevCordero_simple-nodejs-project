const express = require('express');
const router = express.Router();
const jmski = require('../controller/jamirController');
router.get('/', jmski.ja);
router.get('/create', jmski.mir);
router.get('/about', jmski.lan);
router.get('/settings', jmski.der);
router.get('/update', jmski.ski);
module.exports = router;
