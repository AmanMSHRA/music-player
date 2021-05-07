const exp = require('express');
const connection = require('mysql');
const bodyparser = require('body-parser');
const app = exp();
const port = process.env.port || 3000

app.engine('pug', require('pug').__express);

app.use(exp.static('../Music_Player_web-App'));
app.use(bodyparser.urlencoded({extended : false}))
app.set('view engine', 'pug');

app.get('/',(req,res)=>{
    
    res.sendFile('music.html',{root:__dirname});
    console.log("server is running...");
});

app.post('/submit',(req, res)=>{

    res.render('index',{title: 'Success_page',
    message: 'Your data has been saved successfully'})

});


app.listen(port, ()=>{
    console.log("Your server is running at this Port...localhost:3000");
})