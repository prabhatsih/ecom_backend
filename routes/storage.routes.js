const express = require('express');
const uploadFile = require('../controller/storage.controller');
const router = express.Router();

router.post('/', uploadFile);

module.exports = router;