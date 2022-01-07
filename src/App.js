import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Info from './components/Info';
import Section from './components/Section';

function App() {
  return [
    <section className="todoapp">
      <Header />
      <Section />
      <Footer />
    </section>,
    <Info />
  ];
}

export default App;
