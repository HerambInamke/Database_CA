const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://heramb15012006:coco1234@cluster007.ocrqt.mongodb.net/',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>console.log('Connection established'))
.catch(err=>console.log(err));

module.exports = mongoose;