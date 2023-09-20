import "../styles/ProgressBar.css";

function ProgressBar({ progress }) {
  console.log("percent: ", progress);

  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        <div
          className="progress-bar__fill"
          style={{ width: `${progress}%`, backgroundColor: "#03bc9c" }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
