const express = require('express')
const router = express.Router()
const db = require('../config/database')
const controller = require('../controllers/index')

router.get('/', controller.mahasiswa.getAll);

module.exports = router;