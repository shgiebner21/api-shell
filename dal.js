const PouchDB = require('pouchdb-http')
PouchDB.plugin(require('pouchdb-mapreduce'))
// const couch_base_uri = 'http://127.0.0.1:5984/'
// const couch_dbname = 'cpc'
// const db = new PouchDB(couch_base_uri + couch_dbname)

const Cloudant = require('cloudant')
const username = process.env.cloudant_username || 'nodejs'
const password = process.env.cloudant_password
const myURL = process.env.CLOUDANT_URL
const cloudant = Cloudant({url: myURL})
const dbname = 'cpc'
const db = cloudant.db.use(dbname)

const {map} = require('ramda')



/////////////////////////////////////////////
//   function section
/////////////////////////////////////////////



/////////////////////////////////////////////
// helper functions
/////////////////////////////////////////////




const dal = {

}

module.exports = dal
