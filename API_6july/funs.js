const userDetails=(req, res)=> {

    let m1 = req.body.m1;
    console.log(m1);
    res.json({ message: "User created successfully" });

}

const getUser = (req, res) =>{
    res.json({
        userid:req.params.id,
        username:req.params.name,
        message:"User created successfully"
    });

}

const updateUser = (req, res) => {

    res.json({
        userid: req.params.id,
        username:req.params.name,
        Message:"User Detail updated"
    });

}

const deleteUser = (req, res) => {

    console.log(req.params.id);
    res.json({

    });

}

 const arrayObj = (req, res) => {
    console.log(req.params.id);
    let array1 = [
        {id:"001", name:"Bharat"},
        {id:"002", name:"Tushar"},
        {id:"003", name:"Pranav"}
        ];

        res.json(array1);
        console.log(array1);
        console.log(array1[1]);


}
module.exports = {userDetails, getUser, updateUser, deleteUser, arrayObj};