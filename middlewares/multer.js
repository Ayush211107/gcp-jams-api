const multer = require('multer');




const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

const upload = multer({ storage: storage })


module.exports = upload


  // const storage = multer({
  //     storage: multer.diskStorage({}),
  //     fileFilter: (req, file, cb) => {
  //         if (!file.mimetype.match('image/jpeg|image/png|image/gif')) {  //image/jpeg contains both jpeg and jpg
  //             cb(new Error('File is not supported'), false)
  //             return
  //         }
  //         cb(null, true)
  //     }
  // })