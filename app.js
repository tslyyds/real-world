const express = require('express')
const path = require('path')
const morgan = require('morgan')
const router = require('./router')
const errorhandler = require('errorhandler')
const session = require('express-session')
const { sessionSecret } = require('./config/config.default')


//连接数据库
require('./model')
const app = express()

//设置session中间件
app.use(session({
    secret: sessionSecret,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

//挂载静态组件
app.use('/public', express.static(path.join(__dirname, './public')))
app.use('/node_modules', express.static(path.join(__dirname, './node_modules')))


app.engine('html', require('express-art-template'))
app.set('view option', {
    debug: process.env.NODE_ENV !== 'production'
})
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'html')

app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

const PORT = process.env.PORt || 3000

app.use(router)

if (process.env.NODE_ENV === 'development') {
    // only use in development
    app.use(errorhandler())
}
app.listen(PORT, () => {
    console.log('Server is running')
})