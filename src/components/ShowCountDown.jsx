import React from "react";

function ShowCountDown({
  hour,
  minute,
  second,
  handleReset,
  handlePause,
  handleResume,
  pause,
}) {
  return (
    <div className="show-container">
      <div className="timer-box">
        <div>{hour}</div>
        <span>:</span>
        <div>{minute}</div>
        <span>:</span>
        <div>{second}</div>
      </div>
      <div className="action-button">
        {!pause && (
          <button onClick={handlePause} className="timer-button">
            Pause
          </button>
        )}

        {pause && (
          <button onClick={handleResume} className="timer-button">
            Resum
          </button>
        )}

        <button onClick={handleReset} className="timer-button">
          Reset
        </button>
      </div>
    </div>
  );
}

export default ShowCountDown;
