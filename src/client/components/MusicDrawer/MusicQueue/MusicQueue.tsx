import './MusicQueue.css'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { useToast } from '@/components/ui/use-toast';


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

  const { toast } = useToast();

  const handleDequeue = (song:string) => {
    return toast({
      variant: 'destructive',
      description: `${song} has been removed from queue`,
      duration: 1500,
    })
  }

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
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="music-queue-list-item-button" fill="white" viewBox="0 0 16 16" onClick={(e) => handleDequeue(result.song)}>
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                      <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
                    </svg>
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