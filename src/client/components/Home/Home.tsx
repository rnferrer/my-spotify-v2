import './Home.css'
import MusicDrawer from '../MusicDrawer/MusicDrawer';


function Home():JSX.Element{
  fetch('/api/hello')
  .then(res => res.json())
  .then(data => console.log(data))
  return (
    <>
      <div id="home-container">
        <MusicDrawer/>
      </div>
    </>
  )
}

export default Home;