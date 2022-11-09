const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dreams', {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

.then(() => console.log('Established a connection with the database :) yay! '))
.catch((err) => console.log("Something wrong when connecting to db",err))