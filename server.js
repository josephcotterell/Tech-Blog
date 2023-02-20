const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const helpers = require("./utils/helpers");

//express app
const app = express();
//port
const PORT = process.env.PORT || 3001;

//require sequelize
const sequelize = require("./config/connection");
//session store
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// session const
const sess = {
  secret: "secret",
  cookie: {
    // Session will expire in 10 minutes
    expires: 10 * 60 * 1000,
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

//session app
app.use(session(sess));

//handlebars
const hbs = exphbs.create({ helpers });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

//require routes
app.use(require("./controllers/"));

//listen sequelize sync
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
