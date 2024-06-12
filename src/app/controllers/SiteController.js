const Course = require('../models/Course')

class SiteController {
  // [GET] /home or /
  index(req, res, next) {
    Course.find({})
      .lean()
      .then((courses) =>
        res.render('home', {
          courses,
        })
      )
      .catch(next)
    //res.render('home')
  }
  // [GET] /search
  show(req, res) {
    res.render('search')
  }
}
module.exports = new SiteController()
