import './MusicLibrary.css'
import { ScrollArea } from '@/components/ui/scroll-area';
import PlaylistDialog from '../PlaylistDialog/PlaylistDialog';

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


function MusicLibrary():JSX.Element{

  return (
    <>
      <div id="music-library-container">
        <h1 id="music-library-header">
          Library
        </h1>
        <div id="music-library-playlist-container">
          <ScrollArea className='h-[85%]'>

            {
              dummyPlaylists.map((playlist) => {
                return(
                  <div id="playlist-item-container">

                    <div id="playlist-image-info-container">
                      <div id="playlist-image-container">
                        <img src={playlist.image}/>
                      </div>
                      <div id="playlist-item-info-container">
                        <p id="playlist-item-title">{playlist.title}</p>
                        <p id="playlist-item-author-total">{`${playlist.author} • ${playlist.total} songs`}</p>
                      </div>
                    </div>
                    <PlaylistDialog/>

                  </div>
                )
              })
            }

          </ScrollArea>
        </div>
      </div>
    </>
  )
}

export default MusicLibrary;