const Course = require('../models/Course')
class CourseController {
  // [GET] /create/show
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .lean()
      .then((course) => {
        res.render('courses/show', { course })
      })
      .catch(next)
  }
  // [GET] /course/create
  // Tạo UI form tạo mới 1 tài nguyên
  create(req, res, next) {
    res.render('courses/create')
  }

  // [POST] /course/store
  // Lưu tài nguyên khi tạo
  store(req, res, next) {
    req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`
    const course = new Course(req.body)
    course
      .save()
      .then(() => res.redirect('/me/stored/courses'))
      .catch((error) => {})
  }
  // [GET] /course/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .lean()
      .then((course) => res.render('courses/edit', { course }))
      .catch(next)
  }
  // [PUT] /course/:id
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect('/me/stored/courses'))
      .catch(next)
  }
  // [DELETE] /courses/:id
  // Xoa > thung rac
  delete(req, res, next) {
    // method delete of mongoose-delete
    Course.delete({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next)
  }
  // [DELETE] /courses/:id/force
  // Xoa vinh vien
  forceDelete(req, res, next) {
    // method delete of mongoose-delete
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next)
  }

  // [PATCH] /courses/:id/restore
  restore(req, res, next) {
    Course.restore({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next)
  }
}
// Dùng mongoose slug update thì sẽ tự động cập nhật slug khi đổi trường name gán cho slug

module.exports = new CourseController()
