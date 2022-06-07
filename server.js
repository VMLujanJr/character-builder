const express = require("express");
const routes = require("./controllers");
const sequelize = require("./config/connection.js");
const path = require("path");
const exphbs = require("express-handlebars");
const helpers = require("./utils/helpers.js");
const hbs = exphbs.create({ helpers });
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;
const sess = {
  secret: 'super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
      db: sequelize
  })
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(session(sess));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`Application listening on port ${PORT}...`)
  );
});
