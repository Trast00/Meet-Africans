import './App.css';
import Header from './components/header/Header';
import Features from './components/home/Features/Features';
import Headline from './components/home/headline/Headline';
import PresentationChat from './components/home/presentations/PresentationChat';

function App() {
  return (
    <div className="App">
      <Headline />
      <Header />
      <Features />
      <PresentationChat />
    </div>
  );
}

export default App;
