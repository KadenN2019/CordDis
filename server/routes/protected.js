const protectedRouter = require('./routes/protected')
const jwt = require('express-jwt')
const config = require('config')

    app.user('/', userRouter)
    app.user("/", jwt({secret: config.get('foo.secret')}, protectedRouter))
