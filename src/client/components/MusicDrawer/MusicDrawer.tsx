import './MusicDrawer.css';
import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { useToast } from '@/components/ui/use-toast';
import MusicSearch from './MusicSearch/MusicSearch';
import MusicQueue from './MusicQueue/MusicQueue';
import MusicLibrary from './MusicLibrary/MusicLibrary';

function MusicDrawer() {

  const { toast } = useToast();

  const handleQueue = (song:string) => {
    return toast({
      description: `${song} has been queued`,
      duration: 1500,
    })
  }
  return (
    <>
      <Drawer direction='left'>
        <DrawerTrigger asChild>
          <Button>Hello</Button>
        </DrawerTrigger>
        <DrawerContent className="music-drawer-container">
          <MusicSearch handleQueue={handleQueue}/>
          <div id='search-queue-divider'/>
          <MusicQueue/>
          <div id='queue-library-divider'/>
          <MusicLibrary handleQueue={handleQueue}/>
        </DrawerContent>

      </Drawer>
    </>
  )
}

export default MusicDrawer