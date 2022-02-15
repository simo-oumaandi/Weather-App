const express=require("express");
const app=express();

const path=require("path");
const hbs=require('hbs')

const static_path=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../templates/views")
const partial_path=path.join(__dirname,"../templates/partials")

app.use(express.static(static_path));
app.set('view engine', 'hbs');
app.set('views',template_path);
hbs.registerPartials(partial_path);

app.get("/",(req,res)=>{
    res.render("weather");
})



app.listen(8000, _ => console.log(`Server Running On Port 8000`));