const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars').engine
const methodOverride = require('method-override')
const app = express()
const port = 3000
const route = require('./routes')
const db = require('./config/db')
// Connect to Db
db.connect()

app.use(methodOverride('_method'))

// Midleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json({ limit: 10 }))

app.use(express.static('src/public'))
// HTTP logger
//app.use(morgan('combined'))
// template engine
app.engine(
  'hbs',
  handlebars({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
    },
  })
)
app.set('view engine', 'hbs')
app.set('views', 'src/resources/views')

// Route init
route(app)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
