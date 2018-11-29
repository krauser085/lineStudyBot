const _tag = '[router/index.js]'
const express = require('express')
const router = express.Router()
const AWS = require('aws-sdk')
AWS.config.update({ region: process.env.AWS_REGION })
const kinesis = new AWS.Kinesis()

router.post('/', (req, res, next) => {
  const event = req.body
  const params = {
    'Data': JSON.stringify(event),
    'PartitionKey': 'testkey',
    'StreamName': process.env.KINESIS_STREAM
  }
  sendRecord(params, (err, data) => {
    if (err) return next(err)
    res.send(200, data)
  })
})

sendRecord = (params, callback) => {
  kinesis.putRecord(params, (err, data) => {
    if (err) return callback(err)
    console.log(_tag, data)
    callback(null, 'success')
  })
}

module.exports = router
