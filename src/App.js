import logo from './logo.svg';
import './App.css';
import profileImage from './img/myimage.jpg';

function App() {
  return (
    <div className="App">
     <h1>my app</h1>
     <img src={profileImage} alt/>
    </div>
  );
}

export default App;