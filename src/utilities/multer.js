const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    fileFilter(req, file, callback) {
        if(!file.originalname.match(/\.pdf|ppt|odt|doc|docx/)) {
            return callback(new Error('Please upload a valid file!!'));
        }
        callback(undefined, true);
    }
});  

module.exports = upload;