const { default: axios } = require("axios");

// user login
const contestdata =async (req,res)=>{
        await axios.get('https://competeapi.vercel.app/contests/upcoming')
       .then((response)=>{
        console.log(response.data);
        res.status(200).json(response.data);
       })
        
    .catch((err)=>{
        res.status(400).json({"error_occured":err})
    })
       
    
}


// export 

module.exports={
    contestdata
   
}