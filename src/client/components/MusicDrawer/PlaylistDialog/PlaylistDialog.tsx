import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
  } from "@/components/ui/dialog"

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
          <DialogContent>
            <DialogHeader className="absolute w-full top-0 left-0 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-t-xl">
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
          </DialogContent>
        </Dialog>
      </div>
    </>
  )
}

export default PlaylistDialog