import Student from "../models/student.js";

function getStudents(req, res){
  
    Student.find().then((studentList)=>{
        res.json({
            list:studentList
        })
    })
}

function createStudents(req, res){
    
  const student=new Student(req.body);
  student.save().then(()=>{
    res.json({message:"This is a post request for student router"})
  })
}

function deleteStudents(req, res){
    
    Student.deleteOne({name:req.body.name}).then(()=>{
        res.json({
            message:"Student deleted successfully"
        })
    })
}

export {getStudents,createStudents,deleteStudents};