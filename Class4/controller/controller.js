const Blog = require("../model/model");
exports.createBlog= async (req,res)=>{
    const {blog} = req.body;
    const createdBlog = new Blog(blog);
    await createdBlog.save();
    res.json({blog:createdBlog})
}
exports.readAllBlogs= async (req,res)=>{
    const allBlogs = await Blog.find({});
    res.json({blog:allBlogs})
}
exports.readSpecificBlog= async (req,res)=>{
    const {id} = req.params;
    const specificBlog = await Blog.findById(id);
    res.json({blog:specificBlog})
}
exports.updateSpecificBlog= async (req,res)=>{
    const {id} = req.params;
    const {blog} = req.body;
    const updatedBlog = await Blog.findByIdAndUpdate(id,blog,{new:true});
    res.json({blog:updatedBlog})
}

exports.deleteSpecificBlog= async (req,res)=>{
    const {id} = req.params;
    
    
    const updatedBlog = await Blog.findByIdAndDelete(id);
    res.json({blog:updatedBlog})
}