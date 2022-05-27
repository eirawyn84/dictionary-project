import Dictionary from "./Dictionary";
import logo from "./logo.png";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="Sunset" />
        </main>

        <footer className="App-footer">
          <small>
            This project was Coded by Eira Owen and is{" "}
            <a href="https://github.com/eirawyn84/dictionary-project">
              open-sourced on GitHub{" "}
            </a>
            and{" "}
            <a href="https://cheerful-douhua-47e288.netlify.app/">
              hosted on Netlify{" "}
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
