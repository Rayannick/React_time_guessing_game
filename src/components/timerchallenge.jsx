/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import ResultModal from "./resultModal";

// eslint-disable-next-line react/prop-types
// function TimerChallenge({ title, targetTime }) {
//   const timer = useRef();
//   const dialog = useRef();
//   const [timeStarted, setTimeStarted] = useState(false);
//   const [timeExpired, setTimeExpired] = useState(false);

//   //   function handleStart(nameOf) {
//   //     timer.current = setTimeout(() => {
//   //       console.log(nameOf + " is done");
//   //       setTimeExpired(true)
//   //     }, targetTime * 1000);
//   //     setTimeStarted(true);
//   //   }

//   function handleStart() {
//     timer.current = setTimeout(() => {
//       dialog.current.openly();
//       setTimeExpired(true);
//     }, targetTime * 1000);

//     setTimeStarted(true);
//   }

//   function handleStop() {
//     clearTimeout(timer.current);
//     // setTimeExpired(false)
//     console.log("cleaning");
//   }

//   return (
//     <>
//       <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
//       <section className="challenge">
//         <h2 className="title">{title}</h2>
//         <p className="challenge-time">{targetTime} second</p>
//         <p>
//           {/* <button onClick={!timeStarted ? () => handleStart(title) : handleStop}>
//           {timeExpired ? "stop" : "start"} Challenge
//           </button> */}

//           <button onClick={timeStarted ? handleStop : handleStart}>
//             {timeStarted ? "Stop" : "Start"} Challenge
//           </button>
//         </p>
//         <p> Timer running / inactive</p>
//       </section>
//     </>
//   );
// }

// UPDATE===============>

export default function TimerChallengeer({ title, targetTime }) {
  const timer = useRef();
  // 1/resultmodule e useref forward hobe   2/ result module e giya ei ref custom hoibo useimperivativehandle er maddome 3/ref er sathe custome method add hoibo
  const dialog = useRef();
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timerIsActive = timeRemaining > 0 && timeRemaining<targetTime*1000

  if(timeRemaining<=0){
    clearInterval(timer.current);
    dialog.current.openly()
  }

console.log(timerIsActive);
  function handleReset(){
    setTimeRemaining(targetTime*1000)
  }
  function handleStop(){
    clearTimeout(timer.current)
    dialog.current.openly()
  }
  function handleStart(){
timer.current= setInterval(() => {
    setTimeRemaining((prev)=>{
        return prev - 10
    })
}, 10);
  }



  


  return (
    <>
    <ResultModal ref={dialog} onReset= {handleReset} remainingTime={timeRemaining}  targetTime ={targetTime}>                </ResultModal>
      <section className="challenge">
        <h2 className="title">{title}</h2>
        <p className="challenge-time">{targetTime} second</p>
        <p>
          <button onClick={timerIsActive? handleStop : handleStart }> {timerIsActive? 'Stop':'Start'} Challenge</button>
        </p>
        <p className={timerIsActive? 'active' : undefined}> Timer {timerIsActive? "Time is running ....." : 'Timer inactive'}</p>
      </section>
    </>
  );
}



























// Note =======> there is a major problem .
//  timer is started but unable to stop cause 'stop_function' is unable to find the same 'start_functon
// i need to grab the function that has already started after clicking the button without re-rendering the value.
// to stop re-rendering , i need to use useref hook
// this  is parent file of resultModal.
