import logo from "./logo.svg";
import "./App.css";

const HelloMuc = () => {
  return <p>Hello Muc-3</p>;
};

const HelloHeader = () => {
  return <hi>HI, ich bin ein nicer Header.</hi>;
};

const HelloHeader2 = () => {
  return <h2>Und dann kommt das Logo</h2>;
};

const HelloFooter = () => {
  return (
    <footer className="app__footer">
      <nav>
        <ul>
          <li>Person1</li>
          <li>Person2</li>
          <li>Person3</li>
        </ul>
      </nav>
    </footer>
  );
};

function App() {
  // comment here hinschreiben //
  return (
    <div className="App">
      {/* comment here schreiben */}
      <header className="App-header">
        <HelloHeader />
        <HelloHeader2 />
        <img src={logo} className="App-logo" alt="logo" />
        <HelloMuc />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <HelloFooter />
    </div>
  );
}

export default App;
