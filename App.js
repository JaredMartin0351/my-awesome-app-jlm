//Purpose of this project is to learn branching through gitHub



const express = require('express')
const app = express()
// Changes made to the output
const APP_PORT = process.env.APP_PORT || 3000; app.get('/', (req, res) => {
    res.send(
        '<h2>Hello to Jared and the rest of the world out there!</h2>'
        )

}); app.listen(APP_PORT, () => {
    console.log(`Running app at port:${APP_PORT}.`)
});


