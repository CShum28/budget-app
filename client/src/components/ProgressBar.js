import "../styles/ProgressBar.css";

function ProgressBar({ progress, barColor }) {
  const color = () => {
    return barColor > 100 ? "#fa667b" : "#03bc9c";
  };

  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        <div
          className="progress-bar__fill"
          style={{
            width: `${progress}%`,
            backgroundColor: `${color()}`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
