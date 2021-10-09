const express = require('express')
const logger = require('morgan')
const apiErrorHandler = require('./errors/api-error-handler');
const path = require('path')

module.exports = (router) => {
  const app = express()

  app.use(express.urlencoded({extended: false}))
  app.use(express.json())
  app.use(logger('common'))
  app.use(express.static(path.resolve(__dirname,'../public')))
  app.use(router)
  app.use(apiErrorHandler);
  return app
}