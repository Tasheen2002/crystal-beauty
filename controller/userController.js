import User from "../models/user.js";

export function createUser(req, res) {
  const user = new User(req.body);
  user
    .save()
    .then(() => {
      res.json({
        message: "User created",
      });
    })
    .catch(() => {
      res.json({
        message: "User not created",
      });
    });
}

export function loginUser(req,res){
    User.find({email:req.body.email}).then((users)=>{
        if(users.length==0){
            res.json({
                message:"User not found"
            })
        }
        else{
            const user=users[0];
            const isPasswordCorrect=bcrypt.compareSync(req.body.password,user.password);

            if(isPasswordCorrect){
                res.json({
                    message:"User logged in"
                })
            }
            else{
                res.json({
                    message:"User not logged in Password Incorrect "
                })
            }
        }
    })
}
