const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://uppulayogeshwar:J0qAlNeuwLuIcDkA@todo.0mgbibt.mongodb.net/todos").then(()=>{
    console.log("connected");
})

const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo = mongoose.model("todos",todoSchema);

module.exports = {todo}
