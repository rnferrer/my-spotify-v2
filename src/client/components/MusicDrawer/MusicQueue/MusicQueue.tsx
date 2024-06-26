import './MusicQueue.css'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'


function MusicQueue({handleQueue, queue}:any): JSX.Element {


  return (
    <>
      <div id="music-queue-container">
        <ScrollArea id="music-queue-list-container">
          <strong>
            <h1 id="music-queue-title">
              Queue
            </h1>
          </strong>
          { (queue.length === 0)
            ?
            <p className='empty-queue-text'>Add songs to queue</p>
            :
            <>
              {
                queue.map((result:any, i:number)=> {
                  return(
                    <div key ={i}>
                      <div id="music-queue-list-item-container">
                        <div id="music-queue-list-item-info">
                          <div id="music-queue-list-image-container">
                            <img src={result.image}></img>
                          </div>
                          <p>{`${result.artists[0]} - ${result.name}`}</p>
    
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="music-queue-list-item-button" fill="white" viewBox="0 0 16 16" onClick={(e) => handleQueue(result.name, result.image, result.artists, result.uri, false, i)}>
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                          <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
                        </svg>
                      </div>
                      <Separator/>
                    </div>
                    
                  )
                })
              }
            </>
            
          }


        </ScrollArea>

      </div>
    </>

  )
}

export default MusicQueue