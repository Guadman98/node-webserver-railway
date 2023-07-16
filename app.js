const express = require('express');
const hbs = require('hbs');
require('dotenv').config();
const app = express();
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', (err) => {});

// Servir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Gustavo Manzano',
    titulo: 'Curso de Node',
  });
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Gustavo Manzano',
    titulo: 'Curso de Node',
  });
});

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Gustavo Manzano',
    titulo: 'Curso de Node',
  });
});

app.get('*', (req, res) => {
  res.send('404 | Not found');
});

app.listen(port, () => {
  console.log(`La aplicación se está ejecutando en el puerto ${port}`);
});
