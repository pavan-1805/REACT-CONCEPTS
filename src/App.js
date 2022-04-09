import Counter from './components/Redux/Counter';
import CounterTwoComponent from './components/Redux/CounterTwoComponent';
import InputChange from './components/Redux/InputChange';


function App() {
  return (
    <div className="App">
      <h3>COUNTER ONE</h3>
      <Counter />  <br></br><br></br><br></br><br></br><br></br>
      <h3>COUNTER TWO</h3>
      <CounterTwoComponent /><br></br><br></br><br></br>
      <InputChange />
    </div>
  );
}

export default App;
