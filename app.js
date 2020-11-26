const express = require('express')
var exphbs = require('express-handlebars');
var employee = require('./modules/employee_module');
const path = require('path')
const app = express()
const port = 3000
const hostName = '127.0.0.1'

// statik dosyalar eklenmesi için klasör adı verildi.
app.use(express.static('public'))

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('site/index');
});

app.get('/about', (req, res) => {
    res.render('site/about');
});

app.get('/contact', (req, res) => {
    res.render('site/contact');
});

app.get('/blog', (req, res) => {
    res.render('site/blog');
});

app.get('/login', (req, res) => {
    res.render('site/login');
});

app.get('/register', (req, res) => {
    res.render('site/register');
});

app.get('/employees', (req, res) => {
    const list = employee.employees;
    console.log(list);
    res.send(list);
});

app.listen(port, hostName, () => {
    console.log(`Server çalışıyor, http://${hostName}:${port}/`);
})