import weddingLogo from "/ringar-vit-square.png";
import "./App.css";

function App() {
  return (
    <>
      <div className="wrap">
        <a href="https://johan.fjallbark.se" target="_blank">
          <div className="logo individual">J.</div>
        </a>
        <a href="https://wedding.fjallbark.se" target="_blank">
          <img src={weddingLogo} className="logo" alt="Wedding logo" />
        </a>
        <a href="https://catarina.fjallbark.se" target="_blank">
          <div className="logo individual">C.</div>
        </a>
      </div>
      <div className="card">
        <p>Hiya, we're the Fjällbarks!</p>
      </div>
      <p className="read-the-docs">Copyright Fjällbark, 2023</p>
    </>
  );
}

export default App;
