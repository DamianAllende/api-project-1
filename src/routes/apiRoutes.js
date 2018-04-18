const Router = require('express').Router
const apiRouter = Router()
const Tweet = require('../models/Tweet')
const List = require('../models/List')



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


function allTweets (req, res){
  Tweet
    .query()
    .then(function(data) {
      res.json(data)
    })
}

function allLists (req, res){
   List
    .query()
    .eager('tweets')
    .then(function(data) {
      res.json(data)
    })
}

function getSingleTweet (req, res){
  const id  = parseInt(req.params.tweetId)

  Tweet
    .query()
    .findById(id)
    .then(function(tweet){
      res.json(tweet).status(200)
    })
}

apiRouter
  .get('/tweets', allTweets)
  .get('/tweets/:tweetId', getSingleTweet)



apiRouter.get('/tweets', allTweets)


apiRouter.get('/lists', allLists)

// retornar el tweet correspondiente al id 

apiRouter.get('/tweets/:tweetId', function(req, res){
  const tweetId  = parseInt(req.params.tweetId)
  Tweet
    .query()
    .where('id','=', tweetId)
    .then(function(data){
      res.json(data)
    })
})



module.exports = apiRouter
