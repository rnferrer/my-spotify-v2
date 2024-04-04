import { useState, useEffect } from 'react'
import './Clock.css'
import getTime from '@/client/utils/getTime'


function Clock1() {
  const [currentTime, setCurrentTime] = useState('')
  console.log(getTime())
  useEffect(() => {
    const timer = setInterval(() => { 
    // Creates an interval which will update the current data every minute
    // This will trigger a rerender every component that uses the useDate hook.
      const { time } = getTime()
      console.log(time)
      setCurrentTime(time);
    }, 60 * 1000);
    return () => {
      // Return a funtion to clear the timer so that it will stop being called on unmount
      clearInterval(timer); 
    }
  }, []);

  return (
    <>
      <div id="clock1-container">
        <h1 id='clock1-time'>{currentTime}</h1>
      </div>
    </>
  )
}

export default Clock1