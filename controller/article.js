exports.showIndex = async(req, res) => {
    res.render('index.html')
}

exports.showCreate = async(req, res) => {
    res.render('create.html')
}

exports.showArticle = async(req, res) => {
    res.render('article.html')
}