import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Results from './components/Results';

function App() {
  return (
    // BEM standard
    <div className="App">
      <Header/>
      <Nav/>
      <Results/>
    </div>
  );
}

export default App;
