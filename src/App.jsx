import { useEffect, useState } from "react";
import "./App.css";
import CountDown from "./components/CountDown";
import ShowCountDown from "./components/ShowCountDown";

function App() {
  const [isStart, setIsStart] = useState(false);
  let [hour, setHour] = useState(0);
  let [minute, setMinute] = useState(0);
  let [second, setSecond] = useState(0);
  const [timerId, setTimerId] = useState(0);
  const [pause, setPause] = useState(false);

  const handleStart = () => {
    if (second <= 0 && minute <= 0 && hour <= 0) {
      alert("please Enter Value");
    } else {
      setIsStart(true);
    }
  };

  const runTimer = (sec, min, hr, tid) => {
    if (sec > 0) {
      setSecond((s) => s - 1);
    } else if (sec === 0 && min > 0) {
      setMinute((m) => m - 1);
      setSecond(59);
    } else if (min === 0) {
      setHour((h) => h - 1);
      setMinute(59);
      setSecond(59);
    }
  };

  useEffect(() => {
    let tid;
    if (isStart) {
      tid = setInterval(() => {
        runTimer(second, minute, hour, tid);
      }, 1000);
      setTimerId(tid);
    }

    return () => {
      clearInterval(tid);
    };
  }, [isStart, second, minute, second]);

  const handleReset = () => {
    setHour("00");
    setMinute("00");
    setSecond("00");
    setIsStart(false);
  };
  const handlePause = () => {
    clearInterval(timerId);
    setPause(true);
  };
  const handleResume = () => {
    setPause(false);
    runTimer(second, minute, hour);
  };
  return (
    <>
      <center>
        <h1 className="heading">Count Down Timer</h1>
        {!isStart && (
          <CountDown
            handleStart={handleStart}
            setHour={setHour}
            setMinute={setMinute}
            setSecond={setSecond}
          ></CountDown>
        )}

        {isStart && (
          <ShowCountDown
            hour={hour}
            minute={minute}
            second={second}
            handleReset={handleReset}
            handlePause={handlePause}
            handleResume={handleResume}
            isStart={isStart}
            pause={pause}
          ></ShowCountDown>
        )}
      </center>
    </>
  );
}

export default App;
