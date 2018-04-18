const Router = require('express').Router
const apiRouter = Router()
const Tweet = require('../models/Tweet')
const List = require('../models/List')

const courses = [{
  id: 1,
  name: 'Terminal and UNIX',
  length: '15 hours'
}, {
  id: 2,
  name: 'Git and GitHub',
  length: '15 hours'
}, {
  id: 3,
  name: 'HTML + CSS Basics',
  length: '10 hours'
}, {
  id: 4,
  name: 'Introduction to JavaScript',
  length: '15 hours'
}, {
  id: 5,
  name: 'Intermediate JavaScript I',
  length: '20 hours'
}, {
  id: 6,
  name: 'Intermediate JavaScript II',
  length: '25 hours'
}, {
  id: 7,
  name: 'Node and Express.js Fundamentals',
  length: '15 hours'
}, {
  id: 8,
  name: 'React.js Fundamentals',
  length: '25 hours'
}];

apiRouter.get('/courses', (req, res) => {
  res.json(courses)
})

apiRouter.post('/courses', (req, res) => {
  res.send('Making a POST request')
})

apiRouter.get('/courses/:courseId', (req, res) => {
  const courseId = parseInt(req.params.courseId)

  const newList = courses.filter(function(course) {
    return course.id === courseId
  })

  res.json(newList)
})

// TWEETS ROUTES
// apiRouter.get('/tweets', function(req, res) {
//   const db = req.app.locals.db

//   db
//     .select()
//     .table('tweets')
//     .then(function(data) {
//       res.json(data)
//     })
// });

apiRouter.get('/tweets', function(req, res) {
  Tweet
    .query()
    .then(function(data) {
      res.json(data)
    })
})


apiRouter.get('/lists', function(req, res) {
  List
    .query()
    .eager('tweets')
    .then(function(data) {
      res.json(data)
    })
})

// retornar el tweet correspondiente al id 

apiRouter.get('/tweets/:tweetId', function(req, res){
  const tweetId  = parseInt(req.params.tweetId)
  console.log(typeof tweetId)
  Tweet
    .query()
    .where('id','=', tweetId)
    .then(function(data){
      res.json(data)
    })
})



module.exports = apiRouter
