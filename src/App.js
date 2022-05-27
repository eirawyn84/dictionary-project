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
          <small>Coded by Eira Owen</small>
        </footer>
      </div>
    </div>
  );
}
