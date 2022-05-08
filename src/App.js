import {
  Navbar,
  About,
  Contact,
  Projects,
  Work,Footer
} from './components'
import Footer2 from './components/footer2/Footer2';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Projects/>
      <Work/>
      <Contact/>
      <Footer2/>
    </div>
  );
}

export default App;
