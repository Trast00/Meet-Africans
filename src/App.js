import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Download from './components/home/dowload/Download';
import Features from './components/home/Features/Features';
import Headline from './components/home/headline/Headline';
import Interests from './components/home/interests/Interests';
import PresentationChat from './components/home/presentations/PresentationChat';

function App() {
  return (
    <div className="App">
      <Headline />
      <Header />
      <Features />
      <Interests />
      <PresentationChat />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
