const zod = require("zod");

/*
    {
        title:string,
        description:string
    }
    {
        id:string
    }
*/ 

const createtodo = zod.object({
    title:zod.string(),
    description:zod.string()
})

const updatetodo = zod.object({
    _id:zod.string()
})

module.exports = {
    createtodo:createtodo,
    updatetodo:updatetodo
}