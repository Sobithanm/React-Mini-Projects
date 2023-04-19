import React, {useState, useRef} from 'react'
import VIDEO from "./Video_play_Or_Pause/Song.mp4"


const App = () => {

    let videoRef = useRef()

    let [loading,setLoading] = useState(false)

    let playOrPause=()=>{
        if(loading==true){
            setLoading(false)
            videoRef.current.play()
        }
        else{
            setLoading(true)
            videoRef.current.pause()
        }
    }

  return (
    <div>
        <center>
        <video src={VIDEO}  controls height="500px" width="600px" ref={videoRef} onClick={playOrPause}></video>
        </center>
    </div>
  )
}

export default App