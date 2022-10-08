const express = require('express')
const router = express.Router()
const auth = require('../model/auth')

const article = require('../controller/article')
const articleValidator = require('../validator/article')


// 文章相关路由渲染
router.get('/', article.showIndex)

router.get('/create/:articleID', article.showCreate)

router.get('/create', article.showCreate)

router.get('/article', article.showArticle)

router.get('/article/:articleID', article.showArticle)

module.exports = router