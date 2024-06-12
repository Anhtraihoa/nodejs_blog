

class NewsController{
    // [GET] method
    index(req, res) {
        res.render('news')
    }
    // [GET] /news/:slug
    show(req, res){
        res.send('NEW DETAIL')
    }
}
module.exports = new NewsController;