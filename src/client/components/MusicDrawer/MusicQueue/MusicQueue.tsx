import './MusicQueue.css'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

let dummyResults = [
  // {
  //   album: 'https://picsum.photos/50',
  //   artist: 'Post Malone',
  //   song: 'Goodbyes (ft. Young thug & Justin Beiber)'
  // },
  {
    album: 'https://picsum.photos/50',
    artist: 'Post Malone',
    song: 'I Fall Apart'
  },
  {
    album: 'https://picsum.photos/50',
    artist: 'Post Malone',
    song: 'White Iverson'
  },
  {
    album: 'https://picsum.photos/50',
    artist: 'Post Malone',
    song: 'Sunflower'
  },
  {
    album: 'https://picsum.photos/50',
    artist: 'Post Malone',
    song: 'Psycho'
  },
  {
    album: 'https://picsum.photos/50',
    artist: 'Post Malone',
    song: 'Goodbyes'
  },
  {
    album: 'https://picsum.photos/50',
    artist: 'Post Malone',
    song: 'I Fall Apart'
  },
  {
    album: 'https://picsum.photos/50',
    artist: 'Post Malone',
    song: 'White Iverson'
  },
  {
    album: 'https://picsum.photos/50',
    artist: 'Post Malone',
    song: 'Sunflower'
  },
  {
    album: 'https://picsum.photos/50',
    artist: 'Post Malone',
    song: 'Psycho'
  },
]

function MusicQueue() {
  return (
    <>
      <div id="music-queue-container">
        <ScrollArea id="music-queue-list-container">
          <strong>
            <h1 id="music-queue-title">
              Queue
            </h1>
          </strong>
          {
            dummyResults.map((result)=> {
              return(
                <>
                  <div id="music-queue-list-item-container">
                    <div id="music-queue-list-item-info">
                      <div id="music-queue-list-image-container">
                        <img src={result.album}></img>
                      </div>
                      <p>{`${result.artist} - ${result.song}`}</p>

                    </div>
                  </div>
                  <Separator/>
                
                </>
              )
            })
          }


        </ScrollArea>

      </div>
    </>

  )
}

export default MusicQueue