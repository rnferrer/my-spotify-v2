import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger
  } from "@/components/ui/dialog"

  import { 
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow 
  } from "@/components/ui/table"

import { ScrollArea } from "@/components/ui/scroll-area"

import './PlaylistDialog.css'

let dummyPlaylist = {
  image: 'https://picsum.photos/100',
  title: 'Chillin\`',
  type: 'Playlist',
  author: 'Raymond',
  authorImage: 'https://picsum.photos/50',
  followers: 4,
  total: 400
}

let samplePlaylist = [ 
  {
    artist: 'Post Malone',
    song: 'Goodbyes',
    image: 'https://picsum.photos/50',
    time: 210000, //3.5 minutes,
    date_added: 'May 19, 2020',
    album: 'Hollywood\'s Bleeding'
  },
  {
    artist: 'Umi',
    song: 'SHOW ME OUT',
    image: 'https://picsum.photos/50',
    time: 210000, //3.5 minutes,
    date_added: 'May 20, 2020',
    album: 'Talking to the wind'
  },
  {
    artist: 'Post Malone',
    song: 'White Iverson',
    image: 'https://picsum.photos/50',
    time: 210000, //3.5 minutes,
    date_added: 'June 19, 2020',
    album: 'Stoney (Deluxe)'
  },
  {
    artist: 'Post Malone, Justin Bieber',
    song: 'Deja Vu',
    image: 'https://picsum.photos/50',
    time: 210000, //3.5 minutes,
    date_added: 'April 19, 2020',
    album: 'Stoney (Deluxe)'
  },
  {
    artist: 'Doja Cat',
    song: 'Agora Hills',
    image: 'https://picsum.photos/50',
    time: 250000, //3.5 minutes,
    date_added: 'July 30, 2020',
    album: 'Agora Hills'
  },
  {
    artist: 'Amine, Young Thug',
    song: 'Compensating',
    image: 'https://picsum.photos/50',
    time: 210000, //3.5 minutes,
    date_added: 'April 19, 2020',
    album: 'Limbo'
  },
  {
    artist: 'Amine',
    song: 'Caroline',
    image: 'https://picsum.photos/50',
    time: 210000, //3.5 minutes,
    date_added: 'April 20, 2020',
    album: 'Good For You'
  },
  {
    artist: 'BROCKHAMPTON',
    song: 'Sugar',
    image: 'https://picsum.photos/50',
    time: 210000, //3.5 minutes,
    date_added: 'March 20, 2020',
    album: 'GINGER'
  },
  {
    artist: 'DUCKWRTH, Kyle Dion',
    song: 'World on Wheels',
    image: 'https://picsum.photos/50',
    time: 210000, //3.5 minutes,
    date_added: 'April 20, 2020',
    album: 'SuperGood'
  },
  {
    artist: 'Post Malone, SZA',
    song: 'Staring at the Sun',
    image: 'https://picsum.photos/50',
    time: 210000, //3.5 minutes,
    date_added: 'September 20, 2020',
    album: 'Hollywood\'s Bleeding'
  },
]

function MStoMinutes (ms: number): string {
  let minutesString: string = '';
  minutesString += Math.floor((ms/1000)/60).toString();
  minutesString += ':' + ((ms/1000)%60).toString()
  return minutesString;
}

function PlaylistDialog():JSX.Element {
  return (
    <>
      <div id="playlist-dialog-container">
        <Dialog>
          <DialogTrigger>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
              <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
            </svg>
          </DialogTrigger>
          <DialogContent className="">
            <DialogHeader className="w-full bg-gradient-to-r from-sky-500 to-indigo-500 rounded-t-xl">
              <div className="playlist-dialog-header-container">

                <div className="playlist-dialog-header-image-container">
                  <img src={dummyPlaylist.image} className="playlist-dialog-header-image" alt="" />
                </div>

                <div className="playlist-dialog-header-info-container">
                  <p className="playlist-dialog-header-type">{dummyPlaylist.type}</p>
                  <h1 className="playlist-dialog-header-title">{dummyPlaylist.title}</h1>
                  <div className="playlist-dialog-header-info-details-container">
                    <div className="playlist-dialog-header-author-image-container">
                      <img className="playlist-dialog-header-author-image" src={dummyPlaylist.authorImage}/>
                    </div>
                    <p>
                      {`${dummyPlaylist.author} • ${dummyPlaylist.followers} likes • ${dummyPlaylist.total} songs`}
                    </p>
                  </div>

                </div>
              </div>
            </DialogHeader>

            <ScrollArea className="playlist-dialog-table-container">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[20px]">#</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Album</TableHead>
                    <TableHead>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                    </svg>
                    </TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {(samplePlaylist.length > 0)
                    ?
                    samplePlaylist.map((track, i) => {
                      return(
                        <TableRow>
                          <TableCell>{i+1}</TableCell>
                          <TableCell>
                            <div className="playlist-dialog-table-track-container">
                              <div className="playlist-dialog-table-track-image-container">
                                <img src={track.image}></img>
                              </div>
                              <div className="playlist-dialog-table-track-info-container">
                                <p>{track.song}</p>
                                <p>{track.artist}</p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>{track.album}</TableCell>
                          <TableCell>{MStoMinutes(track.time)}</TableCell>
                          <TableCell>+</TableCell>
                        </TableRow>
                      )
                    })
                    :
                    <></>
                  }
                </TableBody>

              </Table>

            </ScrollArea>
          </DialogContent>
        </Dialog>
      </div>
    </>
  )
}

export default PlaylistDialog