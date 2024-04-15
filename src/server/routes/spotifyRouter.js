const express = require('express');
const router = express.Router();
const { tokenFind } = require('../db/utils');

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
      res.cookie('user', req.user.userID)
      res.redirect('http://localhost:5173/home');
    }
  );

  router.get('/search', async(req, res) => {
    let { q } = req.query
    const token = await tokenFind(req.cookies.user)
    let spotifyResponse = await fetch('https://api.spotify.com/v1/search?' + new URLSearchParams({
        q,
        type: ['track'],
        limit: 5
      }),
      {
        method: 'GET',
        headers:{
          "Authorization": `Bearer ${token}`
        }
      }
    )
    let {tracks: {items}} = await spotifyResponse.json()
    const tracks = extractTracksFromSearch(items)
    res.send({tracks})
  })

  function extractTracksFromSearch (tracks) {

    const results = tracks.map((track)=> {

      const { 
        uri,
        artists,
        name, 
        album: {
          images:[, ,{url}],
        }
      } = track,
      artistArray = artists.map(({name}) => name)

      return {
        artists: artistArray,
        name,
        image: url,
        uri
      }
    })

    return results

  }

  return router
}