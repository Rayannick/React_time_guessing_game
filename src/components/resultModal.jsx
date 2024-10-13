/* eslint-disable react/prop-types */
import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal({result,targetTime},ref){

    const dialog = useRef( );

    // to show only mothod to the parent file, use useImperativeHandle

    useImperativeHandle(ref,()=>{
        return { 
            
            
            // create a customize method that need to be expose to the parent element.
            openly(){
            dialog.current.showModal();
        }}
    })

    return(
        <dialog ref={dialog} className="result-modal">

<h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
        </dialog>
    )
})


export default ResultModal