import './MusicLibrary.css'
import { ScrollArea } from '@/components/ui/scroll-area';

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
    title: 'Some long playlist name that won\'t fit',
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
          <ScrollArea className='playlist-scroll-area-container'>

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

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                      <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                    </svg>

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