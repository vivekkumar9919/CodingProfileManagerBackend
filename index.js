const express =require('express');
const dotenv=require('dotenv');
const mongoose =require('mongoose')
const cors=require("cors")


dotenv.config();
const app=express();

// middleware
app.use(express.json())
app.use(cors())


// Connectiong database
mongoose.connect(process.env.DB_CONNECT,{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{
    console.log('Database connected ,lets work!');
})
.catch((err)=>{
    console.log(`Some error occured ${err}`);
})


// import routes
const loginRoutes=require('./routes/logindetails')
const TloginRoutes=require('./routes/Tloginroute')

const studentRoutes=require('./routes/Saddfreindroute')
const SaddquestRoutes=require('./routes/Sadquestionroute')
const StidentProfileRoutes=require('./routes/studentprofileroute')

const TmakelistRoutes=require('./routes/TmakelistRoute')
const TsorlistRoutes=require('./routes/Tsortlistroute')

app.use("/api",loginRoutes)
app.use("/api/teacher_login",TloginRoutes)

app.use("/api/student",studentRoutes)
app.use("/api/student/question",SaddquestRoutes)
app.use("/api/student/profile",StidentProfileRoutes)

app.use('/api/teacher/list/',TmakelistRoutes)
app.use('/api/teacher/sortlist/',TsorlistRoutes)







// listen the server at port
app.listen(3000,()=>{
 console.log("Server is live on 3000");
})