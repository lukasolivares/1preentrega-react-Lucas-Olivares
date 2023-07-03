import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'react-bootstrap-icons'
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer greeting="Hola!"/>
    </div>
  );
}

export default App;
