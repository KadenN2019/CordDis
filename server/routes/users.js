const router = require("express").router()
const uuid = require('uuid/v4')
const sha512 = require('js-sha512')
const jwt = require('jsonwebtoken')
const config = require("config")


// Register
router.post('/register', (req, res, next) =>{
    const salt = uuid()
    const username = req.body.username
    let password = sha512(req.body.password + salt)
    
    const mysql = 'INSERT INTO users (username, password, salt) VALUES(?, ?, ?)  '
    
    db.query(sql, [username, password, salt], (err, results, fields) =>{
        if(err){
            throw new Error(err)
        }
    })
})

// Login
router.post('/login', (req, res, next) =>{
  const username = req.body.username
  let password = sha512(req.body.password + salt)
    
  db.query('SELECT salt FROM users WHERE username = ?', [username], (err, res, fields) =>{
    if(results.length > 0){
      password = sha512(password + results[0].salt)
      const sql = `
        SELECT COUNT(1) as count FROM users WHERE username =? and password = ?
        `
// Can Select username instead of count
      db.query(sql, [username, password], (err, results, fields) =>{
        if (results[0].count > 0){
          const token = jwt.sign({username}, config.get('secret'))
        
          res.json({
            message: "User created",
            result
          })
        }else {
          res.status(401).json({
            message: "User"
          })
        }
      })
      }else {
        res.status(401).json({
          message:"User does not exist"
        })
      }
  })
})
// Protected
const router = require('express').router()

router.get('/goo', (req, res, next)=>{
  res.json({
    message: "goo be gone"
  })
})
// In app
const protectedRouter = require('./routes/protected')
const jwt = require('express-jwt')
const config = require('config')

  app.user('/', userRouter)
  app.user("/", jwt({secret: config.get('foo.secret')}, protectedRouter))

// DB
const mysql = require('mysql')

const pool = createPool({
  connectionLimi1: 10,
  user: '',
  password:'',
  host:''
})

// Created Config Folder with Default Json
{
  "secret" = 'Efh3^+uMg_3nLnf/'
}

// Creating a header - you pass through the token