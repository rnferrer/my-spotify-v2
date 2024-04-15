import './MusicDrawer.css';
import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { useToast } from '@/components/ui/use-toast';
import { useEffect, useState } from 'react';
import MusicSearch from './MusicSearch/MusicSearch';
import MusicQueue from './MusicQueue/MusicQueue';
import MusicLibrary from './MusicLibrary/MusicLibrary';

type SearchResult = {
  image: string,
  artists: string[],
  name: string,
  uri: string
}

function MusicDrawer() {

  const { toast } = useToast();
  const [ queue, setQueue ] = useState<SearchResult[]>([])

  const handleQueue = (song:string, image:string, artist:string, uri:string, isQueueing:boolean, index:number) => {
    if (isQueueing){
      setQueue([
        ...queue,
        {
          image,
          artists: [...artist],
          name: song,
          uri
        }
      ])
      return toast({
        description: `${song} has been queued`,
        duration: 1500,
      })
    }

    else{
      console.log(index)
      setQueue(queue.filter((item, i)=> i!==index))
      return toast({
        variant: 'destructive',
        description: `${song} has been dequeued`,
        duration: 1500,
      })
    }
  }

  // useEffect(()=>{

  // },[queue])
  return (
    <>
      <Drawer direction='left'>
        <DrawerTrigger asChild>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="gray" className="drawer-button" viewBox="0 0 16 16">
            <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
          </svg>
        </DrawerTrigger>
        <DrawerContent className="music-drawer-container">
          <MusicSearch handleQueue={handleQueue}/>
          <div id='search-queue-divider'/>
          <MusicQueue handleQueue={handleQueue} queue={queue}/>
          <div id='queue-library-divider'/>
          <MusicLibrary handleQueue={handleQueue}/>
        </DrawerContent>

      </Drawer>
    </>
  )
}

export default MusicDrawer