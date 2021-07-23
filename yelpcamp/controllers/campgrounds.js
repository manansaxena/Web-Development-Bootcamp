const Campground = require('../models/campground');
const {cloudinary} = require('../cloudinary/index')

module.exports.index = async(req,res)=>{
    const camps = await Campground.find({});
    res.render('campgrounds/index',{camps})
};

module.exports.newForm = (req,res)=>{
    return res.render('campgrounds/new')
};

module.exports.createNewCamp = async (req,res,next)=>{
    // if(!req.body.campground) throw new ExpressError('Invalid Campground Data',400);
    const camp = new Campground(req.body.campground);
    camp.images = req.files.map(file=>({url:file.path,filename:file.filename}));
    camp.owner = req.user._id;
    await camp.save();
    req.flash('success','successfully created your campground')
    res.redirect(`/campgrounds/${camp._id}`)
};

module.exports.showCamp = async(req,res)=>{
    const { id } = req.params;
    const camp = await Campground.findById(id).populate({path:'reviews',populate:{path:'owner'}}).populate('owner');
    if(!camp){
        req.flash('error','Campground Not Found')
        return res.redirect('/campgrounds')
    }
    res.render('campgrounds/show',{camp})
};

module.exports.editForm = async (req,res)=>{
    const {id} = req.params;
    const camp = await Campground.findById(id);
    if(!camp){
        req.flash('error','Campground Not Found')
        return res.redirect('/campgrounds')
    }
    res.render('campgrounds/edit',{camp})
};

module.exports.updateCamp = async(req,res)=>{
    const {id} = req.params;
    const camp = await Campground.findByIdAndUpdate(id,{...req.body.campground})
    const imgs = req.files.map(file=>({url:file.path,filename:file.filename}))
    camp.images.push(...imgs);
    await camp.save();
    if(req.body.deleteImages){
        for(let filename of req.body.deleteImages){
            await cloudinary.uploader.destroy(filename)
        }
        await camp.updateOne({$pull:{images:{filename:{$in:req.body.deleteImages}}}})
    }
    
    // if(!camp){
    //     req.flash('error','Campground Not Found')
    //     return res.redirect('/campgrounds')
    // }
    req.flash('success','successfully updated your campground')
    res.redirect(`/campgrounds/${camp._id}`)
};

module.exports.destroyCamp = async(req,res)=>{
    const {id} = req.params;
    const camp = await Campground.findById(id);
    if(camp.images){
        for(let image of camp.images){
            await cloudinary.uploader.destroy(image.filename)
        }
    }
    await Campground.findByIdAndDelete(id)
    req.flash('success','successfully deleted your campground')
    res.redirect('/campgrounds/')
};