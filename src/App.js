import './App.css';
import Menu from './Menu';
import HelloUser from './HelloUser';
import folkesson from './folkesson.png';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu namn="Ulla-Bella" />
        <img src={folkesson} alt="folkesson" />
        <HelloUser />
      </header>
    </div>
  );
}

export default App;

