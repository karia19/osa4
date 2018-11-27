const mongoose = require('mongoose')


//const url = 'mongodb://karia:koulu18@ds151282.mlab.com:51282/blogi';
//mongoose.connect(url);
const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }

})

blogSchema.statics.format = (blogs) => {
    return {
        title: blogs.title,
        id: blogs._id,
        author: blogs.author,
        url: blogs.url,
        likes: blogs.likes,
        user: blogs.user
    }
}

/*

const Blog = mongoose.model('blogi', {
    title: String,
    author: String,
    url: String,
    likes: Number,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})
*/

const Blog = mongoose.model('blogi', blogSchema)


module.exports = Blog;