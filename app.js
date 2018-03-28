const express = require('express')
const app = express()
const port = process.env.PORT || 8082
const bodyParser = require('body-parser')
const HTTPError = require('node-http-error')
const cors = require('cors')

const {  } = require('./dal.js')

app.use(cors({
    credentials: true
}))
app.use(bodyParser.json())



/////////////////////////////////////////////
//   function section
/////////////////////////////////////////////





/////////////////////////////////////////////
//   helper functions
/////////////////////////////////////////////
app.use(function(err, req, resp,next) {
  console.log(req.method, " ", req.path, "error: ", err)
  resp.status(err.status || 500)
  resp.send(err)
})

app.listen(port, function() {
  console.log('\x1b[32m' ,'api listening on port ' + port, '\x1b[0m')
})
