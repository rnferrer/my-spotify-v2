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
  ));

  router.get('/callback',
    passport.authenticate('spotify', {failureRedirect: '/login'}),
    function (req, res) {
      res.cookie('user', req.user.userID)
      res.redirect('http://localhost:5173/home');
    }
  );


  router.get('/search', async(req, res) => {
    let { q } = req.query;
    const token = await tokenFind(req.cookies.user);
    const spotifyResponse = await fetch('https://api.spotify.com/v1/search?' + new URLSearchParams({
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
    );
    const {tracks: {items}} = await spotifyResponse.json();
    const tracks = extractTracksFromSearch(items);
    res.send({tracks});
  });

  // router.get('/queue', async (req,res) => {
  //   const token = await tokenFind(req.cookies.user)

  //   let spotifyResponse = await fetch('https://api/spotify.com/v1/me/player/queue',{
  //     headers:{
  //       "Authorization": `Bearer ${token}`
  //     }
  //   });

  //   const {queue} = await spotifyResponse.json();
  //   console.log(queue)
  //   const tracks = extractTracksFromSearch(queue);

  //   res.send({tracks});
  // });

  router.post('/queue', async(req, res) => {
    let { uri } = req.body;
    const token = await tokenFind(req.cookies.user);
    let response = await fetch('https://api.spotify.com/v1/me/player/queue' + new URLSearchParams({
        uri
      }),
      {
        method: 'POST',
        headers:{
          "Authorization": `Bearer ${token}`
        }
      }
    );
    console.log(response);
    res.send('Queued song');
  });


  router.get('/playlists', async(req,res) => {
    const token = await tokenFind(req.cookies.user);

    const spotifyResponse = await fetch('https://api.spotify.com/v1/me/playlists', {
      headers:{
        "Authorization": `Bearer ${token}`
      }
    });
    const {items} = await spotifyResponse.json()
    const playlists = extractInfoFromPlaylist(items)
    res.send({playlists})
  })

  router.get('/playlist', async(req,res) => {
    const { spotifyID } = req.body
    const token = await tokenFind(req.cookies.user);
    const spotifyResponse = await fetch(`https://api.spotify.com/v1/playlist/${spotifyID}`, {
      headers:{
        "Authorization": `Bearer ${token}`
      }
    });

    const { 
      owner, 
      followers :{total},
      images: [{url}],
      name,
      tracks: {items}
    } = await spotifyResponse.json();

    res.send({owner,total,url,name,items});
  })


  function extractTracksFromSearch (tracks) {

    const results = tracks.map((track)=> {

      const { 
        uri,
        artists,
        name, 
        album: {
          images:[, ,{url:image}],
        }
      } = track,
      artistArray = artists.map(({name}) => name);

      return {
        artists: artistArray,
        name,
        image,
        uri
      };
    })

    return results;
  }
  

  function extractInfoFromPlaylist (playlists) {
    const results = playlists.map((playlist)=>{

      const {
        uri,
        id,
        owner: {
          display_name: author
        },
        images: [{ url:image }],
        tracks:{ total },
        name: title
      } = playlist

      return ({
        uri,
        author,
        image,
        total,
        title,
        id
      })
    })
    return results
  };

  return router;
}