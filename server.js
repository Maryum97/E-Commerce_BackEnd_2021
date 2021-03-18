// Dependancies
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

// App
const app = express();

// Port
const PORT = process.env.PORT || 3001;

// Make use of dependancies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// Sync sequelize models to database, then turn on the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`App is now listening on port: ${PORT}`));
});