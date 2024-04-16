import './MusicLibrary.css'
import { ScrollArea } from '@/components/ui/scroll-area';
import { Skeleton } from '@/components/ui/skeleton';
import PlaylistDialog from '../PlaylistDialog/PlaylistDialog';
import { useEffect, useState } from 'react';


const dummyPlaylists = [
  {
    image: 'https://picsum.photos/50',
    title: 'Chill',
    author: 'Raymond Ferrer',
    total: 50,
  },
  {
    image: 'https://picsum.photos/50',
    title: 'Not Chill',
    author: 'Raymond Ferrer',
    total: 40,
  },
  {
    image: 'https://picsum.photos/50',
    title: 'Vibes',
    author: 'Raymond Ferrer',
    total: 32,
  },
  {
    image: 'https://picsum.photos/50',
    title: 'Some long playlist name that won\'t ',
    author: 'Raymond Ferrer',
    total: 230,
  },
  {
    image: 'https://picsum.photos/50',
    title: 'Chill',
    author: 'Bob',
    total: 150,
  },
]

type PlaylistItem = {
  image: string,
  title: string,
  author: string,
  total: number
}


function MusicLibrary ({handleQueue}:any):JSX.Element{

  const [playlists, setPlaylists] = useState([])

  useEffect(()=>{

    const getPlaylists = async() => {
      let response = await fetch('/api/spotify/playlists');
      const {playlists} = await response.json()
      setPlaylists(playlists)
    }
    getPlaylists();
  }, [playlists])

  return (
    <>
      <div id="music-library-container">
        <h1 id="music-library-header">
          Library
        </h1>
        <div id="music-library-playlist-container">
          { (playlists.length === 0)
            ?
            <div id='music-library-loading-container'>
              <div className='music-library-skeleton-container'>
                <Skeleton className='h-[40px] w-[40px] mr-2'/>
                <div>
                  <Skeleton className='h-4 w-[250px] mb-2'/>
                  <Skeleton className='h-4 w-[200px]'/>
                </div>
              </div>
              <div className='music-library-skeleton-container'>
                <Skeleton className='h-[40px] w-[40px] mr-2'/>
                <div>
                  <Skeleton className='h-4 w-[250px] mb-2'/>
                  <Skeleton className='h-4 w-[200px]'/>
                </div>
              </div>
              <div className='music-library-skeleton-container'>
                <Skeleton className='h-[40px] w-[40px] mr-2'/>
                <div>
                  <Skeleton className='h-4 w-[250px] mb-2'/>
                  <Skeleton className='h-4 w-[200px]'/>
                </div>
              </div>
            </div>
            :
              <ScrollArea className='h-[85%]'>

              {
                playlists.map((playlist:PlaylistItem, i) => {
                  return(
                    <div id="playlist-item-container" key={i}>

                      <div id="playlist-image-info-container">
                        <div id="playlist-image-container">
                          <img src={playlist.image}/>
                        </div>
                        <div id="playlist-item-info-container">
                          <p id="playlist-item-title">{playlist.title}</p>
                          <p id="playlist-item-author-total">{`${playlist.author} • ${playlist.total} songs`}</p>
                        </div>
                      </div>
                      <PlaylistDialog handleQueue={handleQueue}/>

                    </div>
                  )
                })
              }

            </ScrollArea>
          }
          
        </div>
      </div>
    </>
  )
}

export default MusicLibrary;