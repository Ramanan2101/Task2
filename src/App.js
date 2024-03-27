import './App.css';
import DemoRequest from './components/demoRequest/DemoRequest';
import Footer from './components/footer/Footer';
import Cards from './components/recommend/Cards';

function App() {
  return (
    <div className="App">
      <Cards/>
      <DemoRequest/>
      <Footer/>
    </div>
  );
}

export default App;
