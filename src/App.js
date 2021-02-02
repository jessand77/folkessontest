import './App.css';
import HelloUser from './HelloUser';
import folkesson from './folkesson.png';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={folkesson} alt="folkesson" />
        <HelloUser />
      </header>
    </div>
  );
}

export default App;

