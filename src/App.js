import './App.css';
import Container from './components/Container.jsx';
import DataLoader from './components/DataLoader.jsx';

function App() {
  return (
    <div className="App">
      <Container title={'Vending Machine'}>
        <DataLoader />
      </Container>
    </div>
  );
}

export default App;
