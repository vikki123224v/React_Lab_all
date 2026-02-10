import { useState} from 'react'

const App = () => {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);
  const increase = () => setCounter(counter + step);
  const decrease = () => setCounter(counter - step>=0? counter - step: 0);
  const reset = () => setCounter(0);
  return (
    <div style={StyleSheet.container}>
      <p >NAME:Vighneshwara</p>
      <p>USN:4MW23CS184</p>
      <h1>Counter Application</h1>
      <h2>Counter Value:{counter}</h2>
      {/* Step Input */}
      <div>
        <label>
          Step Value:
        </label>
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          style={StyleSheet.input}
        />    
      </div>
      {/* Buttons */}
      <div>
        <button onClick={increase} style={StyleSheet.button}>Increase</button>
        <button onClick={decrease} style={StyleSheet.button}>Decrease</button>
        <button onClick={reset} style={StyleSheet.resetButton}>Reset</button>    

      </div>
    </div>
  );
};
//inline styles
const StyleSheet = {
  container: {
    textAlign: 'center',
    backgroundColor: '#1ad42a',
    fontFamily: 'Arial, sans-serif',
    marginTop: '50px',
    width: '100dvw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  
 button: {
    margin: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: 'blue',
  },
  input: {
    marginLeft: '10px',
    padding: '5px',
    fontSize: '16px',
    width: '60px',
  },
  resetButton: {
    margin: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: 'red',
    color: 'white',
  },
  
};
export default App;