import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App" style={{ backgroundImage: "💩" }}>
      <svg width="100%" xmlns="http://www.w3.org/2000/svg">
        <clipPath id="emojiClipPath">
          <text x="0" y="130px" font-size="130px">
            💩💩💩💩💩💩💩💩💩
          </text>
        </clipPath>
        <text x="0" y="130px" font-size="130px" clip-path="url(#emojiClipPath)">
          💩💩💩💩💩💩💩💩💩
        </text>
      </svg>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
      <figure>
        <video
          src="https://thecodinglove.com/content/043/mIZV5gp.mp4"
          autoPlay={true}
          loop
          controls
          width="50%"
        />
        <figcaption>
          <h2>
            After your first react code review when your code is total shit
          </h2>
        </figcaption>
      </figure>
      <svg width="100%" xmlns="http://www.w3.org/2000/svg">
        <clipPath id="emojiClipPath">
          <text x="0" y="130px" font-size="130px">
            💩💩💩💩💩💩💩💩💩
          </text>
        </clipPath>
        <text x="0" y="130px" font-size="130px" clip-path="url(#emojiClipPath)">
          💩💩💩💩💩💩💩💩💩
        </text>
      </svg>
      {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
