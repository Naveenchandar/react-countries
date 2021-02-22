import './App.css';
import Countries from './components/index';
import { Provider } from 'react-redux';
import store from './store/index';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Countries />
      </Provider>
    </div>
  );
}

export default App;
