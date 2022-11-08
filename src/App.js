import "./scss/allStyles.scss";
import NavBar from "./components/NavBar.js";
import About from "./components/About.js";

function App() {
  return (
    <>
      <header className="app-header">
        <NavBar />
      </header>
      <body className="app-body">
        <About />
      </body>
    </>
  );
}

export default App;
