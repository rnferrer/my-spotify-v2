import './MusicDrawer.css';
import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import MusicSearch from './MusicSearch/MusicSearch';
import MusicQueue from './MusicQueue/MusicQueue';
import MusicLibrary from './MusicLibrary/MusicLibrary';

function MusicDrawer() {
  return (
    <>
      <Drawer direction='left'>
        <DrawerTrigger asChild>
          <Button>Hello</Button>
        </DrawerTrigger>
        <DrawerContent className="music-drawer-container">
          <MusicSearch/>
          <div id='search-queue-divider'/>
          <MusicQueue/>
          <div id='queue-library-divider'/>
          <MusicLibrary/>
        </DrawerContent>

      </Drawer>
    </>
  )
}

export default MusicDrawer