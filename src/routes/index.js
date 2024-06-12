const newsRouter = require('./news')
const coursesRouter = require('./courses')
const siteRouter = require('./site')
const meRouter = require('./me')

function route(app) {
  // GET method route
  // Dùng cho những tk mà có nhiều con
  app.use('/news', newsRouter)
  app.use('/courses', coursesRouter)
  app.use('/me', meRouter)
  // Dùng cho những tk như home/ search/ contact...
  app.use('/', siteRouter)
}

module.exports = route
