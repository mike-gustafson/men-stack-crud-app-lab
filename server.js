require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');

const itemRoutes = require('./routes/itemRoutes');

const app = express();

require('./config/database');

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use('/items', itemRoutes);

app.set('view engine', 'ejs');
app.set('views', 'views');


app.get('/', (req, res) => {
    res.render('home', { title: 'Home' });
})

app.get('*', (req, res) => {
    res.render('404', { title: 'Page Not Found' });
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})