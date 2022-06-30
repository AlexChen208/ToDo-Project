const mongoose = require('mongoose')
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema
 
 
const listSchema = new Schema({
   listItem: {
       type: String
   }
})
 
const categoriesSchema = new Schema({
   title: {
       type: String
   },
   dueDate: {
       type: Date,
       default: function() {
         let d = new Date();
         let month = d.getMonth();
         let day = d.getDate();
         let result = new Date(month, day);
         return result;
       }
   },
   lists: [listSchema]
})
 
 
module.exports = mongoose.model('Category', categoriesSchema)

