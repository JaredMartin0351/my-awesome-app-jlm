//Purpose of this project is to learn branching through gitHub



const express = require('express')

const app = express()
//simple Hello World App

const APP_PORT = process.env.APP_PORT || 3000; app.get('/', (req, res) => {
    res.send('Hello Jared! Nice to see you!')
}); app.listen(APP_PORT, () => {
    console.log(`Running app at port:${APP_PORT}`)
})



