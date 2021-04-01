const express = require('express')
var exphbs = require('express-handlebars');
var employee = require('./modules/employee_module');
const path = require('path')
const app = express()
const port = 3000
const hostName = '127.0.0.1'
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/node_blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// statik dosyalar eklenmesi için klasör adı verildi.
app.use(express.static('public'))

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

const mainRoutes = require('./routes/main');
const postRoutes = require('./routes/post');

app.use('/', mainRoutes);
app.use('/post', postRoutes);

app.listen(port, hostName, () => {
    console.log(`Server çalışıyor, http://${hostName}:${port}/`);
})