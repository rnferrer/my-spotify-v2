
const express = require('express'),
      passport = require('passport'), 
      session = require('express-session')
      SpotifyStrategy = require('passport-spotify').Strategy;

require("dotenv").config({path:"../../.env"})

const port = 3000;
const app = express();

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

passport.use(
  new SpotifyStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/api/callback',
    },
    function (accessToken, refreshToken, expires_in, profile, done) {
      // asynchronous verification, for effect...
      process.nextTick(function () {
        // To keep the example simple, the user's spotify profile is returned to
        // represent the logged-in user. In a typical application, you would want
        // to associate the spotify account with a user record in your database,
        // and return that user instead.
        return done(null, profile);
      });
    }
  )
);

app.use(
  session({secret: 'keyboard cat', resave: true, saveUninitialized: true})
);
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());


app.get("/api/hello", (req, res) => {
  let foo = req.body
  console.log(foo)
  res.json({ hello: "world" });
});

app.get("/api/login",   
  passport.authenticate('spotify', {
    scope: ['user-read-email', 'user-read-private'],
    showDialog: true,
  }
));

app.get("/api/callback",
  passport.authenticate('spotify', {failureRedirect: '/login'}),
  function (req, res) {
    res.redirect('http://localhost:5173/home');
  }
);

app.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
