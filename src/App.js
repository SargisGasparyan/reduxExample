import './App.css';
import Header from './Header'
import store from './store'
import {Provider} from 'react-redux'
function App() {
  return (
    <div className="App">
    <Provider store={store}>
        <header className="App-header">
        this is mi components
        <Header/>
      </header>
    </Provider>
      
    </div>
  );
}

export default App;
