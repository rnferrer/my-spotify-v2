import './Home.css'
import MusicDrawer from '../MusicDrawer/MusicDrawer';


function Home():JSX.Element{
  return (
    <>
      <div id="home-container">
        <MusicDrawer/>
      </div>
    </>
  )
}

export default Home;