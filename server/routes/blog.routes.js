const {Router} = require('express');
const { getBlogs, getBlog, createBlog } = require('../controllers/blog.controllers');
const { createCollection } = require('../database/blog');


const blogRouter = Router();


//Get All Blogs

blogRouter.get('/',async(req,res)=>{
    

    try{
        const blogList = await getBlogs();
        res.send({
            data:blogList
        })
    }catch(err){
        res.status(500).send({
            err:err.message
        })
    }



})

//Get Specific Blog

blogRouter.get('/:id',async(req,res)=>{

    try{
        const id = req.params.id;
        const blog = await getBlog(id);
        res.send({
            data:blog
        })
    }catch(err){
        res.status(404).send({
            err:err.message
        })
    }


})

blogRouter.post('/',async(req,res)=>{

    try{
        const body = req.body;
        const postedBlog = await createBlog(body);
        console.log(postedBlog)
        res.send({
            data:postedBlog
        })
    }catch(err){
        console.log(err.message);
        res.status(500).send({
            err:err.message
        })
    }



})


module.exports =blogRouter;