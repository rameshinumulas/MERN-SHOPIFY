import logo from './logo.svg';
import './App.css';
import Mainlayout from './Mainlayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Mainlayout />
      </BrowserRouter>
    </div>
  );
}

export default App;
