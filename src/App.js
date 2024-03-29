import { useRef, useState } from "react"

const App = () => {
  const [randomInput, setRandomInput] = useState('');
  const [second, setSecond] = useState(0);
  const renders = useRef(0);
  const inputRef = useRef();
  const timerId = useRef();

  const handleChange = (e) => {
    setRandomInput(e.target.value);
    renders.current++;
  }

  const startTimer = () => {
    timerId.current = setInterval(() => {
        renders.current++
        setSecond((prev) => prev + 1)
    }, 1000)
  }

  const stopTimer = () => {
    clearInterval(timerId.current);
    timerId.current = 0;
  }

  const resetTimer = () => {
    stopTimer();
    if(second){
      renders.current++;
      setSecond(0);
    }
  }

  const focusInput = () => {
    inputRef.current.focus();
  }

  return (
    <main className="App">
        <input
          ref={inputRef}
          type="text"
          placeholder="Random Input"
          value={randomInput}
          onChange={handleChange}
        />
        <br /><br />
        <h3>Renders: {renders.current}</h3>
        <h5>Seconds: {second}</h5>
        <section>
          <button onClick={startTimer}>Start</button>
          <button onClick={stopTimer}>Stop</button>
          <button onClick={resetTimer}>Reset</button>
        </section>
        <button onClick={focusInput} type="button">Focus</button>
        <br /><br />
        <h4>{randomInput}</h4>

    </main>
  )
}

export default App
