const express = require('express')

const { Model } = require('objection')

const ejs = require('ejs')

const connectToDatabase = require('./src/database/connection')
const knexFile = require('./knexfile')

const pageRouter = require('./src/routes/pageRoutes')
const apiRouter = require('./src/routes/apiRoutes')

const app = express()

const appConnectionWithDatabase = connectToDatabase(knexFile.development)

Model.knex(appConnectionWithDatabase)

app.locals.db = appConnectionWithDatabase

// Setup EJS engine
app.engine('ejs', ejs.renderFile)
app.set('view engine', 'ejs')
app.set('views', `${__dirname}/src/views`)

// Setup static files
app.use(express.static(`${__dirname}/public`))

app.use('/', pageRouter)
app.use('/api', apiRouter)

// Show 404 view
app.use(function(req, res) {
  res.render('404.ejs')
})

app.listen(3000, () => {
  console.log('App running...')
})
