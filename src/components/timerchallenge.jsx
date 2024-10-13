import { useRef, useState } from "react";
import ResultModal from "./resultModal";

// eslint-disable-next-line react/prop-types
export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef()
  const dialog = useRef()
  const [timeStarted, setTimeStarted] = useState(false);
  const [timeExpired, setTimeExpired] = useState(false);


//   function handleStart(nameOf) {
//     timer.current = setTimeout(() => {
//       console.log(nameOf + " is done");
//       setTimeExpired(true)
//     }, targetTime * 1000);
//     setTimeStarted(true);
//   }


  function handleStart() {
    timer.current = setTimeout(() => {
        dialog.current.openly()
      setTimeExpired(true);
    }, targetTime * 1000);

    setTimeStarted(true);
  }


  function handleStop() {
    clearTimeout(timer.current);
    // setTimeExpired(false)
    console.log('cleaning')
  }

  return (
    <>
    <ResultModal ref={dialog} targetTime={targetTime} result= 'lost'/>
    <section className="challenge">
      <h2 className="title">{title}</h2>
      <p className="challenge-time">{targetTime} second</p>
      <p>
        {/* <button onClick={!timeStarted ? () => handleStart(title) : handleStop}>
          {timeExpired ? "stop" : "start"} Challenge
          </button> */}

        <button onClick={timeStarted ? handleStop : handleStart}>
            {timeStarted ? 'Stop' : 'Start'} Challenge
          </button>
      </p>
      <p> Timer running / inactive</p>
    </section>
          </>
  );
}

// Note =======> there is a major problem .
//  timer is started but unable to stop cause 'stop_function' is unable to find the same 'start_functon
// i need to grab the function that has already started after clicking the button without re-rendering the value.
// to stop re-rendering , i need to use useref hook
// this  is parent file of resultModal.