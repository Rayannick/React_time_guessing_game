import Player from './components/Player.jsx';
import TimerChallenge from './components/timerchallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges"></div>
      <TimerChallenge title={'Easy'} targetTime={1} />
      <TimerChallenge title={'Not Easy'} targetTime={5} />
      <TimerChallenge title={'Hard'} targetTime={10} />
      <TimerChallenge title={'Hard as Fuck'} targetTime={15} />
    </>
  );
}

export default App;
  