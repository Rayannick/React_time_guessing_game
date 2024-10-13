/* eslint-disable react/prop-types */
import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal({onReset,remainingTime,targetTime},ref){

    const dialog = useRef( );
const score = Math.round((1-remainingTime/ (targetTime*1000))*100)
    const userLost = remainingTime<=0

    const formattedRemainingTime  = (remainingTime/1000).toFixed(2)


    // to show only mothod to the parent file, use useImperativeHandle

    useImperativeHandle(ref,()=>{
        return { 
            
            
            // create a customize method that need to be expose to the parent element.
            openly(){
            dialog.current.showModal();
        }}
    })




    //  to manipulate dom , create portal is used. when component is need to be in specific element of the website.

    return createPortal(
        <dialog ref={dialog} className="result-modal">

{userLost && <h2> You lost</h2>}
{!userLost && <h2>Your score : {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
        </dialog>, document.getElementById('modal')
    )
})


export default ResultModal