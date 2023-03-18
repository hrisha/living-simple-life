import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Container from './Components/Container';

function App() {
  return (
    <div className="App">
      <Header/>
      <Container className="container container-flex" />
      <Footer/>
    </div>
  );
}

export default App;
