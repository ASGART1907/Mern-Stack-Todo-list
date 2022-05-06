const express = require("express");
const Todo = require("../Models/TodoModels");
const router = express.Router();


router.post("/",async(req,res) => {
 try{
  const {todo} = req.body;
  console.log(todo);

  const newTodo = new Todo({
    todo:todo,
    interim:false
  });

  newTodo.save()
    .then(result => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
    })

  
 }catch(err){
   console.log(err);
 }
})



router.delete("/remove/:id",(req,res) => {
  const id = req.params.id;
  Todo.findByIdAndDelete(id)
    .then(result => {
      res.json("Remove Success");
    })
    .catch(err => {
      console.log(err);
    })
})

router.get("/all",(req,res) => {
  Todo.find()
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      console.log(err);
    })
});

module.exports = router;