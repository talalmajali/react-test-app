import logo from './logo.svg';
import './App.css';

import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import OurForm from './forms/OurForm';


function App() {
  return (
    <div className="App">
    <Container className="p-3">
    <Jumbotron>
      <h1 className="header">Welcome To React-Bootstrap</h1>
    </Jumbotron>
    </Container>
    <OurForm />
    </div>
  );
}

export default App;
