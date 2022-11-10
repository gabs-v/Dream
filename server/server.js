const express = require('express');
const app = express();

require('./config/mongoose.config')
require('./routes/dreams.routes')(app)

app.use(express.json(),
express.urlencoded({extended: true}
))


app.listen(8000, () => console.log('alllllll fired on port 8000 yayyyyy!!! ~.~'))