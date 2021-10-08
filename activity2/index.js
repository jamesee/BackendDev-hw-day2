const express = require('express');
const path = require('path')
const app = express()

const logger = require("./middlewares/logger")
// const authorise = require("./middlewares/authorise")

const user = require('./routes/user')
const auth = require('./routes/auth')

// to get the form data 
app.use(express.urlencoded({extended: false}))
// to get the json data 
app.use(express.json())

// app.use([logger,authorise])
app.use([logger])

app.use(express.static('./public'))

app.use('/api/user', user)
app.use('/login', auth)

app.get('/', async (req, res)=>{
    // res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
    res.sendFile(path.resolve(__dirname,'./public/index.html'))
})


app.all('*', (req,res) =>{
    res.status(404).json({status: 404, error: 'Resource not found !'})
})

const PORT = 5000
app.listen(PORT, ()=>{
    console.log(`Server listensing on ${PORT}`)
})