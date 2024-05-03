var express = require('express');
var router = express.Router();
const booksController = require('../controllers/booksController')


//different file names for images
var multer = require('multer');
var date = Date.now();

var routeStore = multer.diskStorage(
    {
        destination: function(request,file,callback) {
            callback(null, './public/images')
        },
        filename: function(request,file,callback) {
            console.log(file)
            callback(null, date + "_" + file.originalname)
        }
    }

    );


var load = multer({ storage: routeStore});


/* GET home page. */
router.get('/', booksController.index);
router.get('/create', booksController.create);
router.post('/', load.single('archive'), booksController.save);
router.post('/delete/:id', booksController.eliminate);
router.get('/edit/:id', booksController.edit);

router.post('/update', load.single('archive'), booksController.update);

module.exports = router;
