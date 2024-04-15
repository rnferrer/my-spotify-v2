import React, { useState } from 'react';
import './MusicSearch.css'
import { Input } from '@/components/ui/input';

let dummyResults = [
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
  }
]

type SearchResult = {
  image: string,
  artists: string[],
  name: string,
  uri: string
}

//TODO: make musicsearch props type
function MusicSearch({handleQueue}:any):JSX.Element{

  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])

  const handleSearch = async(event:React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
    console.log(searchQuery)
    if(event.target.value === ""){
      setSearchResults([])
    }
    else{
      let response = await fetch(`/api/spotify/search?q=${event.target.value}`)

      const {tracks} = await response.json()
      console.log()
      setSearchResults(tracks)
    }
  }

  return (
    <>
      <div id="music-search-container">
        <Input type="text" placeholder="Search" onChange={handleSearch}/>
        { (searchResults.length == 0)
          ?
          <></>
          :
          <div id="search-results-container">
            <ul>
              {
                searchResults.map((result:SearchResult, i:number) => {
                  if (result.name.length > 30) {
                    result.name = result.name.slice(0,25) + '...'
                  }
                  return(
                    <li key={i} className="search-result-item" onClick={(e) => handleQueue(result.name, result.image, result.artists, result.uri, true, i)}>
                      <div id="search-result-info-container">
                        <div id="search-result-image-container">
                          <img src={result.image}></img>
                        </div>
                        <p>{`${result.artists[0]} - ${result.name}`}</p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="search-result-add-button" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                      </svg>
                    </li>
                  )
                })

              }
            </ul>
          </div>

        }
      </div>
    </>
  )
}

export default MusicSearch;