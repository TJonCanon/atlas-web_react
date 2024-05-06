import './App.css';
import holbertonLogo from './HolbertonLogo.jpg';
import { getFullYear, getFooterCopy } from './utils';
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={holbertonLogo} alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
      <p>{getFooterCopy(true)} - {getFullYear()}</p>
      </div>
    </div>
  );
}

export default App;