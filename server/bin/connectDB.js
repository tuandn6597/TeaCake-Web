var mongoose = require('mongoose');
var key=require('../config');

mongoose.connect(key.mongo,{ useNewUrlParser: true}, function(err){
    if(err) throw err;
    else console.log("Ket noi thanh cong !!");
})

require('../model/blog');
require('../model/khachhang');
require('../model/loai_khachhang');
require('../model/loai_sanpham');
require('../model/nhanvien');
require('../model/sanpham');
