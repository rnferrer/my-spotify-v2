
const express = require('express'),
      passport = require('passport'), 
      session = require('express-session'),
      SpotifyStrategy = require('passport-spotify').Strategy,
      connectDB = require('./db/connectdb'),
      {tokenCreateOrReplace, userFindOrCreate} = require('./db/utils')

require("dotenv").config({path:"../../.env"})

const PORT = 3000;
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
      callbackURL: process.env.REDIRECT_URI,
    },
    function (accessToken, refreshToken, expires_in, profile, done) {
      // asynchronous verification, for effect...
      process.nextTick(async function () {
        const {displayName: name, id: userID, photos: [{value:image}], emails: [{value: email}]} = profile
        console.log(image)
        const user = await userFindOrCreate(name, userID, image, email)
        await tokenCreateOrReplace(userID, accessToken, refreshToken)
        // To keep the example simple, the user's spotify profile is returned to
        // represent the logged-in user. In a typical application, you would want
        // to associate the spotify account with a user record in your database,
        // and return that user instead.
        return done(null, user);
      });
    }
  )
);

app.use(
  session({secret: 'keyboard cat', resave: true, saveUninitialized: true})
);

app.use(passport.initialize());
app.use(passport.session());

const spotifyRouter = require('./routes/spotifyRouter')(passport)

app.use('/api/spotify', spotifyRouter)

app.get("/api/hello", (req, res) => {
  let foo = req.body
  console.log(foo)
  res.json({ hello: "world" });
});


app.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}...`);
    });
  } catch (error) {
    console.log('Error in starting app:', error);
  }
};

start();
