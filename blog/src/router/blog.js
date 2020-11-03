const { ResSuccess,ResError } = require("../model/model.js")
const { getList,getDetail,addBlog,updateBlog,deleteBlog } = require("../controller/blog.js")

const handleBlogRouter = (req, res)=>{
    let method = req.method
    let path = req.path
    let id = req.query.id || ""
    let author = req.query.author || ""

    // 接口 -list
    if(method ==="GET" && path ==="/api/blog/list"){
        let keyword = req.query.keyword || ""
        // let listData = getList(author, keyword)
        // let result = new ResSuccess(listData, "OK")
        // return result
        return getList(author, keyword).then(listData=>{
            let result = new ResSuccess(listData, "OK")
            return result
        })
    }
    // 接口 -detail
    if(method ==="GET" && path ==="/api/blog/detail"){
        // let detailData = getDetail(id)
        // let result = new ResSuccess(detailData, "OK")
        // return result
        return getDetail(id).then(detailData=>{
            let result = new ResSuccess(detailData, "OK")
            return result
        })
    }

    // 接口 -add
    if(method ==="POST" && path ==="/api/blog/add"){
        // let blogData = addBlog(req.body)
        // let result = new ResSuccess(blogData, "OK")
        // return result
        // req.body.author = "zhangsan"
        return addBlog(req.body).then(blogData=>{
            let result = new ResSuccess(blogData, "OK")
            return result
        })
    }

    // 接口 -delete
    if(method ==="POST" && path ==="/api/blog/delete"){
        // let result = deleteBlog(id)
        // if(result){
        //     return new ResSuccess()
        // }else{
        //     return new ResError("删除失败")
        // }
        return deleteBlog(id, author).then(deleteResult=>{
            if(deleteResult){
                return new ResSuccess()
            }else{
                return new ResError("更新失败")
            }
        })
    }

    // 接口 -update
    if(method ==="POST" && path ==="/api/blog/update"){
        // let result = updateBlog(id, req.body)
        // if(result){
        //     return new ResSuccess()
        // }else{
        //     return new ResError("更新失败")
        // }
        return updateBlog(id, req.body).then(updateResult=>{
            if(updateResult){
                return new ResSuccess()
            }else{
                return new ResError("更新失败")
            }
        })
    }

}


module.exports = handleBlogRouter