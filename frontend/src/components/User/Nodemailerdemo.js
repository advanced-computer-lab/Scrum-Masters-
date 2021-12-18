


const nodemailer =require('nodemailer')


 const transporter = nodemailer.createTransport({
   service:"hotmail",
   auth: {
     user:"maramACL@outlook.com",
     pass:"Benamer1!"
   },
   tls:{
       rejectUnauthorized:false
   }


 })
 const options ={
   from:"maramACL@outlook.com",
   to:"marambenamer@yahoo.com",
   subject:"Email trial",
   text:"Let's see"
 };
 transporter.sendMail(options,  function(err,info){
 if(err){
   console.log("error!",err);
   return;
 }
 console.log("mail sent successfully")})