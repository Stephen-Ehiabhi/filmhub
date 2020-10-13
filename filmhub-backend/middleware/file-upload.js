const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')
 


aws.config.update({
    accessKeyId: "AKIAIYAHJAMNINN4HRPQ",
    secretAccessKey: "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",
    region: 'us-east-2'
});


const s3 = new aws.S3()
 
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'filmhubmedia',
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, file.originalname);
    }
  })
})


module.exports = upload; 