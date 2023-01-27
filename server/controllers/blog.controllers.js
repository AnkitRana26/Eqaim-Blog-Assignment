const blogModel = require("../database/blog");



const createBlog =async(body)=>{
    const createdBlog = await blogModel.create(body);
    return createBlog;
}



const getBlogs=async()=>{
    const blogList = await blogModel.find({});
    return blogList;
}



const getBlog=async(id)=>{
    const foundBlog = await blogModel.findOne({'_id':id});

    if(!foundBlog){
        throw new Error("Blog Not Found")
    }

    return foundBlog;
}


module.exports={getBlog,getBlogs,createBlog};