var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise =global.Promise;


var blog = new Schema({
    title   : String,
    content : String,
    author : String,
    imageURL: String

});
var Blog =  mongoose.model('blog',blog);
module.exports = Blog;

