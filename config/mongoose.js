const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/contacts_list_db', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are connected to the database');
});



// const contact1 = new contact({
//     name : 'ajay',
//     contact : 12345678
// })

// contact1.save();

// contact.findOneAndDelete({name : 'ajay'},(err,doc)=>{
//     if(err){
//         return console.log('error in deleting doc',err);
//     }
//     console.log('successfully deleted the doc ',doc);
// })

// contact.findOneAndUpdate({name : 'ajay'},{name:'svijay',class : 10})
// .then((doc)=>{
    
//     console.log('successfully updated the doc ',doc);
// })
// .catch(err=>{
//     console.log('error in deleting',err);
// })