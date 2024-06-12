const mongoose = require('mongoose')
const slug = require('mongoose-slug-updater')
const mongooseDelete = require('mongoose-delete')

const Schema = mongoose.Schema

const Course = new Schema(
  {
    name: { type: String, maxLenght: 255, required: true },
    description: { type: String, maxLenght: 600 },
    image: { type: String },
    videoId: { type: String, maxLenght: 255, required: true },
    level: { type: String },
    slug: { type: String, slug: 'name', unique: true },
    deletedAt: { type: Date },
  },
  {
    timestamps: true,
  }
)

// Add plugin
mongoose.plugin(slug)
Course.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: 'all',
})

module.exports = mongoose.model('Course', Course)
