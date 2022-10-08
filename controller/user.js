const { User } = require('../model')

exports.showLogin = async(req, res, next) => {
    try {
        res.render('login.html', {
            isLogin: true
        })
    } catch (error) {
        next(error)
    }
}

exports.showRegister = async(req, res, next) => {
    try {
        res.render('login.html')
    } catch (error) {
        next(error)
    }
}
exports.register = async(req, res, next) => {
    try {
        //1.获取表单数据
        console.log(req.body)

        //2.校验表单数据

        //3.操作数据库
        const user = new User(req.body.user)
        await user.save()

        //4.保持登录session
        req.session.user = user

        //5.发送响应
        res.status(201).json({
            user
        })
    } catch (error) {
        next(error)
    }
}

exports.showSetting = async(req, res, next) => {
    try {
        res.render('setting.html')
    } catch (error) {
        next(error)
    }
}

exports.showProfile = async(req, res, next) => {
    try {
        res.render('profile.html')
    } catch (error) {
        next(error)
    }
}