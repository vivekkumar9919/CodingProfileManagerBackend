const { default: axios } = require("axios");

// user login
const codechefdata =async (req,res)=>{
 
       const user= await axios.get('https://competeapi.vercel.app/user/codechef/vivek9919')
       .then((response)=>{
        res.status(200).json(response.data);
       })
        // console.log(user)
        // res.json(user)
        // if(user.length!=0){
        //     console.log("")
        //     res.status(200).json(user)
        // }
        // else{
        //     console.log("user not found");    
        // }
        
    .catch((err)=>{
        res.status(400).json({"error_occured":err})
    })
       
    
}





// export 

module.exports={
    codechefdata
   
}