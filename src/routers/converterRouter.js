const fs = require('fs')
const express = require('express')
const cors = require('cors')
const multer = require('multer');
const upload = multer();
const router = new express.Router()

const { mapping } = require('../constants/config');
const postmanToOpenApi = require('postman-to-openapi');

router.use(express.json())

let convertMethod = JSON.stringify([['openapi3', 'postman2'], ['raml1', 'postman2'], ['openapi2', 'openapi3']])

async function convertPath (steps, origFile) {
  for (let i=0; i<steps.length; i++) {
    let format = steps[i][0], convertTo = steps[i][1]
    if (convertMethod.includes(JSON.stringify(steps[i]))) {
      function aconvert(data, options) {
        return new Promise(function(resolve, reject) {
          mapping[format][convertTo].convert(data, options, (err, conversionResult) => {
            if(!conversionResult) reject(err)
            resolve(conversionResult)
          })
        })
      }
      let result = await aconvert({ type: 'string', data: origFile }, {})
      origFile = result.output[0].data
    }
    else if (format === 'postman2') {
      if(typeof origFile == 'object') origFile = JSON.stringify(origFile)
      fs.writeFileSync('./temp.json', origFile)
      origFile = await postmanToOpenApi('./temp.json', null, { defaultTag: 'General' })
    }
  }
  return origFile
}

router.post('/converter', cors(), upload.single('file'), async (req, res) => {

    var file = req.file,
        {format, type, convertTo} = req.query,
        buffer = Buffer.from(file.buffer),
        origFile = buffer.toString()

    if (mapping[format] && Object.keys(mapping[format]).includes(convertTo)) {
        let steps = [], path = mapping[format][convertTo]
        if(Array.isArray(path)) {
          steps.push([format, path[0]])
          for (let i = 0; i<path.length-1; i++) {
            steps.push([path[i], [path[i+1]]])
          }
          steps.push([path[path.length-1], convertTo])
        }
        else {
          steps.push([format, convertTo])
        }
        let result = await convertPath(steps, origFile)

        res.status(200).send({"result": "success", "message": "Conversion successful.", "data": result})
    }
    else {
        res.status(400).send({"result": "error", "message": "No conversion mapping found."})
    }
})


module.exports = router