const express = require("express");
const cors = require("cors")
const port = 8080;
const app = express();
const {createtodo,updatetodo} = require("./type.js");
const {todo} = require("./db.js");


app.use(express.json());
app.use(cors());

app.post("/todo",async (req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createtodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You sent wrong inputs"
        })
        return;
    }
    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })
    res.json({msg:"created todo successfully"})
})

app.get("/todos",async (req,res)=>{
    const todos = await todo.find({});
    // console.log(todos);
    res.json({todos})
})

app.put("/completed",async(req,res)=>{
    const updatePayload = req.body;
    const parsedPayload = updatetodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You sent wrong inputs"
        })
        return;
    }
    await todo.updateOne({_id:req.body._id},{completed:true})
    res.json({
        msg:"Todo marked as Completed"
    })
})

app.listen(port,(error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log(`app is running on http://localhost:${port}`);
    }
})
