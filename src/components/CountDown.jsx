function CountDown({ handleStart, setHour, setMinute, setSecond }) {
  // const [hour, setHour] = useState();
  // const [minute, setMinute] = useState();
  // const [second, setSecond] = useState();

  const handleHour = (event) => {
    setHour(event.target.value);
  };
  const handleMinute = (event) => {
    setMinute(event.target.value);
  };
  const handleSecond = (event) => {
    setSecond(event.target.value);
  };

  return (
    <div>
      <div className="input">
        <input onChange={handleHour} type="text" placeholder="HH" />
        <input onChange={handleMinute} type="text" placeholder="MM" />
        <input onChange={handleSecond} type="text" placeholder="SS" />
      </div>
      <button onClick={handleStart} className="timer-button">
        Start
      </button>
    </div>
  );
}

export default CountDown;
