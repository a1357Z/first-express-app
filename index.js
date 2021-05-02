const express = require('express')
const path = require('path')
const {contact} = require('./models/contactList') 
require('./config/mongoose')
const app = express()
app.use(express.urlencoded());
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))
app.use('/static',express.static('static'))


const port = 3000

 
app.post('/delete',async (req,res)=>{
    try{
        let deleted = await contact.findByIdAndDelete(req.body.id)
        console.log('deleted doc',deleted);
    }catch(e){
        console.log(e);
    }
    
  
    res.redirect('/')
})

app.post('/',async (req,res)=>{
    var person={
        name:req.body.name,
        contact:req.body.contact
    }
    //can also use model.create(object) method that returns a promise
    let contact1 = new contact(person)
    try{
        let ans = await contact1.save()
        console.log(ans);
    }catch(e){
        console.log(e);
    }
    res.redirect('/')
})

app.get('/',async (req,res)=>{
    try{
        let list = await contact.find({})
        return res.render('home',{
            title:"My Contacts List",
            contact_list:list
        })
    }catch(e){
        console.log(e);
    }
    
})

app.get('/practice',(req,res)=>{
    return res.render('practice',{title:"Playing with ejs"})
})

app.listen(port,()=>{
    console.log('listening on port',port);
})