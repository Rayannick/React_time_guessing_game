import { useRef } from "react";
import { useState } from "react";

export default function Player() {


  // This is because setting ref.current does not trigger a re-render. Information that’s used for rendering should be state instead.
  const playername = useRef()


const [enteredPlayerName, setEnteredPlayerName] = useState(null)
// const [submited, setSubmited] = useState(false)





// function handleChange(e){
//   setSubmited(false)
//   setEnteredPlayerName(e.target.value)
// }



function handleClick(){
  // setSubmited(true)
  setEnteredPlayerName(playername.current.value)
}


  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'Unknown MF'}</h2>
      <p>
        <input type="text"  ref={playername} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
