const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    res.send('all shelters')
})

router.post('/',(req,res)=>{
    res.send('creating a new shelter')
})

router.get('/:id',(req,res)=>{
    res.send('viewing one shelters')
})

router.get('/:id/edit',(req,res)=>{
    res.send('editing shelters')
})

module.exports = router;