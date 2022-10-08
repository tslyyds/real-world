const express = require('express')
const router = express.Router()
const user = require('../controller/user')
const userValidator = require('../validator/user')
const auth = require('../model/auth')

//用户相关路由渲染
router.get('/login', user.showLogin)

router.get('/register', user.showRegister)
router.post('/register', userValidator.register, user.register)


router.get('/setting', user.showSetting)

router.get('/profile/:username', user.showProfile)

router.get('/profile/:username/favourites', user.showProfile)
module.exports = router