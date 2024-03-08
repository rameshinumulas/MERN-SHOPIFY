import './App.css';
import Mainlayout from './Mainlayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import store from './middleware/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Mainlayout />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
