import './MusicDrawer.css'
import { Button } from '@/components/ui/button'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'

function MusicDrawer() {
  return (
    <>
      <Drawer direction='left'>
        <DrawerTrigger asChild>
          <Button>Hello</Button>
        </DrawerTrigger>
        <DrawerContent>
          <div id='search-queue-divider'/>
          <div id='queue-library-divider'/>
        </DrawerContent>

      </Drawer>
    </>
  )
}

export default MusicDrawer