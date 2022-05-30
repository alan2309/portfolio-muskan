import {
  Navbar,
  About,
  Projects,
  Work,
} from './components'
import Footer2 from './components/footer2/Footer2';
import Contact2 from './components/contact/Contact2';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Projects/>
      <Work/>
      <Contact2/>
      <Footer2/>
    </div>
  );
}

export default App;
