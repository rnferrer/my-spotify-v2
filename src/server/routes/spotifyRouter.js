const express = require('express');
const router = express.Router();



module.exports = function (passport) {

  router.get('/login',  
    passport.authenticate('spotify', {
      scope: [
        'user-read-email', 
        'user-read-private',
        'user-read-playback-state',
        'user-modify-playback-state',
        'user-read-currently-playing',
        'playlist-read-private',
        'playlist-read-collaborative',
        'user-follow-read',
        'user-read-playback-position',
        'user-top-read',
        'user-read-recently-played',
        'user-library-read', 
        'streaming',
      ],
      showDialog: true,
    }
  ))

  router.get('/callback',
    passport.authenticate('spotify', {failureRedirect: '/login'}),
    function (req, res) {
      res.redirect('http://localhost:5173/home');
    }
  );

  return router
}