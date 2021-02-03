import './App.css';
import Menu from './Menu';
import HelloUser from './HelloUser';
import folkesson from './folkesson.png';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu namn="Folkesson" />
        <img src={folkesson} alt="folkesson" />
        <HelloUser />
      </header>
    </div>
  );
}

export default App;

