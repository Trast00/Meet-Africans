import './App.css';
import Header from './components/header/Header';
import Features from './components/home/Features/Features';
import Headline from './components/home/headline/Headline';

function App() {
  return (
    <div className="App">
      <Headline />
      <Header />
      <Features />
    </div>
  );
}

export default App;
