const express = require('express');
const router = express.Router();
const WrapAsync = require('../utils/WrapAsync');
const Campground = require('../models/campground');
const {isLoggedIn,isOwner,validateCampground} = require('../middleware')
const campgrounds = require('../controllers/campgrounds')
const multer = require('multer');
const {storage} = require('../cloudinary/index')
const upload = multer({storage:storage})

router.get('/',WrapAsync(campgrounds.index))

router.get('/new',isLoggedIn,campgrounds.newForm)

router.post('/',isLoggedIn,upload.array('image'),validateCampground,WrapAsync(campgrounds.createNewCamp))

router.get('/:id',WrapAsync(campgrounds.showCamp))

router.get('/:id/edit',isLoggedIn,isOwner,WrapAsync(campgrounds.editForm))

router.put('/:id',isLoggedIn,isOwner,upload.array('image'),validateCampground,WrapAsync(campgrounds.updateCamp))

router.delete('/:id',isLoggedIn,isOwner,WrapAsync(campgrounds.destroyCamp))


module.exports = router;