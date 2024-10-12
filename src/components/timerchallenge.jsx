// eslint-disable-next-line react/prop-types
export default function TimerChallenge({title, targetTime}){
    return ( 
        <section className="challenge">
            <h2 className="title">
                {title}
            </h2><p className="challenge-time">
                    {targetTime} second
                </p>
                <p>
                    <button>
                        Start Challenge
                    </button>
                </p>
                <p> Timer running / inactive</p>
        </section>
    )
}