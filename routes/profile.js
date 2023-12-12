const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    "destination" : "uploads/",
    "filename" : function(req, file, cb) {
        const extension = file.originalname.split('.').pop();
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const newFileName = `avatar-${uniqueSuffix}.${extension}`;
        cb(null, newFileName);
    }
});
const upload = multer({
    "storage" : storage,
    "fileFilter" : function(req, file, cb) {
        const acceptedMimeTypes = ['image/png', 'image/jpeg'];
        if (acceptedMimeTypes.includes(file.mimetype)) {
            cb(null, true);
        }
        else {
            cb(new Error('PNG eta JPG fitxategiak bakarrik onartzen dira'), false);
        }
    },
    "limits" : {
        "fileSize" : 2 * 1024 * 1024
    }
});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.redirect('form.html');
});

router.post('/', upload.single('avatar'), function (req, res, next) {
    console.log(req.file);
    const savedFilePath = `${req.protocol}://${req.get('host')}/${req.file.path}`;
    res.json({
        "state" : "ok",
        "response" : `Zure izena: ${req.body.izena} Fitxategia: ${savedFilePath}`
    });
});


module.exports = router;
