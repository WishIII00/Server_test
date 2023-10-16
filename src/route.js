const UserController = require('./controllers/UserController')
const ShortsController = require('./controllers/ShortsController')
const UserAuthenController = require('./controllers/UserAuthenController')
const isAuthenController = require('./authen/isAuthenController')

module.exports = (app) => {
    app.post('/user', UserController.create)
    
    app.put('/user/:userId', UserController.put)
    
    app.delete('/user/:userId', UserController.remove)
    
    app.get('/user/:userId', UserController.show)
    
    app.get('/users', UserController.index)

    app.post('/login',UserAuthenController.login)

    app.get('/users', isAuthenController, UserController.index)


    
  app.post('/shorts', ShortsController.create)  

  app.put('/shorts/:shortsId',ShortsController.put)

  app.delete('/shorts/:shortsId',ShortsController.remove)
  
  app.get('/shorts/:shortsId',ShortsController.show)
 
  app.get('/shorts',ShortsController.index)

}