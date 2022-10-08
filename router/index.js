const express = require('express')

const router = express.Router()

router.use(require('./article'))
router.use(require('./user'))

module.exports = router