const express = require('express')
const path = require('path')

const app = express()
app.use(express.urlencoded());
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))
app.use('/static',express.static('static'))


const port = 3000

var contactList = [
    {
        name:'ajay',
        contact : 12345
    },
    {
        name:'sanjay',
        contact : 198765
    },
    {
        name:'jaya',
        contact : 12986345
    }
]
   
app.post('/delete',(req,res)=>{
    contactList=contactList.filter(item=>item.name !== req.body.person)
    res.redirect('/')
})

app.post('/',(req,res)=>{
    var person={
        name:req.body.name,
        contact:req.body.contact
    }

    contactList.push(person);
    res.redirect('/')
})

app.get('/',(req,res)=>{
    return res.render('home',{
        title:"My Contacts List",
        contact_list:contactList
    })
})

app.get('/practice',(req,res)=>{
    return res.render('practice',{title:"Playing with ejs"})
})

app.listen(port,()=>{
    console.log('listening on port',port);
})